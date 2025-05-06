import React from 'react';
import { DivByAnima } from './sections/DivByAnima/DivByAnima';
import { DivWrapperByAnima } from './sections/DivWrapperByAnima';
import { FooterByAnima } from './sections/FooterByAnima';
import { HeaderByAnima } from './sections/HeaderByAnima';
import { OverlapWrapperByAnima } from './sections/OverlapWrapperByAnima';
import { Section1ByAnima } from './sections/Section1ByAnima';
import { Section2ByAnima } from './sections/Section2ByAnima';
import { Section3ByAnima } from './sections/Section3ByAnima/Section3ByAnima';
import { Section4ByAnima } from './sections/Section4ByAnima';
import { Section5ByAnima } from './sections/Section5ByAnima';
import { Section6ByAnima } from './sections/Section6ByAnima';
import { SectionByAnima } from './sections/SectionByAnima';
import { SectionComponentNodeByAnima } from './sections/SectionComponentNodeByAnima';
import { SectionWrapperByAnima } from './sections/SectionWrapperByAnima';
import CategoryMarquee from '@/components/ui/CategoryMarquee';

export const Home = () => {
  // Category navigation data for mapping
  const categories = [
    { name: 'WOMEN', hasIcon: true },
    { name: 'SHIRTS', hasIcon: true },
    { name: 'JACKETS', hasIcon: true },
    { name: 'JEANS', hasIcon: true },
    { name: 'BLAZER', hasIcon: true },
    { name: 'MEN', hasIcon: true },
  ];
  return (
    <main className="bg-white w-full min-h-screen">
      <div className="w-full relative">
        <HeaderByAnima />
        <Section5ByAnima />
        <section className="w-full bg-[#fffaf3]">
          {/* Replace the navigation with the marquee component */}
          <CategoryMarquee categories={categories} />

          {/* Main content sections */}
          <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8">
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
            <Section6ByAnima />
          </div>
        </section>
        <FooterByAnima />
      </div>
    </main>
  );
};
