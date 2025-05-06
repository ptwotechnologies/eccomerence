'use client';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import React, { useRef } from 'react';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '../../../../components/ui/carousel';

export const SectionWrapperByAnima = (): JSX.Element => {
  // State for carousel API
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Track the current slide and total count
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Category data for mapping
  const categories = [
    { name: 'Man Shirts', image: '/category-image.png' },
    { name: 'Denim Jeans', image: '/category-image-1.png' },
    { name: 'Casual Suit', image: '/category-image-2.png' },
    { name: 'Summer Dress', image: '/category-image-3.png' },
    { name: 'Sweaters', image: '/category-image-4.png' },
    { name: 'Jackets', image: '/category-image-5.png' },
  ];

  return (
    <section className="w-full py-16 px-4 relative">
      <div className="container mx-auto">
        <div className="flex items-center mb-2">
          <img
            className="w-4 h-4 mr-3"
            alt="Category icon"
            src="/icon-11.svg"
          />
          <span className="font-medium text-[#cc0d39] text-base [font-family:'DM_Sans',Helvetica]">
            Categories
          </span>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-4xl leading-[54px]">
            Browse Top Category
          </h2>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-3xl border border-solid border-[#5e626f] relative"
              onClick={() => api?.scrollPrev()}
              disabled={current === 0}
            >
              <ChevronLeftIcon className="h-5 w-5" />
              <div className="absolute w-2.5 h-2.5 bottom-2 left-2 bg-[#13172b] rounded-[5px]" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-3xl border border-solid border-[#5e626f] relative"
              onClick={() => api?.scrollNext()}
              disabled={current === count - 1}
            >
              <ChevronRightIcon className="h-5 w-5" />
              <div className="absolute w-2.5 h-2.5 top-2 right-2 bg-[#13172b] rounded-[5px]" />
            </Button>
          </div>
        </div>

        <Carousel
          className="w-full"
          opts={{
            align: 'start',
            loop: false,
          }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-4">
            {categories.map((category, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/3 lg:basis-1/5"
              >
                <Card className="border-0 relative">
                  <CardContent className="p-0 relative">
                    <div
                      className="w-full h-[216px] rounded-[20px] border-2 border-solid border-[#13172b] bg-cover bg-center"
                      style={{ backgroundImage: `url(${category.image})` }}
                    />
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <Button
                        variant="outline"
                        className="h-[52px] bg-white rounded-[100px] border border-solid border-[#aeb0b6] [font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-base"
                      >
                        {category.name}
                      </Button>
                    </div>
                    {index < categories.length - 1 && (
                      <img
                        className="absolute w-1.5 h-[190px] top-[18px] right-[-12px] z-10"
                        alt="Divider"
                        src={`/image${index === 0 ? '' : `-${index}`}.png`}
                      />
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
