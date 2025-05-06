'use client';
import React, { useState } from 'react';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../../../components/ui/carousel';

export const Section5ByAnima = () => {
  // Hero carousel slides data
  const heroSlides = [
    {
      title: 'Exclusive Collection',
      highlight: 'Our Online',
      suffix: 'Store',
      description:
        "Discover our exclusive collection available only in our online store. Shop now for unique and premium items that you won't find anywhere else.",
      price: '140.00',
    },
    {
      title: 'Seasonal Favorites',
      highlight: 'New Arrivals',
      suffix: 'Today',
      description:
        'Explore our hand-picked seasonal favorites that are trending right now. Limited stock available, refresh your style with our latest collections.',
      price: '165.00',
    },
    {
      title: 'Premium Quality',
      highlight: 'Best Sellers',
      suffix: 'Collection',
      description:
        'Shop our top-rated items loved by customers worldwide. Premium materials and craftsmanship guaranteed with every purchase.',
      price: '189.99',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="relative w-full bg-[#fffaf3] py-16 md:py-24">
      <div className="container mx-auto px-4 relative">
        {/* Main content */}
        <div className="max-w-3xl">
          <h3 className="font-medium text-xl text-[#cc0d39] mb-6">
            Best for your categories
          </h3>

          <div className="space-y-6">
            {heroSlides.map((slide, index: number) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === activeSlide
                    ? 'block opacity-100'
                    : 'hidden opacity-0'
                }`}
              >
                <div className="space-y-4">
                  <h2 className="font-bold text-5xl md:text-6xl text-[#13172b] leading-tight">
                    {slide.title}
                    <br />
                    in{' '}
                    <span className="relative inline-flex items-center">
                      <span className="relative z-10 bg-[#feeb9d] px-6 py-2 rounded-[100px_10px_10px_100px] font-bold">
                        {slide.highlight}
                      </span>
                    </span>{' '}
                    {slide.suffix}
                  </h2>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mt-6 max-w-xl">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center mt-12 gap-6">
                  <div className="flex items-center">
                    <div className="flex items-start">
                      <span className="text-5xl md:text-6xl text-[#13172b] font-bold">
                        $
                      </span>
                      <div className="ml-2">
                        <p className="font-medium text-sm text-gray-600">
                          Discount Price
                        </p>
                        <p className="font-bold text-3xl md:text-4xl text-[#13172b]">
                          {slide.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block relative w-40 h-px">
                    <svg
                      className="absolute top-1/2 transform -translate-y-1/2 w-full"
                      viewBox="0 0 200 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4C1 4 40 1 100 4C160 7 199 4 199 4"
                        stroke="#D1D5DB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="1 6"
                      />
                    </svg>
                  </div>

                  <Button className="h-12 px-8 bg-[#13172b] hover:bg-[#232742] rounded-full text-white font-medium text-base transition-colors">
                    Shop Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot navigation on right side */}
        <div className="flex absolute top-1/2 right-8 transform -translate-y-1/2 flex-col gap-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? 'bg-[#13172b] w-4 h-4'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
