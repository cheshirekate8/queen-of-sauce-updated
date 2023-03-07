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
- Day 5: Simple CSS to get the ball rolling, breaking and unbreaking github Oauth

To Do
  Redo GithubOauth and add Gmail Oauth!
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