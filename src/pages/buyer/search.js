import React, { useState, useEffect } from "react";
import {FaSearch} from "react-icons/fa"

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
        <div className = 'grid grid-cols-2 g-3'>
            <view className="pr-8 flex flex-row">
                < div className='p-2.5'> <FaSearch/> </div>
                <input onChange={handleSearch} className ="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5" type='text' placeholder='Search'/> 
            </view>
            <div className="pl-8">
                <select onChange={filterLogic} className ="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" >
                    <option value='All'>Filter By Category</option>
                    {categories.map(category => 
                    <option key={category} value={category}>{category}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Search;