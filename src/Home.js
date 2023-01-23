import React, {useState, useEffect} from "react";
import Header from "./Header";
import Product from "./Product";
import Categories from "./Categories"

function Home(){
    const [products, setProducts] = useState([])

    // fetch all the products from the backend api
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products').
        then(res => res.json()).
        then(data => setProducts(data));
    },[])


    return(
        <div>
            <Header/>
            <div>
                <h3>Shop By Category</h3>
                {products.map(product => <Categories product ={product}/>)}
            </div>
            <div>
                {products.map(product =><Product key = {product.id}product = {product}/>)}
            </div>
        </div>
    );
}

export default Home;