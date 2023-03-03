import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// GET /api/recipes
export default async function handle(req, res) {
  const recipes = await prisma.recipe.findMany();
  res.json(recipes);
}