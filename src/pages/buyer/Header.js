import React from "react";
import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <div className = 'flex items-center flex-wrap justify-between bg-teal-500 p-6 text-base font-extrabold' >
            <NavLink className = 'hover:bg-slate-400'to='/'>Home</NavLink>
            <NavLink className = 'hover:bg-slate-400'to='/sell' > Sell at Ministore</NavLink>
            <NavLink className = 'hover:bg-slate-400'to='/cart' >Cart</NavLink>
            <NavLink className = 'hover:bg-slate-400'to= '/profile' >Profile</NavLink>
            <NavLink className = 'hover:bg-slate-400' to= '/recent'>Recently Viewed</NavLink>
        </div>        
    );
}
export default Header