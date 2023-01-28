import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Product from '../../components/Product';
import SellerHome from '../seller/SellerHome'

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
            <Routes>
                    <Route path="/sell" element={<SellerHome/>}></Route>          
            </Routes>
            <div>Recently Viewed</div>

        </div>
    );
}

export default Home;