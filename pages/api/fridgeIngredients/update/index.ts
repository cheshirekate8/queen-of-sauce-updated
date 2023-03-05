import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// PUT /api/fridgeIngredients/update/
export default async function handle(req, res) {
  const id = parseInt(req.query.id);
  const { FridgeId, IngredientId, quantity } = req.body;
  if (req.method === "PUT") {
    const fridgeIngredient = await prisma.fridgeIngredient.update({
      where: { 
        FridgeId_IngredientId: {
          FridgeId,
          IngredientId,
        },
       },
      data: {
        quantity,
      },
    });
    res.json(fridgeIngredient);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
