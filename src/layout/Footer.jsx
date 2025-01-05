import React from "react";
import logo from "../assets/logo_blue.png";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100 md:pt-8 pb-8 dark:border-gray-800">
      <div className="m-auto space-y-8 px-4 text-gray-600 dark:text-gray-400 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="grid grid-cols-8 gap-6 md:gap-0">
          <div className="col-span-8 md:col-span-2 lg:col-span-3">
            <div className="flex h-full items-center justify-between gap-6 border-b border-white py-6 dark:border-gray-800 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
              <div>
                <Link
                  to="/"
                  aria-label="ampire logo"
                  className="flex items-center space-x-2"
                >
                  <img height={45} width={45} src={logo} alt="FreakDevs-Logo" />
                  <span className="dark:text-white text-xl font-extrabold tracking-wide">
                    FreakDevs
                  </span>
                </Link>
                <p className="mt-2 inline-block text-base">
                  Where we take your tech dreams from zero to{" "}
                  <span className="text-red-500  font-bold">Iron</span>{" "}
                  <span className="text-yellow-400  font-bold">Man</span>!
                </p>
              </div>

              <div className="flex gap-6">
                <a
                  href="https://github.com/FreakDevelopers"
                  target="blank"
                  aria-label="github"
                  className="hover:text-blue-500 dark:hover:text-white"
                >
                  <span className="sr-only">Github</span>
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/freakdevs/"
                  target="blank"
                  aria-label="linkedin"
                  className="hover:text-blue-500 dark:hover:text-white"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/freakdevs.in/"
                  target="blank"
                  aria-label="instagram"
                  className="hover:text-blue-500 dark:hover:text-white"
                >
                  <span className="sr-only">Instagram</span>

                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-8 md:col-span-6 lg:col-span-5">
            <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
              <div>
                <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                  Company
                </h2>
                <div className="h-0.5 bg-blue-500 w-8"></div>
                <ul className="mt-4 list-inside space-y-4">
                  <li>
                    <Link
                      to="/about"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:thefreakdevs@gmail.com"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/careers"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://invoice.freakdevs.in/"
                      target="_blank"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      Invoice
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                  Services
                </h2>
                <div className="h-0.5 bg-blue-500 w-8"></div>
                <ul className="mt-4 list-inside space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      Web Designing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      Web Hosting
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      Domain
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      SEO
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                  Ressources
                </h2>
                <div className="h-0.5 bg-blue-500 w-8"></div>
                <ul className="mt-4 list-inside space-y-4">
                  <li>
                    <a
                      href="https://daily.dev/"
                      target="_blank"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      Daily.dev
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://it-tools.tech/"
                      target="_blank"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      IT Tools
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.shapedivider.app/"
                      target="_blank"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      Shape Divider
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://simpleicons.org/"
                      target="_blank"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      Simple Icons
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://quickref.me/"
                      target="_blank"
                      className="text-sm duration-100 hover:text-blue-500 dark:hover:text-white"
                    >
                      QuickRef.Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center font-medium md:text-right text-sm md:pl-16">
              &copy; 2022-{year}{" "}
              <span className="text-black font-semibold dark:text-white">
                FreakDevs.&nbsp;
              </span>
              All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
