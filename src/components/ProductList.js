import { useCallback, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductList = () => {
  //   const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/productss");

  //   const fetchProducts = useCallback(async () => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (err) {
  //       setProducts([]);
  //     }
  //   }, [url]);

  //   useEffect(() => {
  //     fetchProducts();
  //   }, [fetchProducts]);

  const { data: products, error } = useFetch(url);

  return (
    <section>
      <button onClick={() => setUrl("http://localhost:8000/products")}>
        All
      </button>
      <button
        onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
      >
        In stock only
      </button>
      {error && <div>{error}</div>}
      {products &&
        products.map((product) => {
          return (
            <div className="card" key={product.id}>
              <p>{product.id}</p>
              <p>{product.name}</p>
              <p>
                <span>$ {product.price}</span>
                <span>{product.in_stock ? "In stock" : "Out of stock"}</span>
              </p>
            </div>
          );
        })}
    </section>
  );
};
