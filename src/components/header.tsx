"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);  // Manage sign-in state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignIn = () => {
    setIsSignedIn(true);  // Handle sign-in
    setIsMenuOpen(false); // Close menu after sign-in
  };

  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div>
            <Image
              width={80}
              height={80}
              src="/images/logoDark.png"
              alt="logoDark"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex">
          <ul className="inline-flex gap-8 uppercase text-sm font-semibold">
            <li className="headerLi">Home</li>
            <li className="headerLi">Posts</li>
            <li className="headerLi">Pages</li>
            <li className="headerLi">Features</li>
            <li className="headerLi">Contact</li>
          </ul>
        </div>

        {/* User Info and Sign-In Button (Visible on all devices) */}
        <div className="hidden lg:flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full"
              src="/images/stranger.png"
              alt="logo"
            />
            <p className="text-sm font-medium">Hello Stranger!</p>
          </div>
          <button className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="text-2xl text-black focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-40">
          {/* Show Hello Stranger and Sign In Button if Not Signed In */}
          {!isSignedIn ? (
            <div className="flex flex-col items-center gap-6 py-6 uppercase text-sm font-semibold">
              <div className="flex items-center gap-1">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/images/stranger.png"
                  alt="logo"
                />
                <p className="text-sm font-medium">Hello Stranger!</p>
              </div>
              <button
                onClick={handleSignIn}
                className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600"
              >
                Sign In
              </button>
            </div>
          ) : (
            // Show Header Links After Sign-In
            <ul className="flex flex-col items-center gap-6 py-6 uppercase text-sm font-semibold">
              <li className="headerLi" onClick={toggleMenu}>Home</li>
              <li className="headerLi" onClick={toggleMenu}>Posts</li>
              <li className="headerLi" onClick={toggleMenu}>Pages</li>
              <li className="headerLi" onClick={toggleMenu}>Features</li>
              <li className="headerLi" onClick={toggleMenu}>Contact</li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;