import AddToCart from '../AddToCart/AddToCart';
import ReduxAddToCart from '../ReduxAddToCart';

function ProductCard({ product }) {

  return (
    <div className="product-card">
        <h3>{product.title}</h3>
        <p>{product.price.value}</p>
        <ReduxAddToCart product={product} />    
    </div>
    )
  }
  
export default ProductCard;
  

//ProductCard()

// useState
// useRef
// useEffect

// custom hooks 
// default hooks
// they should not render a ui 
// they should be on the top of a function 
// they should be not in any conditon or loops 



// state variable = 
// whenver a state variable is set it would cause a rerender of the component
// and the value of the variable would be retained on rerenders

// function or component is called for the first time 
// Mounting

// useState(default value)
// returns [stateVar, setterFn];


// useEffect(fn, [])