import "./ProductCard.css";
import AddToCart from "../AddToCart/AddToCart.js";
import Effect from "../Effect/Effect.jsx";
import { useRef} from "react";

function ProductCard({ product}) {
    let pRef = useRef(0);
    function printTitle() {
        console.log("Price show");
        if (pRef.current.className === "hide") {
            pRef.current.className = "show";
        } else {
            pRef.current.className = "hide";
        }

        console.log(pRef.className);
    }
    return (
        <div>
            <div className="product-card">
                <p onClick={printTitle}>{product.title}</p>
                <p ref={pRef} className="show">
                    {product.price.value}
                </p>
                <AddToCart
                    product={product}
                />
                <Effect />
            </div>
        </div>
    );
}
export default ProductCard;