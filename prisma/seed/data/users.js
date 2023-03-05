import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// const getEgg = async () => {return await prisma.ingredient.findUnique({
//   where: {
//     name: "Egg"
//   },
// })};

// console.log("GOT THE EGGS", getEgg().id)

module.exports = [
  {
    email: "alice@prisma.io",
    name: "Alice",
    fridges: {
      create: {
        name: "Alice's Fridge",
        FridgeIngredients: {
          create: [
            {
              quantity: 10,
              Ingredient: { connect: { id: 44 } }
            }
          ]
        }
      },
    },
  },
  {
    email: "bob@prisma.io",
    name: "Bob",
  },
]