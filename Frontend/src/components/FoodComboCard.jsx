import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FoodComboCard({ _id, comboName, ingredients = [], description, votes, fetchFoodCombos }) {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/foodcomboform/${_id}`);
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this combo?")) 
      {
      try {
        const response = await axios.delete(
            `http://localhost:3000/combos/${_id}`
        );
        if (response.status === 200) {
            alert("Product deleted successfully!");
            window.location.reload();
        }
    } catch (err) {
        console.error("Error deleting product:", err);
        alert("Failed to delete product.");
    }
   
  };
}

  return (
    <div className="bg-white rounded-lg shadow-md p-9 w-100 h-80">
      <h1 className="text-2xl font-bold text-violet-800">{comboName}</h1>

      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold text-gray-700 underline">Ingredients:</h2>
        <p className="text-violet-800 font-medium">{ingredients.join(", ") || "No ingredients available"}</p>

        <p className="text-gray-700 text-sm mt-4">{description}</p>

        <div className="mt-3 flex justify-center gap-4">
          <span className="text-green-600 font-bold">👍 {votes} Likes</span>
        </div>

        <div className="mt-4 flex justify-center gap-4">
          <button onClick={handleUpdate} className="bg-yellow-500 text-white px-4 py-2 rounded-md">Update</button>
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default FoodComboCard;
