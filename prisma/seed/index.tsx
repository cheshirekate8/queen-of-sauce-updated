import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Users = require('./data/users');
const Ingredients = require('./data/ingredients');
const Recipes = require('./data/recipes');

async function runSeeders() {
  // Ingredients
  await Promise.all(
    Ingredients.map(async (ingredient) =>
      prisma.ingredient.create({
        data: ingredient,
      })
    )
  );

  // Recipes (with their Ingredients)
  await Promise.all(
    Recipes.map(async (recipe) =>
      prisma.recipe.create({
        data: recipe,
      })
    )
  );

  // Users (with their Fridges and Ingredients)
  await Promise.all(
    Users.map(async (user) =>
      prisma.user.create({
        data: user,
      })
    )
  );
}

runSeeders()
  .catch((e) => {
    console.error(`There was an error while seeding: ${e}`);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Successfully seeded database. Closing connection.');
    await prisma.$disconnect();
  });