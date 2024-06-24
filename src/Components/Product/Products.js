// Component
import ProductCard from "../ProductCard/ProductCard.js";
import { useState ,useEffect} from "react";
import React from "react";
function Products(){
    let [products,setProduct]=useState([]);
    useEffect(()=>{
        fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                console.log(res);
                setProduct(res);
            });
    },[]);
    return(
        <div>
            I am products.
            {
                products.map(function(item){
                    return (
                    <ProductCard key={item.id} product={item}/>
                    )
                })
            }
            
        </div>
    )
};

export let a=20;
export let b=30;
export default React.memo(Products);
