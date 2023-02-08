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
                <input onChange={handleSearch} type='text' placeholder='Search product ..'></input>
                <button class = 'bg-slate-500 p-2 hover:bg-slate-50'type="submit">Search</button>
            </form>
            <div>
                <label>Shop by category</label>
                <label>Select category</label>
                <select onChange={filterLogic}>
                    <option value='All'>All</option>
                    {categories.map(category => 
                    <option key={category} value={category}>{category}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Search;