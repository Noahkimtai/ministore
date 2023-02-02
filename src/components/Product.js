import React from "react";

function Product({product, addToCart}){
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
                <button onClick={addToCart(product.id)}>
                    Add to Basket
                </button>
            </div>
        </div>

    );
};
export default Product