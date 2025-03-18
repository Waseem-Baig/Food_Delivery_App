import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white p-8">
      <div className="container mx-auto px-4 grid grid-cols-1 xs:grid-cols-1 sm-xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {/* Company Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/locations" className="hover:underline">
                Locations
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/login" className="hover:underline">
                Login
              </a>
            </li>
            <li>
              <a href="/order" className="hover:underline">
                Order Online
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul>
            <li>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:underline">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="/security" className="hover:underline">
                Security
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.facebook.com" className="hover:underline">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" className="hover:underline">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="hover:underline">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" className="hover:underline">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" className="hover:underline">
                <FaDiscord />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal Information */}
      <div className="container mx-auto px-4 mt-8 text-center">
        <p className="text-sm">
          &copy; 2024 Delivery Dost. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
