import React from "react";

function Search({filterLogic,searchLogic}){
    return(
        <div>
            <form>
                <input onChange={searchLogic} type='text' placeholder='Search product ..'></input>
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