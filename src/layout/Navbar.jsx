import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa6";

function Navbar() {
  const [mode, setMode] = useState(true);
  const [open, setOpen] = useState(true);
  const element = document.documentElement;
  const navLinks = [
    {
      id: 1,
      title: "Home",
      navLink: "/",
    },
    {
      id: 2,
      title: "About",
      navLink: "/about",
    },
    {
      id: 3,
      title: "Contact",
      navLink: "/contact",
    },
  ];
  const { pathname } = useLocation();
  useEffect(() => {
    if (mode == true) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [mode]);
  return (
    <header>
      <nav
        id="navbar"
        class="fixed inset-x-0 z-20 w-full border-b border-gray-200 bg-white/10 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-900/10"
      >
        <div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div class="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-3">
            <div class="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <Link
                to="/"
                aria-label="logo"
                class="flex items-center space-x-2"
              >
                <img height={45} width={45} src={logo} alt="FreakDevs-Logo" />
                <span className="dark:text-white text-xl font-extrabold tracking-wide">
                  FreakDevs
                </span>
              </Link>

              <button
                onClick={() => setOpen(!open)}
                aria-label="humburger"
                id="hamburger"
                class="relative -mr-6 p-6 lg:hidden"
              >
                <div
                  aria-hidden="true"
                  class={`m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 ${
                    open && "translate-y-1 rotate-45"
                  }`}
                ></div>
                <div
                  aria-hidden="true"
                  class={`m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 ${
                    open && "-translate-y-1.5 -rotate-45"
                  }`}
                ></div>
              </button>
            </div>
            <div
              id="layer"
              aria-hidden="true"
              class={`fixed inset-0 z-10 h-screen w-screen origin-bottom ${
                open ? "scale-y-100" : "scale-y-0"
              } bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden`}
            ></div>
            <div
              id="navlinks"
              class={`${
                open ? "visible opacity-1 scale-x-100 scale-y-100" : "invisible opacity-0"
              } absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0 dark:lg:bg-transparent`}
            >
              <div class="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul class="space-y-6 md:space-x-8 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
                  {navLinks.map((item) => (
                    <li key={item.id}>
                      <Link
                        onClick={() => setOpen(!open)}
                        to={item.navLink}
                        class={`inline-block transition hover:border-b-2 border-b-blue-500 ${
                          pathname == item.navLink
                            ? "dark:text-white border-b-2 border-b-blue-500"
                            : ""
                        }`}
                      >
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div class="mt-12 -ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
                <Link
                  onClick={() => setOpen(!open)}
                  to="/contact"
                  class="relative ml-auto flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-white before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-blue-400 sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800"
                >
                  <span class="relative text-sm font-semibold text-white dark:text-gray-900 lg:text-blue-400 lg:dark:text-white">
                    Get started
                  </span>
                </Link>
              </div>
              <button
                aria-label="switch theme"
                onClick={() => setMode(!mode)}
                class="switcher group relative hidden h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex"
              >
                <FaSun className="transistion relative m-auto hidden h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400 dark:block dark:fill-gray-300" />

                <FaMoon className="transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden" />
              </button>
            </div>
            <div class="fixed top-3 right-14 z-20 sm:right-24 lg:hidden">
              <button
                onClick={() => setMode(!mode)}
                aria-label="switche theme"
                class="switcher group relative flex h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
              >
                <FaSun className="transistion relative m-auto hidden h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400 dark:block dark:fill-gray-300" />

                <FaMoon className="transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
