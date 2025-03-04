import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
const FoodComboCard = () => {
  const {state}=useLocation();
  const {combo}=state || {};

  if(!combo)
  {
    return <h1 className="text-center text-red-500 mt-10"></h1>
  }
  return (
    
      <div className="min-h-screen bg-violet-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-extrabold text-violet-800">{combo.name}</h1>
        
        <img
          src={`/images/${combo.image}.jpg`}
          alt={combo.name}
          className="w-96 h-96 object-cover rounded-lg shadow-xl mt-6"
        />
  
        <div className="mt-6 text-center max-w-lg">
          <h2 className="text-2xl font-semibold text-gray-700 underline">Ingredients:</h2>
          <p className="text-violet-800 font-semibold text-2xl mt-2">{combo.ingredients.join(", ")}</p>
  
          <p className="text-gray-700  text-1xl mt-6">{combo.description}</p>
  
          <div className="mt-3 flex justify-center gap-10">
            <span className="text-green-600 font-bold">👍 {combo.votes} Likes</span>
            <span className="text-blue-500 font-medium "> {combo.submittedBy}</span>
          </div>
        </div>
      </div>
    );
  };


export default FoodComboCard
