import js from '@eslint/js';
import React, { useState } from 'react'
import Card from './Card';

function Home() {
const [data, setData] = useState();
const [search, setSearch] = useState("");
const [msg, setMsg] = useState("");

const searchData = (e) =>{
    setSearch(e.target.value);
}

const getApi = async () =>{
  if (search === "") {
    setMsg("Please enter a food name");
    setData(null);
  } else {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const jsonData = await get.json();
    if (!jsonData.meals) {
      setData(null);
      setMsg("Data not found");
    } else {
      setData(jsonData.meals);
      setMsg("");
    }
  }
};
  return (
    <div className='w-screen flex justify-center items-center h-full flex-col overflow-x-hidden'>
        <div className='bg-red-500 w-screen text-center text-white '>
            <h1 className='text-4xl m-4 p-4 font-bold'>🍽️ Recipe Book</h1>
        </div>
        <div>
      <input
       type="text" 
       placeholder='Search Food'
       onChange={searchData}
       className='border-2 border-gray-300 h-12 w-90 rounded-lg p-4 m-12 text-lg '/>
       <button 
       className='bg-yellow-300 text-xl font-semibold p-2 text-gray-700 rounded-lg'
       onClick={getApi}
       >Search</button>
       </div>
       <div>
        <Card detail = {data} />
       </div>
       <h4>{msg}</h4>
    </div>
  )
}

export default Home
