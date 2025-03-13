import React from "react";

function FoodComboCard({ comboName, ingredients = [], description, votes, submittedBy }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-9 w-100 h-80">
      <h1 className="text-2xl font-bold text-violet-800">{comboName}</h1>

      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold text-gray-700 underline">Ingredients:</h2>
        <p className="text-violet-800 font-medium">{ingredients.join(", ") || "No ingredients available"}</p>

        <p className="text-gray-700 text-sm mt-4">{description}</p>

        <div className="mt-3 flex justify-center gap-4">
          <span className="text-green-600 font-bold">👍 {votes} Likes</span>
          <span className="text-blue-500 font-medium">{submittedBy}</span>
        </div>
      </div>
    </div>
  );
}

export default FoodComboCard;
