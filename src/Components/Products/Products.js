import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

function Products() {
  console.log("Products");
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setProduct(res);
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      {
        products.map(function (item, index) {
          return (<ProductCard key={index}  product={item} />)
        })
      }
    </div>
  );
}

export default Products;
