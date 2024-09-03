import ss from './Recipe.module.scss';
import type {Recipe} from '@/../public/recipes';
import IngredientRow from '../IngredientRow/IngredientRow';

const Recipe: React.FC<{recipe: Recipe}> = ({recipe}) => {
    // GETS TOTAL QUANTITY OF RECIPY
    const total = recipe.ingredients.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    return (
        <div className={ss.recipe}>
            {recipe.ingredients.map(ingredient => (
                <IngredientRow key={ingredient.name} ingredient={ingredient} />
            ))}
            <IngredientRow ingredient={{name: 'Total', quantity: total, unity: 'ml'}} />
        </div>
    );
};
export default Recipe;
