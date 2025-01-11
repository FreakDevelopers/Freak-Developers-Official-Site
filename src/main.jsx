import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./layout/ScrollToTop.jsx";
import ScrollToTopButton from "./layout/ScrollToTopButton.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
      <ScrollToTopButton />
    </Router>
  </React.StrictMode>
);
