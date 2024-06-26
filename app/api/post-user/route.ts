import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { id, firstName, lastName, coinsAmount, tapBonus } = await req.json();

  // Validate the request body
  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof coinsAmount !== "number" ||
    typeof tapBonus !== "number"
  ) {
    return NextResponse.json({ message: "Invalid input" }, { status: 400 });
  }

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { id }, // Adjust based on your unique identifier (id, firstName, lastName, etc.)
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        id,
        firstName,
        lastName,
        coinsAmount,
        tapBonus,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
