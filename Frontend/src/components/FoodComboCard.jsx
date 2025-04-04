// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // function FoodComboCard({ _id, comboName, ingredients = [], description, votes, fetchFoodCombos }) {
// //   const navigate = useNavigate();

// //   const handleUpdate = () => {
// //     navigate(`/foodcomboform/${_id}`);
// //   };

// //   const handleDelete = async () => {
// //     if (window.confirm("Are you sure you want to delete this combo?")) 
// //       {
// //       try {
// //         const response = await axios.delete(
// //             `http://localhost:3000/combos/${_id}`
// //         );
// //         if (response.status === 200) {
// //             alert("Product deleted successfully!");
// //             window.location.reload();
// //         }
// //     } catch (err) {
// //         console.error("Error deleting product:", err);
// //         alert("Failed to delete product.");
// //     }
   
// //   };
// // }

// //   return (
// //     <div className="bg-white rounded-lg shadow-md p-9 w-100 h-80">
// //       <h1 className="text-2xl font-bold text-violet-800">{comboName}</h1>

// //       <div className="mt-4 text-center">
// //         <h2 className="text-lg font-semibold text-gray-700 underline">Ingredients:</h2>
// //         <p className="text-violet-800 font-medium">{ingredients.join(", ") || "No ingredients available"}</p>

// //         <p className="text-gray-700 text-sm mt-4">{description}</p>

// //         <div className="mt-3 flex justify-center gap-4">
// //           <span className="text-green-600 font-bold">👍 {votes} Likes</span>
// //         </div>

// //         <div className="mt-4 flex justify-center gap-4">
// //           <button onClick={handleUpdate} className="bg-yellow-500 text-white px-4 py-2 rounded-md">Update</button>
// //           <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FoodComboCard;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function FoodComboCard({ _id, comboName, ingredients = [], description, votes, fetchFoodCombos }) {
//   const navigate = useNavigate();
//   const [localVotes, setLocalVotes] = useState(votes);

//   // Function to update votes
//   const handleVote = async () => {
//     try {
//       const response = await axios.put(`http://localhost:3000/combos/${_id}`, {
//         votes: localVotes + 1,
//       });

//       if (response.status === 200) {
//         setLocalVotes(localVotes + 1);
//       }
//     } catch (err) {
//       console.error("Error updating votes:", err);
//       alert("Failed to update votes.");
//     }
//   };

//   // Navigate to update form
//   const handleUpdate = () => {
//     navigate(`/foodcomboform/${_id}`);
//   };

//   // Delete a food combo
//   const handleDelete = async () => {
//     if (window.confirm("Are you sure you want to delete this combo?")) {
//       try {
//         const response = await axios.delete(`http://localhost:3000/combos/${_id}`);
//         if (response.status === 200) {
//           alert("Product deleted successfully!");
//           window.location.reload();
//         }
//       } catch (err) {
//         console.error("Error deleting product:", err);
//         alert("Failed to delete product.");
//       }
//     }
//   };

//   return (
//     <div
//       className="bg-white text-violet-800 rounded-lg shadow-md p-9 w-100 h-80 transition-all duration-300 transform hover:scale-105 style={{ backgroundImage: `url('/public/images/egg_img.jpg')` }} hover:text-white"
//     >
//       <h1 className="text-2xl font-bold">{comboName}</h1>

//       <div className="mt-4 text-center">
//         <h2 className="text-lg font-semibold underline">Ingredients:</h2>
//         <p className="font-medium">{ingredients.join(", ") || "No ingredients available"}</p>

//         <p className="mt-4">{description}</p>

//         <div className="mt-3 flex justify-center gap-4">
//           <button onClick={handleVote} className="flex items-center text-green-600 font-bold hover:text-green-300">
//             👍 {localVotes} Likes
//           </button>
//         </div>

//         <div className="mt-4 flex justify-center gap-4">
//           <button onClick={handleUpdate} className="bg-yellow-400 text-violet-700 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white">
//             Update
//           </button>
//           <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FoodComboCard;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FoodComboCard({ _id, comboName, ingredients = [], description, votes, fetchFoodCombos }) {
  const navigate = useNavigate();
  const [localVotes, setLocalVotes] = useState(votes);

  const handleVote = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/combos/${_id}`, {
        votes: localVotes + 1,
      });

      if (response.status === 200) {
        setLocalVotes(localVotes + 1);
      }
    } catch (err) {
      console.error("Error updating votes:", err);
      alert("Failed to update votes.");
    }
  };

  // Navigate to update form
  const handleUpdate = () => {
    navigate(`/foodcomboform/${_id}`);
  };

  // Delete a food combo
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this combo?")) {
      try {
        const response = await axios.delete(`http://localhost:3000/combos/${_id}`);
        if (response.status === 200) {
          alert("Product deleted successfully!");
          window.location.reload();
        }
      } catch (err) {
        console.error("Error deleting product:", err);
        alert("Failed to delete product.");
      }
    }
  };

  return (
    <div className="group relative bg-white text-violet-800 rounded-lg shadow-md p-9 w-100 h-80 transition-all duration-300 transform hover:scale-105 hover:text-black overflow-hidden">
      
      {/* Background Image (Initially Hidden, Appears on Hover) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundImage: `url('/public/images/egg_img.jpg')` }}
      ></div>

      {/* Content (Ensures Text Remains Readable) */}
      <div className="relative z-10">
        <h1 className="text-2xl font-bold">{comboName}</h1>

        <div className="mt-4 text-center">
          <h2 className="text-lg font-semibold underline">Ingredients:</h2>
          <p className="font-medium">{ingredients.join(", ") || "No ingredients available"}</p>

          <p className="mt-4">{description}</p>

          <div className="mt-3 flex justify-center gap-4">
            <button onClick={handleVote} className="flex items-center text-green-600 font-bold hover:text-green-300">
              👍 {localVotes} Likes
            </button>
          </div>





          <div className="mt-4 flex justify-center gap-4">
            <button onClick={handleUpdate} className="bg-yellow-400 text-violet-700 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white">
              Update
            </button>
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodComboCard;
