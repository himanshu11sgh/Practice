
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router';
import {HomePage} from './pages/Home/HomePage';
import {CheckoutPage} from './pages/Checkout/CheckoutPage';
import {OrdersPage} from './pages/Orders/OrdersPage';
import {TrackingPage} from './pages/TrackingPage/TrackingPage';
import {Page404} from './pages/Page404/Page404';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  async function loadCart() {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data)
  }

  useEffect(() => {
    loadCart();
  }, [])
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout/" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders/" element={<OrdersPage cart={cart} />} />
      <Route path="/tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />

      <Route path="*" element={<Page404 cart={cart}/>} />
    </Routes>
  )
}

export default App
