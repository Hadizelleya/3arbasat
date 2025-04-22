import React from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaRss } from "react-icons/fa";
import logo from "../assets/maraimLogo-white.png"; // Adjust the path to your logo image

export default function Footer() {
  return (
    <footer className=" bg-[#383838] text-gray-300 py-10">
      <div className="container mx-auto px-5 flex justify-between items-center gap-10">
        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">FOLLOW US</h3>
          <div className="flex flex-wrap gap-3 space-x-4">
            <a
              href="#"
              className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-600 p-3 rounded-full text-white hover:bg-gray-700 transition"
            >
              <FaRss />
            </a>
            <a
              href="#"
              className="bg-blue-500 p-3 rounded-full text-white hover:bg-blue-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-gray-600 p-3 rounded-full text-white hover:bg-gray-700 transition"
            >
              <FaGooglePlusG />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row items-center justify-between container mx-auto mt-10 w-full  border-t border-gray-700 px-10 p-5">
        <div>
          <img src={logo} alt="logo" className="w-[100px]" />
        </div>
        <div className="mt-10 pt-5 text-center text-sm">
          <p className="text-gray-300">
            © 2025 Domax. All Rights Reserved | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
