import React from "react";

function Product({product}){
    return(
        <div key={product.id}>
            <div>
            <img src={product.image} alt="product image"></img>
            </div>
            <div>
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{product.rating.rate}</p>
            </div>
            <div>
                <button>
                    Add to Basket
                </button>
            </div>
        </div>

    );
};
export default Product