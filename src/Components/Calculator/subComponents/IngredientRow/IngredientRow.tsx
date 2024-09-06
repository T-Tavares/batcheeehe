import ss from './IngredientRow.module.scss';
import type {Ingredient} from '@/../public/recipes';
import {useRecipe} from '@/Context/RecipeContext/RecipeContext';
import {useState, useRef} from 'react';

const IngredientRow: React.FC<{ingredient: Ingredient}> = ({ingredient}) => {
    const [isRecalculating, setIsRecalculating] = useState(false);
    const {recalculateRecipe} = useRecipe();
    const inputRef = useRef<HTMLInputElement>(null);

    // -------------- CHANGES VALUES TO INPUTS ON CLICK --------------- //

    const isRecalculatingHandler = () => {
        setIsRecalculating(true);
        setTimeout(() => inputRef.current?.focus(), 50); // Focus on Input
    };

    // ------------------ RECALCULATE ON INPUT BLUR ------------------- //

    const recalculateRecipeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputedAmount = +e.target.value;
        recalculateRecipe(ingredient.name, inputedAmount);
        setIsRecalculating(false);
    };

    // ---------------- RECALCULATE ON ENTER KEY DOWN ----------------- //

    const recalculateRecipeKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;
        const inputedAmount = +e.currentTarget.value;
        recalculateRecipe(ingredient.name, inputedAmount);
        setTimeout(() => inputRef.current?.blur(), 50);
        setIsRecalculating(false);
    };

    // ---------------------------------------------------------------- //
    // -------------------------- COMPONENT --------------------------- //
    // ---------------------------------------------------------------- //

    return (
        <div className={ss.ingredientRow}>
            <p>{ingredient.name}</p>
            {!isRecalculating && (
                <p className={ss.quantity} onClick={isRecalculatingHandler}>
                    {ingredient.quantity}
                </p>
            )}
            {isRecalculating && (
                <input
                    ref={inputRef}
                    inputMode="numeric"
                    onBlur={recalculateRecipeHandler}
                    onKeyDown={recalculateRecipeKeyHandler}
                    defaultValue={ingredient.quantity}
                />
            )}
            <p>{ingredient.unity}</p>
        </div>
    );
};

export default IngredientRow;
