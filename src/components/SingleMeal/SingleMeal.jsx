import { useLoaderData } from "react-router-dom";

const SingleMeal = () => {
  const { meals } = useLoaderData();
  const meal = meals[0];
  const { strMeal, strMealThumb, strInstructions } = meal;
  function splitIngredients(mealObject) {
    const ingredientPairs = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = mealObject[`strIngredient${i}`];
      const ingredientValue = mealObject[`strMeasure${i}`];

      // Check if both key and value exist and are not empty
      if (ingredientKey && ingredientValue) {
        ingredientPairs.push(`${ingredientKey} : ${ingredientValue}`);
      }
    }

    return ingredientPairs;
  }

  // Example meal object
  const mealObject = meal

  const ingredientPairs = splitIngredients(mealObject);

  // Output the 'key: value' pairs
  console.log(ingredientPairs);
  return (
    <div className="flex gap-7 items-start my-8">
      <img src={strMealThumb} className="w-1/3 rounded-lg" alt="" />
      <div>
        <h2 className="text-4xl text-gray-700 font-bold mb-4">
          {meal.strMeal}
        </h2>
        <p className="text-lg text-gray-600">{strInstructions}</p>
        <h4 className="text-3xl font-semibold text-gray-700 my-4">
          Ingredients
        </h4>
        <ol className="list-decimal list-inside text-lg">
            {
                ingredientPairs.map(ingredient => <li>{ingredient}</li>)
            }
        </ol>
      </div>
    </div>
  );
};

export default SingleMeal;
