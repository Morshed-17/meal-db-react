import { useLoaderData } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryCards = () => {
    const {meals} = useLoaderData()
    
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-11">
            {
                meals.map(meal => <CategoryCard key={meal.idMeal} meal={meal}/>)
            }
        </div>
    );
};

export default CategoryCards;