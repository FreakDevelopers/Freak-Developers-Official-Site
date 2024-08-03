import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MasterLayout() {
  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-800">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MasterLayout;
