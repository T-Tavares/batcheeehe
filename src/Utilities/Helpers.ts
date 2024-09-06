import type {Recipe} from '../../public/recipes';

// ---------------------------------------------------------------- //
// --------------------------- HELPERS ---------------------------- //
// ---------------------------------------------------------------- //

// ----------------------- RECIPES HELPERS ------------------------ //

// ---------------- GET 5000ML DEFAULT BATCH VALUE ---------------- //
export const get5000mlRecipe = (recipe: Recipe) => {
    const totalQuantity = getTotalQuantity(recipe);
    // factor - (factor % 5) will round the factor to the nearest multiple of 5
    const factor = 5000 / totalQuantity - ((5000 / totalQuantity) % 5);

    const recalculatedIngredients = recipe.ingredients.map(ingredient => {
        return {
            ...ingredient,
            quantity: Math.trunc(ingredient.quantity * factor),
        };
    });

    return {...recipe, ingredients: recalculatedIngredients};
};

// ------------------ GET TOTAL AMOUNT OF RECIPE ------------------ //

export const getTotalQuantity = (recipe: Recipe) => {
    return recipe.ingredients.reduce((acc, curr) => {
        if (curr.unity === 'g' && curr.name !== 'Caster Sugar') return acc;
        return acc + curr.quantity;
    }, 0);
};

// -------------- GET INGREDIENT QUANTITY OF RECIPE --------------- //

export const getRecipeIngredientQuantity = (recipe: Recipe, ingredient: string) => {
    return recipe.ingredients.find(ingd => ingd.name === ingredient)!.quantity;
};
