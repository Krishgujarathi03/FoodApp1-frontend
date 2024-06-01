import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import MyState from "./context/MyState";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import { Toaster } from "react-hot-toast";
import Verify from "./pages/verify/Verify";
import MyOrders from "./pages/myOrders/MyOrders";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <MyState>
      <BrowserRouter>
        {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Routes>
        </div>
        <Toaster />
        <Footer />
      </BrowserRouter>
    </MyState>
  );
};

export default App;
