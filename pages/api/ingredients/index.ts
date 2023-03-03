import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// GET /api/ingredients
export default async function handle(req, res) {
  const ingredients = await prisma.ingredient.findMany();
  res.json(ingredients);
}