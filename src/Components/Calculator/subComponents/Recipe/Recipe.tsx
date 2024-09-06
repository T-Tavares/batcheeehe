import ss from './Recipe.module.scss';
import type {Recipe} from '@/../public/recipes';
import IngredientRow from '../IngredientRow/IngredientRow';
import {getTotalQuantity} from '@/Utilities/Helpers';

const Recipe: React.FC<{recipe: Recipe}> = ({recipe}) => {
    const total = getTotalQuantity(recipe);

    return (
        <div className={ss.recipe}>
            {recipe.ingredients.map(ingredient => (
                <IngredientRow key={`${recipe.name}-${ingredient.name}`} ingredient={ingredient} />
            ))}
            <IngredientRow key={`${recipe.name}-total`} ingredient={{name: 'Total', quantity: total, unity: 'ml'}} />
        </div>
    );
};
export default Recipe;
