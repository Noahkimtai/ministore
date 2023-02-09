import React, { useState, useEffect } from "react";

function Search({categories, filterLogic,searchLogic}){

    const[searchDescription, setSearchDescription]=useState('')

    useEffect(() =>{
        searchLogic(searchDescription)
    },[searchDescription])

    function handleSearch(e){
        e.preventDefault()
        setSearchDescription(e.target.value)
    }

    return(
        <div class = 'grid grid-cols-2 g-3'>
            <form>
                <input onChange={handleSearch} type='text' placeholder='Search' class = "form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"></input>
            </form>
            <div>
                <label class ='p-6'>Shop by category</label>
                <select onChange={filterLogic} >
                    <option value='All'>All</option>
                    {categories.map(category => 
                    <option key={category} value={category}>{category}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Search;