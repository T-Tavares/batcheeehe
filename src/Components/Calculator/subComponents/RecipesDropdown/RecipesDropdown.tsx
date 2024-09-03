'use client';

import ss from './RecipesDropdown.module.scss';
import {useRecipe} from '@/Context/RecipeContext/RecipeContext';

const RecipesDropdown: React.FC = () => {
    const {recipesList, setCurrentRecipeHandler} = useRecipe();
    const recipeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setCurrentRecipeHandler(e.target.value);

    return (
        <div className={ss.recipesDropdown}>
            <label htmlFor="recipes">Current : </label>
            <select onChange={recipeHandler} name="recipes" id="recipes">
                {recipesList.map(recipe => {
                    return (
                        <option key={recipe} value={recipe}>
                            {recipe}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default RecipesDropdown;
