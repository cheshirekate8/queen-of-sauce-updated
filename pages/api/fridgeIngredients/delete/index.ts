import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// DELETE /api/fridgeIngredients/delete/
export default async function handle(req, res) {
  const { FridgeId, IngredientId } = req.body;
  if (req.method === "DELETE") {
    const fridgeIngredient = await prisma.fridgeIngredient.delete({
      where: { 
        FridgeId_IngredientId: {
          FridgeId,
          IngredientId,
        },
       },
    });
    res.json(fridgeIngredient);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
