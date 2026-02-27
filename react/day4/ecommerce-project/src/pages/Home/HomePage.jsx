
import {useEffect, useState} from 'react';
import {useSearchParams} from "react-router";
import axios from 'axios';

import {Header} from '../../components/Header';
import {ProductGrid} from "./ProductGrid";
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      let url;
      if (search) {
        url = `/api/products/?search=${search}`;
      } else {
        url = "/api/products/";
      }
      const response = await axios.get(url)
      setProducts(response.data)
    })()
  }, [search])

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