import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Users = require('./data/users');
const Ingredients = require('./data/ingredients');
const Recipes = require('./data/recipes');
const RecipeIngredients = require('./data/recipeIngredients');

async function runSeeders() {
  // Users
  await Promise.all(
    Users.map(async (user) =>
      prisma.user.create({
        data: user,
      })
    )
  );

  // Ingredients
  await Promise.all(
    Ingredients.map(async (ingredient) =>
      prisma.ingredient.create({
        data: ingredient,
      })
    )
  );

  // Recipes
  await Promise.all(
    Recipes.map(async (recipe) =>
      prisma.recipe.create({
        data: recipe,
      })
    )
  );

  // RecipeIngredients
  await Promise.all(
    RecipeIngredients.map(async (recipeIngredient) => {
        return prisma.recipeIngredient.create({
          data: recipeIngredient,
        });
    })
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