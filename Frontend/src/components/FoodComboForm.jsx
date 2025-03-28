// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function FoodComboForm() {
//   const navigate=useNavigate();
//   const [addfoodData, setAddFoodData] = useState({
//     comboName: "",
//     ingredients: [],
//     description: "",
//     votes: 0,
//     submittedBy: "",
//   });

//   const [foodcombo, setFoodCombo] = useState([]);

//   const fetchFoodCombos = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/combos");
//       setFoodCombo(response.data);
//     } catch (error) {
//       console.log("Error in fetching data", error);
//     }
//   };

//   useEffect(() => {
//     fetchFoodCombos();
//   }, []); 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/combos", addfoodData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       if (response.status === 201 || response.status === 200) {
//         setAddFoodData({
//           comboName: "",
//           ingredients: [],
//           description: "",
//           votes: 0,
//           submittedBy: "",
//         });
//         fetchFoodCombos();
//         alert("Food Combo is added successfully");
//       }
//     } catch (error) {
//       console.error("Error submitting food combo:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setAddFoodData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   // Handle array input for ingredients
//   const handleIngredientsChange = (e) => {
//     const ingredientArray = e.target.value.split(",");
//     setAddFoodData((prevData) => ({
//       ...prevData,
//       ingredients: ingredientArray,
//     }));
//   };

//   const handlePage=()=>{
//     navigate('/foodcombos')
//   }

//   return (
//     <div className="bg-gray-100 flex flex-col items-center w-full min-h-screen pt-10">
//       <h2 className="text-violet-800 font-bold text-2xl mb-8">
//         Add your Weird Food Combo
//       </h2>
//       <form onSubmit={handleSubmit} className="border-gray-200 border bg-violet-500 shadow-md p-10 w-[400px] rounded-md">
//         <label className="block mb-3">
//           <h2 className="text-gray-900 font-medium">Combo Name</h2>
//           <input
//             type="text"
//             name="comboName"
//             value={addfoodData.comboName}
//             placeholder="Enter your weird Food Combo"
//             onChange={handleChange}
//             required
//             className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
//           />
//         </label>

//         <label className="block mb-3">
//           <h2 className="text-gray-900 font-medium">Ingredients</h2>
//           <textarea
//             name="ingredients"
//             value={addfoodData.ingredients.join(", ")}
//             placeholder="Enter ingredients, separated by commas"
//             onChange={handleIngredientsChange}
//             required
//             className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
//           />
//         </label>

//         <label className="block mb-3">
//           <h2 className="text-gray-900 font-medium">Description</h2>
//           <input
//             type="text"
//             name="description"
//             value={addfoodData.description}
//             placeholder="Enter a description"
//             onChange={handleChange}
//             required
//             className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
//           />
//         </label>

//         <label className="block mb-3">
//           <h2 className="text-gray-900 font-medium">Submitted By</h2>
//           <input
//             type="text"
//             name="submittedBy"
//             value={addfoodData.submittedBy}
//             placeholder="Enter your name"
//             onChange={handleChange}
//             required
//             className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
//           />
//         </label>

//         <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700"
//          onClick={handlePage}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default FoodComboForm;

// // add the update and delete btn in the each food card when i click the update btn for the particular food the page want to redirect to the form apge and with auto filled and when we change theparticular field it want to update the food data in the mongodb (i have given the route.js file) and when i click the delete btn the particular foodcard want to delete in backend and forntned

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function FoodComboForm() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [isUpdate, setIsUpdate] = useState(false);

  const [foodData, setFoodData] = useState({
    comboName: "",
    ingredients: [],
    description: "",
    votes: 0,
    submittedBy: "",
  });

  useEffect(() => {
    if (id) {
      setIsUpdate(true);
      fetchFoodComboDetails();
    }
  }, [id]);

  const fetchFoodComboDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/combos/${id}`);
      setFoodData(response.data);
    } catch (error) {
      console.error("Error fetching food combo details:", error);
    }
  };

  const handleChange = (e) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };

  const handleIngredientsChange = (e) => {
    setFoodData({ ...foodData, ingredients: e.target.value.split(",") });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isUpdate) {
        await axios.put(`http://localhost:3000/combos/${id}`, foodData);
        alert("Food Combo updated successfully!");
      } else {
        await axios.post("http://localhost:3000/combos", foodData);
        alert("Food Combo added successfully!");
      }
      navigate("/foodcombos");
    } catch (error) {
      console.error("Error submitting food combo:", error);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center w-full min-h-screen pt-10">
      <h2 className="text-violet-800 font-bold text-2xl mb-8">
        {isUpdate ? "Update Your Food Combo" : "Add Your Weird Food Combo"}
      </h2>
      <form onSubmit={handleSubmit} className="border-gray-200 border bg-violet-500 shadow-md p-10 w-[400px] rounded-md">
        <label className="block mb-3">
          <h2 className="text-gray-900 font-medium">Combo Name</h2>
          <input type="text" name="comboName" value={foodData.comboName} onChange={handleChange} required className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md" />
        </label>

        <label className="block mb-3">
          <h2 className="text-gray-900 font-medium">Ingredients</h2>
          <textarea name="ingredients" value={foodData.ingredients.join(", ")} onChange={handleIngredientsChange} required className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md" />
        </label>

        <label className="block mb-3">
          <h2 className="text-gray-900 font-medium">Description</h2>
          <input type="text" name="description" value={foodData.description} onChange={handleChange} required className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md" />
        </label>

        <label className="block mb-3">
          <h2 className="text-gray-900 font-medium">Submitted By</h2>
          <input type="text" name="submittedBy" value={foodData.submittedBy} onChange={handleChange} required className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md" />
        </label>

        <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700">
          {isUpdate ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default FoodComboForm;
