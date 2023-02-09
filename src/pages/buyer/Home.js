import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Product from '../../components/Product';
import SellerHome from '../seller/SellerHome'
import AddCart from "./AddCart";
import Search from "./search";
import About from "./About";


function Home(){
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    

    // fetch all the products from the backend api
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products').
        then(res => res.json()).
        then(data =>{ setProducts(data)
        });
    },[]);

    let categories = [];

    products.forEach(product => {
        if (! categories.includes(product.category)){
            categories.push(product.category)
        }
    })

    function addToCart(id){
        setCart(cart => cart.concat(products.filter(prod =>prod.id === id)))
    }

    function filterLogic(e){
        e.preventDefault()
        const filteredData = products.filter(product => product.category === e.target.value)
        setProducts(filteredData)
    }

    function searchLogic(description){
        const filteredData = products.filter(product =>product.title.includes(description))
        setProducts(filteredData);
    }

    function addToCart(id){
        let addedToCart = products.filter(el => el.id === id)
        cart.concat(addToCart)
    }

    return(
        <div class = 'p-6'>
            <Search categories = {categories} searchLogic ={searchLogic} filterLogic = {filterLogic} />

            <div class = 'bg-white grid grid-cols-6 gap-y-6 gap-x-8 place-items-center'>
                {products.map(product => <Product key = {product.id} product = {product} addToCart ={addToCart}/> )}
            </div>
            <div>
                {cart.map(product => <AddCart key={product.id} cart= {cart} />)}
            </div>
            <About />
        </div>
    );
}

export default Home;