import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              To Do List
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white">
                  Registrasi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
