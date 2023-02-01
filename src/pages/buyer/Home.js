import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Product from '../../components/Product';
import SellerHome from '../seller/SellerHome'
import Search from "./search";

function Home(){
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    

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

    function addToCart(id){
        setCart(cart => cart.concat(products.filter(prod =>prod.id ===id)))
    }

    function filterLogic(e){
        filteredData = products.filter(product => product.category === e.target.value)
        setProducts(filteredData)
    }

    function searchLogic(description){
        filteredData = products.filter(product =>product.name.includes(description))
        setProducts(filteredData);
    }



    return(
        <div>
            <Search searchLogic ={searchLogic} filterLogic = {filterLogic} />
            <div>
                {products.map(product => <Product key = {product.id} product = {product} addToCart ={addToCart}/> )}
            </div>
            <Routes>
                    <Route path="/sell" element={<SellerHome/>}></Route>          
            </Routes>
            <div>Recently Viewed</div>

        </div>
    );
}

export default Home;