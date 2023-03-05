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
              Ingredient: { connect: { name: "Egg" } }
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