import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import PLPPage from "./routes/ProductLandingPage/ProductLandingPage";
import Header from "./components/Header/header";
import Home from "./routes/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Footer from "./components/Footer/Footer";
import CartPage from "./routes/CartPage/CartPage";
import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/home" element={<Home />}></Route>
          <Route exact path="/cart" element={<CartPage />}></Route>
          <Route exact path="/signIn" element={<SignIn />}></Route>
          <Route exact path="/signUp" element={<SignUp />}></Route>
          <Route exact path="/products" element={<PLPPage />}></Route>
          <Route exact path="/:id" element={<PLPPage />}></Route>
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Route>
      </Routes>
      {!location.pathname.includes("cart") && <Footer />}
    </div>
  );
}

export default App;
