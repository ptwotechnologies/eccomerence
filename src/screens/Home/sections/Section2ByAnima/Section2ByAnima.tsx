import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

export const Section2ByAnima = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      image: "/products-12.png",
      title: "Women Red & White Striped Crepe Top",
      originalPrice: "90.00",
      salePrice: "10.00",
      rating: 5,
      reviews: 80,
    },
    {
      id: 2,
      image: "/products-13.png",
      title: "Cozy knit sweater with pockets",
      originalPrice: "67.00",
      salePrice: "40.00",
      rating: 5,
      reviews: 80,
    },
    {
      id: 3,
      image: "/products-14.png",
      title: "Striped cotton t-shirt with crew neck",
      originalPrice: "59.00",
      salePrice: "47.00",
      rating: 5,
      reviews: 80,
    },
    {
      id: 4,
      image: "/products-15.png",
      title: "Cashmere v-neck sweater with ribbed cuffs",
      originalPrice: "67.00",
      salePrice: "20.00",
      rating: 5,
      reviews: 80,
    },
  ];

  return (
    <section className="relative w-full py-12 mt-16">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center mb-1">
              <img className="w-4 h-4 mr-2" alt="Icon" src="/icon-11.svg" />
              <span className="font-medium text-[#cc0d39] [font-family:'DM_Sans',Helvetica] text-base">
                Trending Products
              </span>
            </div>
            <h2 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-4xl leading-[54px]">
              What&#39;s Trending Now
            </h2>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-3xl border border-solid border-[#5e626f]"
            >
              <ChevronLeftIcon className="w-5 h-5 text-[#13172b]" />
              <div className="absolute w-2.5 h-2.5 top-[35px] left-[3px] bg-[#13172b] rounded-[5px]" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-3xl border border-solid border-[#5e626f]"
            >
              <ChevronRightIcon className="w-5 h-5 text-[#13172b]" />
              <div className="absolute w-2.5 h-2.5 top-[3px] left-[35px] bg-[#13172b] rounded-[5px]" />
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/4"
                >
                  <Card className="border border-dashed border-[#aeb0b6] rounded-[20px] overflow-hidden">
                    <div className="relative h-[246px] mb-4">
                      <div
                        className="absolute w-full h-full rounded-[20px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${product.image})` }}
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            className="w-3.5 h-[13px] mr-1"
                            alt="Star rating"
                            src="/item.svg"
                          />
                        ))}
                        <span className="ml-1 [font-family:'DM_Sans',Helvetica] font-normal text-[#5e626f] text-sm">
                          ({product.reviews})
                        </span>
                      </div>

                      <h3 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-base leading-[27px] h-[54px] mb-2">
                        {product.title}
                      </h3>

                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#5e626f] text-base line-through">
                            ${product.originalPrice}
                          </span>
                          <span className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-base">
                            ${product.salePrice}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
