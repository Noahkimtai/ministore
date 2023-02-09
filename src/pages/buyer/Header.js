import React from "react";
import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <div class = 'flex items-center flex-wrap justify-between bg-teal-500 p-6 text-base font-extrabold' >
            <NavLink class = 'hover:bg-slate-400'to='/'>Home</NavLink>
            <NavLink class = 'hover:bg-slate-400'to='/sell' > Sell at Ministore</NavLink>
            <NavLink class = 'hover:bg-slate-400'to='cart' >Cart</NavLink>
            <NavLink class = 'hover:bg-slate-400'to= 'profile' >Profile</NavLink>
            <NavLink class = 'hover:bg-slate-400' to= '/recent'>Recently Viewed</NavLink>
        </div>        
    );
}
export default Header