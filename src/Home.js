import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Product from "./Product";
import SellerHome from './seller/SellerHome'

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
            <Header>
                <Routes>
                    <Route path="/sell" element={<SellerHome/>}></Route>          
                </Routes>
            </Header>
            <form>
                <input type='text' placeholder='Search product ..'></input>
                <button type="submit">Submit</button>
            </form>
            <div>
                <label>Shop by category</label>
                <label>Select category</label>
                <select>
                    {categories.map(category => 
                    <option key={category} value={category}>{category}</option>)}
                </select>
            </div>
            <div>
                {products.map(product =><Product key = {product.id}product = {product}/>)}
            </div>
            <div>Recently Viewed</div>

        </div>
    );
}

export default Home;