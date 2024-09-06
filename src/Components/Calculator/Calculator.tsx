'use client';

import ss from './Calculator.module.scss';
import RecipesDropdown from './subComponents/RecipesDropdown/RecipesDropdown';
import Recipe from './subComponents/Recipe/Recipe';
import {useRecipe} from '@/Context/RecipeContext/RecipeContext';

const Calculator: React.FC = () => {
    const {currentRecipe} = useRecipe();
    return (
        <div className={ss.calculator}>
            <RecipesDropdown />
            <Recipe recipe={currentRecipe} />
        </div>
    );
};

export default Calculator;
