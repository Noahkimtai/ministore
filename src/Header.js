import React from "react";
import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <div>
            <NavLink to='/sell'> Sell at Ministore</NavLink>
            <NavLink to='cart'>Cart</NavLink>
            <NavLink to= 'profile'>Profile</NavLink>
        </div>        
    );
}
export default Header