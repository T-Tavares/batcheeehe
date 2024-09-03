import ss from './IngredientRow.module.scss';
import type {Ingredient} from '@/../public/recipes';
import {useRecipe} from '@/Context/RecipeContext/RecipeContext';
import {useState} from 'react';

const IngredientRow: React.FC<{ingredient: Ingredient}> = ({ingredient}) => {
    const [isRecalculating, setIsRecalculating] = useState(false);
    const {recalculateRecipe} = useRecipe();

    const recalculateRecipeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputedAmount = +e.target.value;
        recalculateRecipe(ingredient.name, inputedAmount);
        setIsRecalculating(false);
    };

    return (
        <div className={ss.ingredientRow}>
            <p>{ingredient.name}</p>
            {!isRecalculating && <p onClick={() => setIsRecalculating(true)}>{ingredient.quantity}</p>}
            {isRecalculating && <input onBlur={recalculateRecipeHandler} defaultValue={ingredient.quantity} />}
            <p>{ingredient.unity}</p>
        </div>
    );
};

export default IngredientRow;
