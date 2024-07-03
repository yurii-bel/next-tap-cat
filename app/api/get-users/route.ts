import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany();

      return NextResponse.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      NextResponse.json({ message: "Failed to fetch users" });
    }
  } else {
    NextResponse.json({ message: "Method not allowed" });
  }
}
