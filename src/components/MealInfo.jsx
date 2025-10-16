import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealInfo = () => {
  const { mealid } = useParams();
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
      const jsonData = await res.json();
      setMealDetails(jsonData.meals ? jsonData.meals[0] : null);
    };
    getInfo();
  }, [mealid]);

  if (!mealDetails) return <div>Loading...</div>;

  return (
    <div className='bg-yellow-100 h-screen w-screen flex justify-center items-center p-4'>
        <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} className='w-xl rounded-2xl'/>
      <div className='flex m-4 p-4 gap-4 flex-col'>
      <h1 className='bg-red-500 text-white w-xs rounded-xl p-3 text-6xl font-bold'>{mealDetails.strMeal}</h1>
      <p className='text-2xl '>{mealDetails.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealInfo;

