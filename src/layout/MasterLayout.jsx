import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MasterLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A] font-urbanist">
      <Navbar />
      <main className="pt-20 pb-10 mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MasterLayout;
