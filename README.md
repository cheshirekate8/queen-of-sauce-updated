# Fullstack Authentication Example with Next.js and NextAuth.js

This is the starter project for the fullstack tutorial with Next.js and Prisma. You can find the final version of this project in the [`final`](https://github.com/prisma/blogr-nextjs-prisma/tree/final) branch of this repo.

# Work Breakdown
- Day 1: Project setup following Vercel documentation
- Day 2-3: Update Database and Seeder files for Prisma
- Day 4: Add CRUD functionality
  Fridges Routes
    Create, Read, Edit, Delete
  FridgeIngredients Routes
    Create, Edit, Delete
    NO READ => will read on the fridges
  Ingredients Routes
    Read Ingredients, Read Ingredient
    NO CREATE, UPATE, DELETE => User cannot alter game ingredients
  Recipes Routes
    Read Recipes, Read Recipe 
    NO CREATE, UPATE, DELETE => User cannot alter game recipes
  RecipeIngredients Routes
    NONE => RecipeIngredients are unique in that they are game logic that cannot be edited by user AND are read on Recipes
  Remove all post functionality from starter (schema, crud, pages)
- Day 5: Simple CSS to get the ball rolling
    
    
To Do
  Prisma Validation
  Protected Routes
    Ingredient
    Recipe
    ???
  Cute 404
  Google OAuth
  Recipes Page
  Ingredients Page
  Fridges Page
  Tooltip on how to delete account
    Make unique to oauth token, google or github?