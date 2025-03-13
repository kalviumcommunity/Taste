import React, { useEffect, useState } from 'react'
import FoodComboCard from '../components/FoodComboCard';
import {useNavigate} from 'react-router-dom'
function FoodComboPage () {
    const [foodcombo,setfoodcombo]=useState([]);
    const[error,setError]=useState(null);
    const navigate = useNavigate();

    const handleForm=()=>{
        navigate('/foodcomboform')
    }
    useEffect(()=>{
        fetch('http://localhost:3000/combos')
        .then((res)=>{ 
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
              }
              return res.json();
        })
        .then((data)=>{
            setfoodcombo(data)
        })
        .catch((err)=>{
            console.error("Error fetching food combs:",err);
            setError(err.message);
        })
    },[])

    if(error)
    {
        return <div className='text-center text-red text-2xl mt-10'>Error in Fetching Product</div>
    }
  return (
    <>
        <div className='bg-violet-100 pt-6'>
            <div className='text-violet-800'>
            <h1 className="flex flex-col text-violet-800 text-3xl font-bold mt-10 items-center">
            Wired FoodCombos Collection</h1>
                <button className='bg-violet-600 flex flex-row justify-items-end p-3 rounded-md text-gray-50 text-1xl  mr-4 ml-auto'onClick={handleForm}>Add Food Combo</button>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                    {foodcombo.map((combo) => (
                    <FoodComboCard key={combo.id} {...combo} />
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default FoodComboPage
