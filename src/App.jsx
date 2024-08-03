import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MasterLayout from "./layout/MasterLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
