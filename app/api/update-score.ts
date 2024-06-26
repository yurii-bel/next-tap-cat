import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userId, score } = req.body;

    // Update the user's score in the database
    await prisma.user.update({
      where: { id: userId },
      data: { coinsAmount: { increment: score } },
    });

    // Fetch the updated result
    const updatedUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    res.status(200).json(updatedUser);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
