import React from "react";
import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <div class = 'flex items-center flex-wrap justify-between bg-teal-500 p-6 text-base' >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/sell' > Sell at Ministore</NavLink>
            <NavLink to='cart' >Cart</NavLink>
            <NavLink to= 'profile' >Profile</NavLink>
            <NavLink to= '/recent'>Recently Viewed</NavLink>
        </div>        
    );
}
export default Header