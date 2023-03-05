import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// POST /api/fridgeIngredients/create
// Required fields in body: quantity, FridgeId, IngredientId
export default async function handle(req, res) {
  const { quantity, FridgeId, IngredientId } = req.body;
  if (req.method === "POST") {
    const result = await prisma.fridgeIngredient.create({
      data: {
        quantity: quantity,
        Fridge: { connect: { id: FridgeId } },
        Ingredient: { connect: { id: IngredientId } },
      },
    });
    res.json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
