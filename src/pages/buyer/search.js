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
        <div>
            <form>
                <input onChange={handleSearch} type='text' placeholder='Search product ..'></input>
                <button type="submit">Submit</button>
            </form>
            <div>
                <label>Shop by category</label>
                <label>Select category</label>
                <select onChange={filterLogic}>
                    {categories.map(category => 
                    <option key={category} value={category}>{category}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Search;