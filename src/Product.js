import React from "react";

function Product({product}){
    return(
        <div>
            <img src={product.image} alt="product image"></img>
        </div>
    );
};
export default Product