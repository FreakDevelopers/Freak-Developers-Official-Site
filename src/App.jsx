import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import MasterLayout from "./layout/MasterLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Careers from "./pages/Careers";

function App() {
  const { pathname } = useLocation();
  const element = document.getElementById("title");

  useEffect(() => {
    switch (pathname) {
      case "/":
        element.innerText = element.textContent.substring(0, 12) + "Home";
        break;
      case "/about":
        element.innerText = element.textContent.substring(0, 12) + "About Us";
        break;
      case "/contact":
        element.innerText = element.textContent.substring(0, 12) + "Contact Us";
        break;
      case "/careers":
        element.innerText = element.textContent.substring(0, 12) + "Careers";
        break;
      default:
        element.innerText = element.textContent.substring(0, 12) + "Not Found";
        break;
    }
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Route>
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
