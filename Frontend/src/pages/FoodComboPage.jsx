

// import React, { useEffect, useState } from 'react';
// import FoodComboCard from '../components/FoodComboCard';
// import { useNavigate } from 'react-router-dom';

// function FoodComboPage() {
//   const [foodcombo, setFoodCombo] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleForm = () => {
//     navigate('/foodcomboform');
//   };

//   // Fetch all food combos and users
//   useEffect(() => {
//     fetch('http://localhost:3000/combos')
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setFoodCombo(data);
//       })
//       .catch((err) => {
//         console.error('Error fetching food combos:', err);
//         setError(err.message);
//       });

//     // Fetch users (assuming users data is available from an API endpoint)
//     fetch('http://localhost:3000/users') // Add your users endpoint here
//       .then((res) => res.json())
//       .then((userData) => {
//         setUsers(userData);
//       })
//       .catch((err) => {
//         console.error('Error fetching users:', err);
//       });
//   }, []);

//   const handleUserChange = (e) => {
//     setSelectedUser(e.target.value);
//   };

//   // Filter food combos by the selected user
//   const filteredFoodCombos = selectedUser
//     ? foodcombo.filter((combo) => combo.submittedBy === selectedUser)
//     : foodcombo;

//   if (error) {
//     return <div className="text-center text-red text-2xl mt-10">Error in Fetching Product</div>;
//   }

//   return (
//     <>
//       <div className="bg-violet-100 pt-6">
//         <div className="text-violet-800">
//           <h1 className="flex flex-col text-violet-800 text-3xl font-bold mt-10 items-center">
//             Wired FoodCombos Collection
//           </h1>
//           {/* Dropdown Button to List User Items */}
//           <div className="flex justify-end mb-4 mr-6">
//             <select
//               className="p-2 bg-violet-600 text-white rounded-md"
//               onChange={handleUserChange}
//               value={selectedUser}
//             >
//               <option value="">Select User</option>
//               {users.map((user) => (
//                 <option key={user.id} value={user.username}>
//                   {user.username}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button
//             className="bg-violet-600 flex flex-row justify-items-end p-3 rounded-md text-gray-50 text-1xl mr-4 ml-auto"
//             onClick={handleForm}
//           >
//             Add Food Combo
//           </button>

//           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4">
//             {filteredFoodCombos.map((combo) => (
//               <FoodComboCard key={combo.id} {...combo} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default FoodComboPage;

// import React, { useEffect, useState } from "react";
// import FoodComboCard from "../components/FoodComboCard";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// function FoodComboPage() {
//   const [foodcombo, setFoodCombo] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleForm = () => {
//     navigate("/foodcomboform");
//   };

//   // Fetch all food combos and users
//   useEffect(() => {
//     fetch("http://localhost:3000/combos")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setFoodCombo(data);
//       })
//       .catch((err) => {
//         console.error("Error fetching food combos:", err);
//         setError(err.message);
//       });

//     // Fetch users
//     fetch("http://localhost:3000/users")
//       .then((res) => res.json())
//       .then((userData) => {
//         setUsers(userData);
//       })
//       .catch((err) => {
//         console.error("Error fetching users:", err);
//       });
//   }, []);

//   const handleUserChange = (e) => {
//     setSelectedUser(e.target.value);
//   };

//   // Filter food combos by selected user
//   const filteredFoodCombos = selectedUser
//     ? foodcombo.filter((combo) => combo.submittedBy === selectedUser)
//     : foodcombo;

//   if (error) {
//     return (
//       <div className="text-center text-red-600 text-2xl mt-10">
//         Error in Fetching Product
//       </div>
//     );
//   }

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center relative p-6"
//       style={{ backgroundImage: `url('/images/food-bg.jpg')` }}
//     >
//       {/* Dark overlay for better contrast */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Main content */}
//       <div className="relative text-white">
//         <h1 className="text-4xl font-extrabold text-center drop-shadow-lg">
//           🍕 Wired FoodCombos Collection 🍔
//         </h1>

//         {/* User Dropdown */}
//         <div className="flex justify-end mt-6 mr-8">
//           <select
//             className="p-3 bg-yellow-500 text-white rounded-lg shadow-lg cursor-pointer"
//             onChange={handleUserChange}
//             value={selectedUser}
//           >
//             <option value="">Select User</option>
//             {users.map((user) => (
//               <option key={user.id} value={user.username}>
//                 {user.username}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Add Food Combo Button with Animation */}
//         <motion.button
//           className="bg-yellow-500 text-black font-bold p-4 rounded-full shadow-lg fixed bottom-10 right-10"
//           onClick={handleForm}
//           whileHover={{ scale: 1.2 }}
//           whileTap={{ scale: 0.9 }}
//           animate={{
//             y: [0, -5, 0],
//             transition: { repeat: Infinity, duration: 1.5 },
//           }}
//         >
//           ➕ Add Food Combo
//         </motion.button>

//         {/* Food Combo Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
//           {filteredFoodCombos.map((combo) => (
//             <motion.div
//               key={combo.id}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <FoodComboCard {...combo} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FoodComboPage;


// import React, { useEffect, useState } from "react";
// import FoodComboCard from "../components/FoodComboCard";
// import { useNavigate } from "react-router-dom";
// import { FaPlus } from "react-icons/fa";

// function FoodComboPage() {
//   const [foodcombo, setFoodCombo] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleForm = () => {
//     navigate("/foodcomboform");
//   };

//   // Fetch all food combos and users
//   useEffect(() => {
//     fetch("http://localhost:3000/combos")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setFoodCombo(data);
//       })
//       .catch((err) => {
//         console.error("Error fetching food combos:", err);
//         setError(err.message);
//       });

//     // Fetch users
//     fetch("http://localhost:3000/users")
//       .then((res) => res.json())
//       .then((userData) => {
//         setUsers(userData);
//       })
//       .catch((err) => {
//         console.error("Error fetching users:", err);
//       });
//   }, []);

//   const handleUserChange = (e) => {
//     setSelectedUser(e.target.value);
//   };

//   // Filter food combos by selected user
//   const filteredFoodCombos = selectedUser
//     ? foodcombo.filter((combo) => combo.submittedBy === selectedUser)
//     : foodcombo;

//   if (error) {
//     return (
//       <div className="text-center text-red-600 text-2xl mt-10">
//         Error in Fetching Product
//       </div>
//     );
//   }

//   return (
//     <div
//       className="min-h-screen relative bg-cover bg-center bg-no-repeat p-6"
//       style={{ backgroundImage: "url('/images/wierd_page_bg.jpg')" }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-0"></div>

//       {/* Content */}
//       <div className="relative text-white text-center">
//         <h1 className="text-4xl font-bold text-white drop-shadow-lg">
//           🍕 Wired FoodCombos Collection 🍔
//         </h1>

//         {/* User Dropdown */}
//         <div className="flex justify-end mt-4">
//           <select
//             className="p-2 bg-violet-600 text-white rounded-md shadow-md focus:ring-2 focus:ring-violet-400"
//             onChange={handleUserChange}
//             value={selectedUser}
//           >
//             <option value="">Select User</option>
//             {users.map((user) => (
//               <option key={user.id} value={user.username}>
//                 {user.username}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Add Food Combo Button */}
//         <button
//           className="bg-violet-700 text-white font-bold py-3 px-6 mt-4 rounded-full transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
//           onClick={handleForm}
//         >
//           <span className="flex items-center gap-2">
//             <FaPlus className="text-white text-lg" /> Add Food Combo
//           </span>
//         </button>

//         {/* Food Combo Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-6 ">
//           {filteredFoodCombos.map((combo) => (
//             <div
//               key={combo.id}
//               className="bg-white p-5 rounded-xl border-4 border-transparent transition-all duration-300"
//             >
//               <FoodComboCard {...combo} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FoodComboPage;


import React, { useEffect, useState } from "react";
import FoodComboCard from "../components/FoodComboCard";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function FoodComboPage() {
  const [foodcombo, setFoodCombo] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleForm = () => {
    navigate("/foodcomboform");
  };

  // Fetch all users on mount
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((userData) => setUsers(userData))
      .catch((err) => {
        console.error("Error fetching users:", err);
      });

    // Also load all food combos initially
    fetch("http://localhost:3000/combos")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setFoodCombo(data))
      .catch((err) => {
        console.error("Error fetching food combos:", err);
        setError(err.message);
      });
  }, []);

  // Fetch combos for selected user
  const handleUserChange = async (e) => {
    const userId = e.target.value;
    setSelectedUser(userId);

    if (userId === "") {
      // Load all combos again
      fetch("http://localhost:3000/combos")
        .then((res) => res.json())
        .then((data) => setFoodCombo(data));
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/foodCombos/${userId}`);
      const data = await res.json();
      setFoodCombo(data);
    } catch (err) {
      console.error("Error fetching filtered combos:", err);
    }
  };

  if (error) {
    return (
      <div className="text-center text-red-600 text-2xl mt-10">
        Error in Fetching Product
      </div>
    );
  }

  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-no-repeat p-6"
      style={{ backgroundImage: "url('/images/wierd_page_bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>

      <div className="relative text-white text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          🍕 Wired FoodCombos Collection 🍔
        </h1>

        {/* User Dropdown */}
        <div className="flex justify-end mt-4">
          <select
            className="p-2 bg-violet-600 text-white rounded-md shadow-md focus:ring-2 focus:ring-violet-400"
            onChange={handleUserChange}
            value={selectedUser}
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.username}
              </option>
            ))}
          </select>
        </div>

        {/* Add Button */}
        <button
          className="bg-violet-700 text-white font-bold py-3 px-6 mt-4 rounded-full transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
          onClick={handleForm}
        >
          <span className="flex items-center gap-2">
            <FaPlus className="text-white text-lg" /> Add Food Combo
          </span>
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-6 ">
          {foodcombo.map((combo) => (
            <div
              key={combo._id}
              className="bg-white p-5 rounded-xl border-4 border-transparent transition-all duration-300"
            >
              <FoodComboCard {...combo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodComboPage;
