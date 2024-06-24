import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { useDispatch } from "react-redux";

function AddToCart({ product }) {
    // useSelector
    let dispatch=useDispatch();
    function increase() {
        //dispatcher
        dispatch({type:"ADD_TO_CART",payload:product});
    }
    function decrease() {
        //dispatcher
        dispatch({type:"REMOVE_FROM_CART",payload:product});
    }
    let cart=useSelector(()=>{
        return state.items;
    })
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
