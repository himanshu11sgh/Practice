
import {useEffect, useState} from 'react';
import axios from 'axios';

import {Header} from '../../components/Header';
import {ProductGrid} from "./ProductGrid";
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await axios.get("/api/products/")
      setProducts(response.data)
    })()
  }, [])

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" href="/images/favicons/home.png" />

      <Header cart={cart} />
      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  )
}