// pages/api/post/index.ts

import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// POST /api/fridges/create
// Required fields in body: name
export default async function handle(req, res) {
  const { name, email } = req.body;
  if (req.method === "POST") {
    const session = await getSession({ req });
    const result = await prisma.fridge.create({
      data: {
        name: name,
        owner: { connect: { email: session?.user?.email || email } },
      },
    });
    res.json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
