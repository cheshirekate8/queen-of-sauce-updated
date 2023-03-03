import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// GET /api/recipes/[id]
export default async function get(req, res) {
  const id = parseInt(req.query.id);
  const recipe = await prisma.recipe.findUnique({
    where: {
      id
    },
  });
  res.json(recipe);
}