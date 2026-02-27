
import {useEffect, useState} from 'react';
import axios from 'axios';

import {Header} from '../../components/Header';
import {ProductGrid} from "./ProductGrid";
import "./HomePage.css";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products/")
    .then(
      (response) => setProducts(response.data)
    )
  }, [])

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" href="/images/favicons/home.png" />

      <Header cart={cart}/>
      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  )
}