'use client';

import {createContext, use, useContext, useState} from 'react';
import {recipes} from '@/../public/recipes';
import type {Recipe, RecipesDatabase} from '@/../public/recipes';
import {log} from 'console';

const RecipeContext = createContext({
    currentRecipe: {} as Recipe,
    allRecipes: [] as RecipesDatabase,
    recipesList: [] as string[],
    setCurrentRecipeHandler: (_recipe: string) => {
        /* placeholder */
    },
    recalculateRecipe: (_ingredient: string, _amount: number) => {
        /* placeholder*/
    },
});

export const useRecipe = () => useContext(RecipeContext);

export const RecipeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const allRecipes = recipes; // GET ALL RECIPES
    const recipeInit = allRecipes[0]; // GET FIRST RECIPE
    const [currentRecipe, setCurrentRecipe] = useState(recipeInit as Recipe); // STATE FOR CURRENT RECIPE
    const recipesList = allRecipes.map(r => r.name); // GETS LIST OF RECIPES NAMES

    // ---------- SET CURRENT RECIPE HANDLER ---------- //

    const setCurrentRecipeHandler = (recipe: string) => {
        const selectedRecipe = allRecipes.filter((r: Recipe) => r.name === recipe);
        setCurrentRecipe(selectedRecipe[0]);
    };

    // -------------- RECALCULATE RECIPE -------------- //
    const recalculateRecipe = (ingredient: string, inputedAmount: number) => {
        let factor: number;

        // GET FACTOR FOR RECALCULATION

        if (ingredient === 'Total') {
            const totalQuantity = currentRecipe.ingredients.reduce((acc, curr) => acc + curr.quantity, 0);
            factor = +(inputedAmount / totalQuantity).toFixed(2);
        } else {
            const recipeIngredientQuantity = currentRecipe.ingredients.find(ingd => ingd.name === ingredient)!.quantity;
            factor = +(inputedAmount / recipeIngredientQuantity).toFixed(2);
        }

        // RECALCULATE INGREDIENTS
        const recalculatedIngredients = currentRecipe.ingredients.map(ingredient => {
            return {
                ...ingredient,
                quantity: Math.round(ingredient.quantity * factor),
            };
        });

        // SET CURRENT RECIPE TO NEW RECALCULATED RECIPE

        setCurrentRecipe({...currentRecipe, ingredients: recalculatedIngredients});
    };

    return (
        <RecipeContext.Provider value={{currentRecipe, allRecipes, setCurrentRecipeHandler, recipesList, recalculateRecipe}}>
            {children}
        </RecipeContext.Provider>
    );
};
