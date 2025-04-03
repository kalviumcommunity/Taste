

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// function FoodComboForm() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [isUpdate, setIsUpdate] = useState(false);
//   const [foodData, setFoodData] = useState({
//     comboName: "",
//     ingredients: "",
//     description: "",
//     submittedBy: "",
//   });

//   useEffect(() => {
//     const fetchFoodComboDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/combos/${id}`);
//         setFoodData({
//           ...response.data,
//           ingredients: response.data.ingredients.join(", "),
//         });
//       } catch (error) {
//         console.error("Error fetching food combo details:", error);
//       }
//     };

//     if (id) {
//       setIsUpdate(true);
//       fetchFoodComboDetails();
//     }
//   }, [id]);

//   const handleChange = (e) => {
//     setFoodData({ ...foodData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formattedIngredients = foodData.ingredients
//       .split(/,\s*/)
//       .map((i) => i.trim())
//       .filter((i) => i);

//     if (formattedIngredients.length < 2) {
//       alert("Please enter at least two ingredients.");
//       return;
//     }

//     try {
//       if (isUpdate) {
//         await axios.put(`http://localhost:3000/combos/${id}`, {
//           ...foodData,
//           ingredients: formattedIngredients,
//         });
//         alert("Food Combo updated successfully!");
//       } else {
//         await axios.post("http://localhost:3000/combos", {
//           ...foodData,
//           ingredients: formattedIngredients,
//         });
//         alert("Food Combo added successfully!");
//       }

//       setTimeout(() => navigate("/foodcombos"), 500);
//     } catch (error) {
//       console.error("Error submitting food combo:", error);
//       alert("Failed to submit food combo. Please check your input and try again.");
//     }
//   };

//   return (
//       <div
//       className="flex flex-col items-center w-full min-h-screen pt-10 bg-cover bg-center"
//       style={{ backgroundImage: "url('/public/images/.jpg')" }}
//     >
//     <div className="bg-gray-100 flex flex-col items-center w-full min-h-screen pt-10">
//       <h2 className="text-violet-800 font-bold text-2xl mb-8">
//         {isUpdate ? "Update Your Food Combo" : "Add Your Weird Food Combo"}
//       </h2>
//       <form
//         onSubmit={handleSubmit}
//         className="border-gray-200 border bg-violet-500 shadow-md p-10 w-[400px] rounded-md"
//       >
//         <label className="block mb-3">
//           <h2 className="text-gray-900 font-medium">Combo Name</h2>
//           <input
//             type="text"
//             name="comboName"
//             value={foodData.comboName}
//             onChange={handleChange}
//             required
//             className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
//           />
//         </label>

//         <label className="block mb-3">
//           <h2 className="text-gray-900 font-medium">Ingredients (at least 2)</h2>
//           <textarea
//             name="ingredients"
//             value={foodData.ingredients}
//             onChange={handleChange}
//             required
//             className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
//             placeholder="Enter ingredients separated by commas"
//           />
//         </label>

//         <label className="block mb-3">
//           <h2 className="text-gray-900 font-medium">Description</h2>
//           <input
//             type="text"
//             name="description"
//             value={foodData.description}
//             onChange={handleChange}
//             required
//             className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
//           />
//         </label>

//         <div className="flex justify-between">
//           <button
//             type="submit"
//             className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700"
//           >
//             {isUpdate ? "Update" : "Submit"}
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
//   );
// }

// export default FoodComboForm;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function FoodComboForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isUpdate, setIsUpdate] = useState(false);
  const [foodData, setFoodData] = useState({
    comboName: "",
    ingredients: "",
    description: "",
    submittedBy: "",
  });

  useEffect(() => {
    const fetchFoodComboDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/combos/${id}`);
        setFoodData({
          ...response.data,
          ingredients: response.data.ingredients.join(", "),
        });
      } catch (error) {
        console.error("Error fetching food combo details:", error);
      }
    };

    if (id) {
      setIsUpdate(true);
      fetchFoodComboDetails();
    }
  }, [id]);

  const handleChange = (e) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedIngredients = foodData.ingredients
      .split(/,\s*/)
      .map((i) => i.trim())
      .filter((i) => i);

    if (formattedIngredients.length < 2) {
      alert("Please enter at least two ingredients.");
      return;
    }

    try {
      if (isUpdate) {
        await axios.put(`http://localhost:3000/combos/${id}`, {
          ...foodData,
          ingredients: formattedIngredients,
        });
        alert("Food Combo updated successfully!");
      } else {
        await axios.post("http://localhost:3000/combos", {
          ...foodData,
          ingredients: formattedIngredients,
        });
        alert("Food Combo added successfully!");
      }

      setTimeout(() => navigate("/foodcombos"), 500);
    } catch (error) {
      console.error("Error submitting food combo:", error);
      alert("Failed to submit food combo. Please check your input and try again.");
    }
  };

  return (
    <div
      className="flex flex-col items-center w-full min-h-screen pt-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/public/images/update.jpg')" }}
    >
      <h2 className="text-violet-800 font-bold text-2xl mb-8">
        {isUpdate ? "Update Your Food Combo" : "Add Your Weird Food Combo"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="border-gray-200 border bg-white bg-opacity-90 shadow-md p-10 w-[400px] rounded-md"
      >
        <label className="block mb-3">
          <h2 className="text-gray-900 font-medium">Combo Name</h2>
          <input
            type="text"
            name="comboName"
            value={foodData.comboName}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
          />
        </label>

        <label className="block mb-3">
          <h2 className="text-gray-900 font-medium">Ingredients (at least 2)</h2>
          <textarea
            name="ingredients"
            value={foodData.ingredients}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
            placeholder="Enter ingredients separated by commas"
          />
        </label>

        <label className="block mb-3">
          <h2 className="text-gray-900 font-medium">Description</h2>
          <input
            type="text"
            name="description"
            value={foodData.description}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
          />
        </label>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700"
          >
            {isUpdate ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FoodComboForm;