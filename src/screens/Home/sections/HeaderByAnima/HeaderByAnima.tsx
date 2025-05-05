import React from "react";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const HeaderByAnima = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { name: "Home", hasDropdown: true },
    { name: "Shop", hasDropdown: true },
    { name: "Blog", hasDropdown: true },
    { name: "Pages", hasDropdown: true },
    { name: "Contact", hasDropdown: false },
  ];

  return (
    <header className="w-full bg-transparent">
      {/* Top navigation bar */}
      <div className="w-full h-[74px] bg-white flex items-center justify-between px-3">
        {/* Logo */}
        <div className="w-[155px] h-11 bg-[url(/logo.png)] bg-cover bg-[50%_50%]" />

        {/* SearchIcon bar */}
        <div className="w-[690px] h-[50px] rounded-[10px] border border-solid border-[#aeb0b6] flex">
          {/* Categories dropdown */}
          <div className="h-full flex items-center pl-[31px] pr-4">
            <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#13172b] text-lg leading-10">
              All Categories
            </div>
            <img className="w-[11px] h-10 ml-3" alt="Icon" src="/icon-1.svg" />
          </div>

          {/* SearchIcon input */}
          <div className="flex-1 h-full flex items-center border-l border-[#aeb0b6]">
            <Input
              className="border-none h-full pl-[31px] [font-family:'DM_Sans',Helvetica] font-normal text-[#5e626f] text-lg"
              placeholder="Enter SearchIcon Products"
            />
            <div className="pr-4">
              <img
                className="w-4 h-4"
                alt="SearchIcon button"
                src="/button.svg"
              />
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e626f] text-base text-right leading-4">
            Support
          </div>
          <div className="[font-family:'Aoboshi_One',Helvetica] font-normal text-lg text-right leading-[18px] text-[#13172b]">
            894
          </div>
          <img className="w-10 h-10" alt="Icon" src="/icon.svg" />
        </div>
      </div>

      {/* Bottom navigation bar */}
      <div className="w-full h-[77px] bg-[#feeb9d] flex items-center px-3">
        {/* Products category dropdown */}
        <div className="h-[46px] bg-white rounded flex items-center px-4">
          <img className="w-4 h-4" alt="Icon" src="/icon-61.svg" />
          <div className="ml-3 [font-family:'DM_Sans',Helvetica] font-semibold text-[#13172b] text-base leading-[18px]">
            Products Category
          </div>
          <img className="w-2.5 h-4 ml-4" alt="Icon" src="/icon-13.svg" />
        </div>

        <Separator orientation="vertical" className="h-6 mx-4 bg-[#5e626f]" />

        {/* Navigation links */}
        <nav className="flex h-full">
          {navLinks.map((link, index) => (
            <div key={index} className="h-full flex items-center px-4">
              <div className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-base leading-4">
                {link.name}
              </div>
              {link.hasDropdown && (
                <img className="w-2.5 h-4 ml-2" alt="Icon" src="/icon-5.svg" />
              )}
            </div>
          ))}
        </nav>

        <Separator
          orientation="vertical"
          className="h-6 ml-auto bg-[#5e626f]"
        />

        {/* Right section with deal and cart */}
        <div className="flex items-center gap-4 ml-4">
          {/* Deal section */}
          <div className="flex items-center">
            <img className="w-[18px] h-[21px]" alt="Icon" src="/icon-64.svg" />
            <div className="ml-2 [font-family:'Aoboshi_One',Helvetica] font-normal text-[#cc0d39] text-xl leading-[normal]">
              Deal
            </div>
            <img className="w-4 h-[26px] ml-4" alt="Icon" src="/icon-62.svg" />
          </div>

          {/* Wishlist */}
          <div className="flex items-center relative">
            <img className="w-6 h-6" alt="Icon" src="/icon-60.svg" />
            <div className="absolute w-5 h-5 -top-1 left-3.5 bg-[#f7941f] rounded-[10px] flex items-center justify-center">
              <div className="[font-family:'DM_Sans',Helvetica] font-medium text-xs text-center text-[#13172b]">
                12
              </div>
            </div>
            <img className="w-4 h-[26px] ml-4" alt="Icon" src="/icon-62.svg" />
          </div>

          {/* Cart */}
          <div className="flex items-center relative">
            <img className="w-[21px] h-6" alt="Icon" src="/icon-66.svg" />
            <div className="absolute w-5 h-5 -top-1 left-[11px] bg-[#f7941f] rounded-[10px] flex items-center justify-center">
              <div className="[font-family:'DM_Sans',Helvetica] font-medium text-xs text-center text-[#13172b]">
                01
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
