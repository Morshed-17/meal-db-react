import { useLoaderData } from "react-router-dom";
import CategoryBtn from "../CategoryBtn/CategoryBtn";
import { useEffect, useState } from "react";

const CategoriesBtn = () => {
    const {categories} = useLoaderData()    
    

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-6 my-8">
                {
                    categories.map(category => <CategoryBtn key={category.idCategory} category={category}/>)
                }
            </div>
        </div>
    );
};

export default CategoriesBtn;