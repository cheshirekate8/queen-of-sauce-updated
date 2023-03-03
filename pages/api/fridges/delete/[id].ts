// pages/api/fridge/[id].ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// DELETE /api/fridges/delete/:id
export default async function handle(req, res) {
  const fridgeId = parseInt(req.query.id);
  if (req.method === "DELETE") {
    const fridge = await prisma.fridge.delete({
      where: { id: fridgeId },
    });
    res.json(fridge);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}


//Add a delete all fridges?