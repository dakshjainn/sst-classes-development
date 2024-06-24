import {useContext} from "react";
import CartContext from "../../Context/CartContext";

function AddToCart({ product}) {
    const {cart,increaseQuantity,decreaseQuantity}=useContext(CartContext);
    function increase() {
        increaseQuantity(product);
        console.log("I am increase");
    }
    function decrease() {
        decreaseQuantity(product);
    }
    const quanitity = cart[product.id] ? cart[product.id].quanitity : 0;
    if (quanitity === 0) {
        return (
            <div>
                <div>
                    <button onClick={increase}>AddToCart</button>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <button onClick={increase}>
                    <p>+</p>
                </button>
                <span>{quanitity}</span>
                <button onClick={decrease}>
                    <p>-</p>
                </button>
            </div>
        );
    }
}

export default AddToCart;