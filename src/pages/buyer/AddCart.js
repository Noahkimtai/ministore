import React from "react";
import Product from "../../components/Product";

function AddCart(cart){
    return(
        <div>
            <p>Hello</p>
            <p>{cart.price}</p>
             {/* <Product key={cart.id} product ={cart} /> */}
        </div>
    )
};
export default AddCart;