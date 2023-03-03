import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// GET /api/fridges/update/[id]
export default async function handle(req, res) {
  const id = parseInt(req.query.id);
  const { name } = req.body;
  if (req.method === "PUT") {
    const fridge = await prisma.fridge.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    res.json(fridge);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
