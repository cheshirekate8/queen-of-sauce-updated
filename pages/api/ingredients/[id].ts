import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// GET /api/ingredients/[id]
export default async function get(req, res) {
  const id = parseInt(req.query.id);
  const ingredient = await prisma.ingredient.findUnique({
    where: {
      id
    },
  });
  res.json(ingredient);
}