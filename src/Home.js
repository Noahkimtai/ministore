import React, {useState, useEffect} from "react";
import Header from "./Header";
import Product from "./Product";

function Home(){
    const [products, setProducts] = useState([])

    // fetch all the products from the backend api
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products').
        then(res => res.json()).
        then(data => setProducts(data));
    },[]);

    let categories = [];
    products.forEach(product => {
        if (! categories.includes(product.category)){
            categories.push(product.category)
        }
    })


    return(
        <div>
            <Header/>
            <div>
                <label>Shop by category</label>
                <select>
                    {categories.map(category => 
                    <option key={category} value={category}>{category}</option>)}
                </select>
            </div>
            <div>
                {products.map(product =><Product key = {product.id}product = {product}/>)}
            </div>
        </div>
    );
}

export default Home;