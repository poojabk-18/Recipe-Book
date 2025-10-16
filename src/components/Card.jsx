import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ detail }) => {
  return (
    <div className='grid grid-cols-3 gap-12 max-w-5xl overflow-x-hidden'>
      {
        !detail ? "" : detail.map((currItem) => {
          return (
            <div key={currItem.idMeal} className='max-w-md mx-auto'>
              <img src={currItem.strMealThumb} alt={currItem.strMeal} className="w-full h-auto rounded" />
              <p className='font-bold text-2xl my-2'>{currItem.strMeal}</p>
              <NavLink to={`/${currItem.idMeal}`}>
                <button
                  className='bg-red-500 shadow-2xl text-white p-2 m-2 font-semibold rounded-lg hover:border-red-500 hover:border-2 hover:bg-white hover:text-black transition duration-300 ease-in cursor-pointer'>
                  View Recipe
                </button>
              </NavLink>
            </div>
          );
        })
      }
    </div>
  );
};

export default Card;





