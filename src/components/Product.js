import React from "react";

function Product({product, addToCart}){
    return(
        <div class = 'object-fill bg-slate-200' key={product.id}>
            <div>
            <img src={product.image} alt="product image" class = 'odject-scale-down h-48 w-96'></img>
            </div>
            <div>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <p>{product.rating.rate}</p>
            </div>
            <div class = ' flex justify-center items-center p-2'>
                <button class = 'bg-slate-500 p-2 hover:bg-slate-50' onClick={addToCart(product.id)}>
                    Add to Basket
                </button>
            </div>
        </div>

    );
};
export default Product