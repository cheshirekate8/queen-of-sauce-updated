import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// GET /api/fridges/render
export default async function handle(req, res) {
  if (req.method === "GET") {
    //This gets all fridges, need to just get a user's fridges
    const fridges = await prisma.fridge.findMany();
    res.json(fridges);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
