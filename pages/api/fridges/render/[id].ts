import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// GET /api/fridges/render/[id]
export default async function handle(req, res) {
  const id = parseInt(req.query.id);
  if (req.method === "GET") {
    const fridge = await prisma.fridge.findUnique({
      where: {
        id,
      },
    });
    res.json(fridge);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
