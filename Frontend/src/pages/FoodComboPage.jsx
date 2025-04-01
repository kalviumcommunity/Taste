// import React, { useEffect, useState } from 'react'
// import FoodComboCard from '../components/FoodComboCard';
// import {useNavigate} from 'react-router-dom'
// function FoodComboPage () {
//     const [foodcombo,setfoodcombo]=useState([]);
//     const[error,setError]=useState(null);
//     const navigate = useNavigate();

//     const handleForm=()=>{
//         navigate('/foodcomboform')
//     }
//     useEffect(()=>{
//         fetch('http://localhost:3000/combos')
//         .then((res)=>{ 
//             if (!res.ok) {
//                 throw new Error(`HTTP error! status: ${res.status}`);
//               }
//               return res.json();
//         })
//         .then((data)=>{
//             setfoodcombo(data)
//         })
//         .catch((err)=>{
//             console.error("Error fetching food combs:",err);
//             setError(err.message);
//         })
//     },[])

//     if(error)
//     {
//         return <div className='text-center text-red text-2xl mt-10'>Error in Fetching Product</div>
//     }
//   return (
//     <>
//         <div className='bg-violet-100 pt-6'>
//             <div className='text-violet-800'>
//             <h1 className="flex flex-col text-violet-800 text-3xl font-bold mt-10 items-center">
//             Wired FoodCombos Collection</h1>
//                 <button className='bg-violet-600 flex flex-row justify-items-end p-3 rounded-md text-gray-50 text-1xl  mr-4 ml-auto'onClick={handleForm}>Add Food Combo</button>
//                 <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4">
//                     {foodcombo.map((combo) => (
//                     <FoodComboCard key={combo.id} {...combo} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default FoodComboPage


import React, { useEffect, useState } from 'react';
import FoodComboCard from '../components/FoodComboCard';
import { useNavigate } from 'react-router-dom';

function FoodComboPage() {
  const [foodcombo, setFoodCombo] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleForm = () => {
    navigate('/foodcomboform');
  };

  // Fetch all food combos and users
  useEffect(() => {
    fetch('http://localhost:3000/combos')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setFoodCombo(data);
      })
      .catch((err) => {
        console.error('Error fetching food combos:', err);
        setError(err.message);
      });

    // Fetch users (assuming users data is available from an API endpoint)
    fetch('http://localhost:3000/users') // Add your users endpoint here
      .then((res) => res.json())
      .then((userData) => {
        setUsers(userData);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
      });
  }, []);

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  // Filter food combos by the selected user
  const filteredFoodCombos = selectedUser
    ? foodcombo.filter((combo) => combo.submittedBy === selectedUser)
    : foodcombo;

  if (error) {
    return <div className="text-center text-red text-2xl mt-10">Error in Fetching Product</div>;
  }

  return (
    <>
      <div className="bg-violet-100 pt-6">
        <div className="text-violet-800">
          <h1 className="flex flex-col text-violet-800 text-3xl font-bold mt-10 items-center">
            Wired FoodCombos Collection
          </h1>
          {/* Dropdown Button to List User Items */}
          <div className="flex justify-end mb-4 mr-6">
            <select
              className="p-2 bg-violet-600 text-white rounded-md"
              onChange={handleUserChange}
              value={selectedUser}
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user.id} value={user.username}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>

          <button
            className="bg-violet-600 flex flex-row justify-items-end p-3 rounded-md text-gray-50 text-1xl mr-4 ml-auto"
            onClick={handleForm}
          >
            Add Food Combo
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4">
            {filteredFoodCombos.map((combo) => (
              <FoodComboCard key={combo.id} {...combo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodComboPage;
