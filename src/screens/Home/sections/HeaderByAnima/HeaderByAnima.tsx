'use client';
import React, { useState } from 'react';
import { Input } from '../../../../components/ui/input';
import { Separator } from '../../../../components/ui/separator';
import {
  Search,
  Menu,
  Heart,
  ShoppingCart,
  ChevronDown,
  Percent,
} from 'lucide-react';

export const HeaderByAnima = () => {
  // Navigation links data
  const navLinks = [
    { name: 'Home', hasDropdown: true },
    { name: 'Shop', hasDropdown: true },
    { name: 'Blog', hasDropdown: true },
    { name: 'Pages', hasDropdown: true },
    { name: 'Contact', hasDropdown: false },
  ];

  const [searchText, setSearchText] = useState('');

  return (
    <header className="w-full bg-transparent shadow-sm">
      {/* Top navigation bar */}
      <div className="flex w-full h-20 bg-white items-center justify-between px-6">
        {/* Logo */}
        <div className="w-40 h-11 bg-[url(/logo.png)] bg-cover bg-center hover:opacity-90 transition cursor-pointer" />

        {/* Search bar */}
        <div className="flex transition w-full max-w-xl h-12 rounded-lg border border-solid border-gray-300 overflow-hidden hover:border-gray-400">
          {/* Categories dropdown */}
          <div className="flex transition h-full items-center pl-4 pr-3 bg-gray-50 cursor-pointer hover:bg-gray-100">
            <div className="font-medium text-gray-800 text-base whitespace-nowrap">
              All Categories
            </div>
            <ChevronDown className="ml-2 w-4 h-4 text-gray-600" />
          </div>

          {/* Search input */}
          <div className="flex flex-1 h-full items-center border-l border-gray-300">
            <Input
              className="border-none h-full pl-4 text-base text-gray-700 focus:ring-0"
              placeholder="Search Products"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className="pr-4">
              <button className="transition p-2 rounded-full hover:bg-gray-100">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6 ml-6">
          <div className="flex flex-col items-end">
            <div className="font-medium text-gray-600 text-sm">Support</div>
            <div className="font-bold text-lg text-gray-800">894-555-0123</div>
          </div>
          <div className="transition p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
            <Menu className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      </div>

      {/* Bottom navigation bar */}
      <div className="flex w-full h-16 bg-amber-100 items-center px-6">
        {/* Products category dropdown */}
        <div className="flex transition h-10 bg-white rounded items-center px-4 cursor-pointer hover:bg-gray-50 shadow-sm">
          <Menu className="w-4 h-4 text-gray-700" />
          <div className="ml-3 font-semibold text-gray-800 text-sm">
            Products Category
          </div>
          <ChevronDown className="w-4 h-4 ml-3 text-gray-600" />
        </div>

        <Separator orientation="vertical" className="h-6 mx-4 bg-gray-400" />

        {/* Navigation links */}
        <nav className="flex h-full">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="flex transition h-full items-center px-4 cursor-pointer hover:bg-amber-200"
            >
              <div className="font-medium text-gray-800 text-base">
                {link.name}
              </div>
              {link.hasDropdown && (
                <ChevronDown className="w-4 h-4 ml-1 text-gray-600" />
              )}
            </div>
          ))}
        </nav>

        <Separator orientation="vertical" className="h-6 ml-auto bg-gray-400" />

        {/* Right section with deal and cart */}
        <div className="flex items-center gap-6 ml-4">
          {/* Deal section */}
          <div className="flex transition items-center cursor-pointer hover:opacity-80">
            <Percent className="w-5 h-5 text-red-600" />
            <div className="ml-2 font-bold text-red-600 text-lg">Deal</div>
            <ChevronDown className="w-4 h-4 ml-1 text-gray-700" />
          </div>

          {/* Wishlist */}
          <div className="flex transition items-center relative cursor-pointer hover:opacity-80">
            <Heart className="w-6 h-6 text-gray-700" />
            <div className="flex absolute w-5 h-5 -top-1 left-3 bg-amber-500 rounded-full items-center justify-center shadow-sm">
              <div className="font-medium text-xs text-center text-gray-800">
                12
              </div>
            </div>
            <ChevronDown className="w-4 h-4 ml-2 text-gray-700" />
          </div>

          {/* Cart */}
          <div className="flex transition items-center relative cursor-pointer hover:opacity-80">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <div className="flex absolute w-5 h-5 -top-1 left-3 bg-amber-500 rounded-full items-center justify-center shadow-sm">
              <div className="font-medium text-xs text-center text-gray-800">
                01
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
