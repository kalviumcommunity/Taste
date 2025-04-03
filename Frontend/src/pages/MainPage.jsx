


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const MainPage = () => {
//   const navigate = useNavigate();

//   const foodCombos = [
//     {
//       name: "Fries + Ice Cream",
//       image: "fries_icecream",
//       description: "A surprising mix of salty and sweet that melts in your mouth!",
//       votes: 120,
//       submittedBy: "Sibishree",
//     },
//     {
//       name: "Pickle + Peanut Butter",
//       image: "pickel_peanutbutter",
//       description: "A tangy and nutty delight!",
//       votes: 85,
//       submittedBy: "Sibishree",
//     },
//     {
//       name: "Chocolate + Bacon",
//       image: "Chocolate_Bacon",
//       description: "A perfect balance of sweet and savory!",
//       votes: 150,
//       submittedBy: "Sibishree",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-200 to-blue-300 flex flex-col items-center">
      
//       {/* Header Section with Background Image */}
//       <div
//         className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: `url('/public/images/bg.jpg')` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-20"></div> {/* Reduced opacity */}
//         <motion.header
//           className="relative text-center px-4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-6xl font-extrabold text-white drop-shadow-md">
//             Taste<span className="text-yellow-400">Twist</span>
//           </h1>
//           <p className="text-xl text-gray-200 mt-4 font-medium">
//             Discover & Share Unexpected Food Pairings 🍕🍦
//           </p>
//           <motion.button
//             className="mt-6 px-8 py-4 bg-yellow-500 text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 transition-all transform hover:scale-105"
//             onClick={() => navigate("/login")}
//             whileHover={{ scale: 1.1 }}
//           >
//             Share Your Combo
//           </motion.button>
//         </motion.header>
//       </div>

//       {/* Overview Section */}
//       <section className="my-16 backdrop-blur-md bg-white/50 shadow-lg p-10 rounded-xl max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-purple-900">About TasteTwist</h2>
//         <p className="text-lg text-gray-800 mt-4">
//           Ever tried dipping fries in ice cream? What about pairing peanut butter with pickles? 
//           TasteTwist is where food lovers experiment with crazy combos and discover unexpectedly delicious results! 
//           Vote for your favorites or create your own unique twist!
//         </p>
//       </section>

//       {/* Combos Section */}
//       <section className="py-16">
//         <h2 className="text-4xl font-bold text-center text-gray-800">Popular Unlikely Combos 🍔🍫</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mt-8 max-w-6xl mx-auto">
//           {foodCombos.map((combo, index) => (
//             <motion.div
//               key={index}
//               className="relative group cursor-pointer transform hover:scale-110 transition duration-300 rounded-lg shadow-xl overflow-hidden bg-white p-6 text-center"
//               whileHover={{ scale: 1.05 }}
//               onClick={() => navigate(`/foodcombo/${combo.image}`)}
//             >
//               <img
//                 src={`/images/${combo.image}.jpg`}
//                 alt={combo.name}
//                 className="w-full h-64 object-cover rounded-lg"
//               />
//               <h3 className="text-2xl font-bold text-gray-800 mt-4">{combo.name}</h3>
//               <p className="text-gray-600 mt-2">{combo.description}</p>
//               <span className="text-purple-700 font-semibold mt-4 block">Votes: {combo.votes}</span>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="my-16 backdrop-blur-md bg-white/50 shadow-lg p-10 rounded-xl text-center">
//         <h2 className="text-4xl font-bold text-purple-900">Contact Us</h2>
//         <p className="text-lg text-gray-800 mt-3">
//           Have questions or suggestions? Reach out to us!
//         </p>
//         <motion.button
//           className="mt-5 px-6 py-3 bg-pink-700 text-white font-semibold rounded-full shadow-lg hover:bg-pink-900 transition-all transform hover:scale-105"
//           whileHover={{ scale: 1.1 }}
//         >
//           Contact Us
//         </motion.button>
//       </section>

//       {/* Footer */}
//       <footer className="bg-purple-800 text-white text-center py-6 mt-16 w-full rounded-t-3xl shadow-lg">
//         <p>&copy; 2025 TasteTwist. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default MainPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaThumbsUp } from "react-icons/fa";

const MainPage = () => {
  const navigate = useNavigate();

  const initialCombos = [
    {
      name: "Fries + Ice Cream",
      image: "fries_icecream",
      description: "A surprising mix of salty and sweet that melts in your mouth!",
      votes: 120,
      submittedBy: "Sibishree",
    },
    {
      name: "Pickle + Peanut Butter",
      image: "pickel_peanutbutter",
      description: "A tangy and nutty delight!",
      votes: 85,
      submittedBy: "Sibishree",
    },
    {
      name: "Chocolate + Bacon",
      image: "Chocolate_Bacon",
      description: "A perfect balance of sweet and savory!",
      votes: 150,
      submittedBy: "Sibishree",
    },
  ];

  const [foodCombos, setFoodCombos] = useState(initialCombos);

  // Function to handle vote increment with animation
  const handleVote = (index) => {
    const updatedCombos = [...foodCombos];
    updatedCombos[index].votes += 1;
    setFoodCombos(updatedCombos);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-200 to-blue-300 flex flex-col items-center">
      {/* Header Section with Background Image */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/public/images/egg_img.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div> 
        <motion.header
          className="relative text-center px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-extrabold text-white drop-shadow-md">
            Taste<span className="text-yellow-400">Twist</span>
          </h1>
          <p className="text-xl text-gray-200 mt-4 font-medium">
            Discover & Share Unexpected Food Pairings 🍕🍦
          </p>
          <motion.button
            className="mt-6 px-8 py-4 bg-yellow-500 text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 transition-all transform hover:scale-105"
            onClick={() => navigate('/foodcombos')}
            whileHover={{ scale: 1.1 }}
          >
            Share Your Combo
          </motion.button>
        </motion.header>
      </div>

      {/* Combos Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Popular Unlikely Combos 🍔🍫
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mt-8 max-w-6xl mx-auto">
          {foodCombos.map((combo, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer transform hover:scale-110 transition duration-300 rounded-lg shadow-xl overflow-hidden bg-white p-6 text-center"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(`/foodcombo/${combo.image}`)}
            >
              <img
                src={`/images/${combo.image}.jpg`}
                alt={combo.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-bold text-gray-800 mt-4">{combo.name}</h3>
              <p className="text-gray-600 mt-2">{combo.description}</p>

              {/* Vote Section with Animated Thumbs-Up */}
              <div className="flex items-center justify-center mt-4 space-x-3">
                <motion.button
                  className="flex items-center text-purple-700 font-semibold text-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVote(index);
                  }}
                  whileTap={{ scale: 1.2 }}
                >
                  Votes: {combo.votes}
                </motion.button>
                
                <motion.button
                  className="text-yellow-500 hover:text-yellow-400"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleVote(index);
                  }}
                  whileTap={{ scale: 1.8, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <FaThumbsUp className="text-3xl" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white text-center py-6 mt-16 w-full rounded-t-3xl shadow-lg">
        <p>&copy; 2025 TasteTwist. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
