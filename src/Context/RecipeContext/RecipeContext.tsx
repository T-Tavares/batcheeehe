'use client';

import {createContext, useContext, useState} from 'react';
import {recipes} from '@/../public/recipes';
import type {Recipe, RecipesDatabase} from '@/../public/recipes';
import {get5000mlRecipe, getTotalQuantity, getRecipeIngredientQuantity} from '@/Utilities/Helpers';

// ----------------- RECIPE CONTEXT PLACEHOLDERS ------------------ //

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

// -------------------- RECIPE CONTEXT EXPORT --------------------- //

export const useRecipe = () => useContext(RecipeContext);

// ------------------- RECIPE CONTEXT PROVIDER -------------------- //

export const RecipeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    // .                                                              . //
    // --------------------- RECIPES CONTEXT INIT --------------------- //

    const allRecipes = recipes; //                                                   GET ALL RECIPES
    const recipeInit = get5000mlRecipe(allRecipes[0]); //                            GET FIRST RECIPE
    const [currentRecipe, setCurrentRecipe] = useState(recipeInit as Recipe); //     STATE FOR CURRENT RECIPE
    const recipesList = allRecipes.map(r => r.name); //                              GETS LIST OF RECIPES NAMES

    // ------------------ SET CURRENT RECIPE HANDLER ------------------ //

    const setCurrentRecipeHandler = (recipe: string) => {
        const selectedRecipe = allRecipes.filter((r: Recipe) => r.name === recipe);
        setCurrentRecipe(get5000mlRecipe(selectedRecipe[0]));
    };

    // ---------------------- RECALCULATE RECIPE ---------------------- //

    const recalculateRecipe = (ingredient: string, inputedAmount: number) => {
        let factor: number;
        const originalRecipe = allRecipes.find(r => r.name === currentRecipe.name)!;

        // ----------------- GET FACTOR FOR RECALCULATION ----------------- //

        if (ingredient === 'Total') {
            const totalQuantity = getTotalQuantity(originalRecipe);
            factor = inputedAmount / totalQuantity;
        } else {
            const recipeIngredientQuantity = getRecipeIngredientQuantity(originalRecipe, ingredient);
            factor = inputedAmount / recipeIngredientQuantity;
        }

        /*  
            --------------- ROUND FACTOR TO A MULTIPLE OF 5 ---------------- 
        
            This will assure that the recalculated recipe will have all values multiple of 5.
            That will make it easier to batch with the bar equipment.
        */
        factor = factor - (factor % 2);

        // ------------------- RECALCULATE INGREDIENTS -------------------- //

        const recalculatedIngredients = originalRecipe.ingredients.map(ingredient => {
            return {
                ...ingredient,
                quantity: ingredient.quantity * factor,
            };
        });

        // -------- SET CURRENT RECIPE TO NEW RECALCULATED RECIPE --------- //

        setCurrentRecipe(prev => ({...prev, ingredients: recalculatedIngredients}));
    };

    return (
        <RecipeContext.Provider value={{currentRecipe, allRecipes, setCurrentRecipeHandler, recipesList, recalculateRecipe}}>
            {children}
        </RecipeContext.Provider>
    );
};
