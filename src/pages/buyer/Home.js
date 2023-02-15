import React, {useState, useEffect} from "react";
import Product from '../../components/Product';
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
        alert(id)
        const filteredData = products.filter(el =>el.id ===id)
        setCart(() => cart.concat(filteredData))
        alert(cart.length)
    }

    return(
        <div className = 'p-6'>
            <Search categories = {categories} searchLogic ={searchLogic} filterLogic = {filterLogic} />

            <div className = 'bg-white grid grid-cols-6 gap-y-6 gap-x-8 place-items-center'>
                {products.map(product => <Product key = {product.id} product = {product} addToCart ={addToCart}/> )}
            </div>
            <div>
                {cart.map(product => <AddCart key={Math.random()} cart= {cart} />)}
            </div>
            <About />
        </div>
    );
}

export default Home;