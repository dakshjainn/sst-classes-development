import { useContext } from "react";
import CartContext from "../../context/CartContext";
function AddToCart({ product }) {
    console.log("add to cart", product.id)
    const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    function increase() {
        increaseQuantity(product);
    }
    function decrease() {
        decreaseQuantity(product);
    }
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
     )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>

            </div>
        )
    }

}

export default AddToCart;


// array of object 
// object of object 

//[{id: 1, quantity: 10}, {id: 2, quantity: 10}, {id: 3, quantity: 10}, {id: 4, quantity: 10}]
// cart = 
// {id:{id: 1, quantity: 10}, id:{id: 2, quantity: 10}, id:{id: 3, quantity: 10}, id:{id: 4, quantity: 10}}
//cart["3"]

// Object.value(obj);
// Object.keys(obj);

// const cart = {"1":{id:1, name:"apple", price:10}, "2":{id:2, name:"banana", price:20}, "3":{id:3, name:"orange", price:30}, "4":{id:4, name:"grapes", price:40}, "5":{id:5, name:"mango", price:50}};

// console.log(Object.keys(cart));
// console.log(Object.values(cart));