import React from "react";
import { DivByAnima } from "./sections/DivByAnima/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FooterByAnima } from "./sections/FooterByAnima";
import { HeaderByAnima } from "./sections/HeaderByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima";
import { Section1ByAnima } from "./sections/Section1ByAnima";
import { Section2ByAnima } from "./sections/Section2ByAnima";
import { Section3ByAnima } from "./sections/Section3ByAnima/Section3ByAnima";
import { Section4ByAnima } from "./sections/Section4ByAnima";
import { Section5ByAnima } from "./sections/Section5ByAnima";
import { Section6ByAnima } from "./sections/Section6ByAnima";
import { SectionByAnima } from "./sections/SectionByAnima";
import { SectionComponentNodeByAnima } from "./sections/SectionComponentNodeByAnima";
import { SectionWrapperByAnima } from "./sections/SectionWrapperByAnima";

export const Home = (): JSX.Element => {
  // Category navigation data for mapping
  const categories = [
    { name: "WOMEN", hasIcon: true },
    { name: "SHIRTS", hasIcon: true },
    { name: "JACKETS", hasIcon: true },
    { name: "JEANS", hasIcon: true },
    { name: "BLAZER", hasIcon: true },
    { name: "MEN", hasIcon: true },
  ];

  return (
    <main className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        <HeaderByAnima />

        <section className="w-full bg-[#fffaf3]">
          {/* Category navigation bar */}
          <nav className="w-full h-[86px] bg-[#13172b] flex items-center justify-start px-6 overflow-hidden">
            <div className="flex items-center space-x-6 overflow-x-auto">
              {categories.map((category, index) => (
                <React.Fragment key={index}>
                  <button className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-4xl tracking-[0] leading-9 whitespace-nowrap">
                    {category.name}
                  </button>

                  {category.hasIcon && (
                    <img
                      className="w-[25px] h-[25px]"
                      alt="Icon"
                      src="/icon-65.svg"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </nav>

          {/* Main content sections */}
          <SectionByAnima />
          <SectionWrapperByAnima />
          <DivWrapperByAnima />
          <DivByAnima />
          <SectionComponentNodeByAnima />
          <Section1ByAnima />
          <Section2ByAnima />
          <OverlapWrapperByAnima />
          <Section3ByAnima />
          <Section4ByAnima />
          <Section5ByAnima />
          <Section6ByAnima />
        </section>

        <FooterByAnima />
      </div>
    </main>
  );
};
