import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({meal}) => {
   const {strMeal,strMealThumb,} = meal
   const navigate = useNavigate()
   const handleShowDetails = () => {
        navigate(`/meal/${meal.idMeal}`)
   }
    return (
        <div className='rounded-lg bg-white shadow-lg p-4 flex flex-col'>
            <img className='rounded-lg h-36 w-full object-cover' src={strMealThumb} alt="" />
            <h3 className='text-xl text-gray-700 font-semibold my-4'>{strMeal}</h3>
            <div className='flex-grow flex items-end'>
            <button onClick={handleShowDetails} className="text-lg text-white bg-orange-600 py-2 w-full rounded-lg font-semibold hover:scale-95 duration-150">Show Details</button>
            </div>
        </div>
    );
};

export default CategoryCard;