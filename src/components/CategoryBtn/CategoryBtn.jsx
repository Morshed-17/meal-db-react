import { useNavigate } from "react-router-dom";

const CategoryBtn = ({category}) => {
    const {strCategory} = category
    const navigate = useNavigate()
    
    const handleShowCategory = () => {
        navigate(`/categories/${strCategory}`)
    }

    return (
        <div>
            <button onClick={handleShowCategory} className="text-lg text-white bg-orange-700 py-2 px-3 rounded-lg font-bold hover:scale-95 duration-150">{strCategory}</button>
        </div>
    );
};

export default CategoryBtn;