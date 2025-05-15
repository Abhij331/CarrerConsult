import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">CareerConsult</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link
              to="/contact"
              className="bg-blue-300 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Book Appointment
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;