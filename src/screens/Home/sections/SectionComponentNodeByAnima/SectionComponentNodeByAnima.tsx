import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Product data for mapping
const products = [
  {
    id: 1,
    image: "/products-8.png",
    discount: "80% OFF",
    title: "Cozy knit sweater with pockets",
    originalPrice: 67.0,
    price: 23.0,
    ratings: 5,
    reviews: 50,
  },
  {
    id: 2,
    image: "/products-9.png",
    discount: "80% OFF",
    title: "Elegant silk dress with sequins",
    originalPrice: 67.0,
    price: 23.0,
    ratings: 5,
    reviews: 80,
  },
  {
    id: 3,
    image: "/products-10.png",
    discount: "40% OFF",
    title: "Cargo shorts with pockets and drawstring",
    originalPrice: 67.0,
    price: 23.0,
    ratings: 5,
    reviews: 47,
  },
  {
    id: 4,
    image: "/products-11.png",
    discount: "10% OFF",
    title: "Athletic leggings with mesh panels",
    originalPrice: 80.0,
    price: 40.0,
    ratings: 5,
    reviews: 47,
  },
];

export const SectionComponentNodeByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center mb-1">
              <img className="w-4 h-4 mr-2" alt="Icon" src="/icon-11.svg" />
              <span className="font-medium text-[#cc0d39] text-base">
                Feature Products
              </span>
            </div>
            <h2 className="font-normal text-[#13172b] text-4xl leading-[54px] [font-family:'Aoboshi_One',Helvetica]">
              Our Features Collection
            </h2>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-3xl border border-solid border-[#5e626f]"
            >
              <ChevronLeftIcon className="h-5 w-5" />
              <div className="absolute w-2.5 h-2.5 bottom-[3px] right-[3px] bg-[#13172b] rounded-[5px]" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-3xl border border-solid border-[#5e626f]"
            >
              <ChevronRightIcon className="h-5 w-5" />
              <div className="absolute w-2.5 h-2.5 top-[3px] right-[3px] bg-[#13172b] rounded-[5px]" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="border-none">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="relative w-full h-[395px] rounded-2xl overflow-hidden">
                    <div
                      className="w-full h-full rounded-2xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      <Badge className="absolute top-[26px] left-0 h-[33px] px-4 py-1.5 bg-[#13172b] text-white font-bold rounded-[0px_50px_50px_0px]">
                        {product.discount}
                      </Badge>
                    </div>
                  </div>

                  <div className="absolute top-[26px] right-[-40px] flex flex-col gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-10 h-10 bg-white rounded-[20px] border border-solid border-[#13172b]"
                    >
                      <HeartIcon className="h-3.5 w-3.5" />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      className="w-10 h-10 bg-white rounded-[20px] border border-solid border-[#13172b]"
                    >
                      <ShoppingCartIcon className="h-3.5 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          className="w-3.5 h-[13px] mr-[2px]"
                          alt="Star rating"
                          src="/item.svg"
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-[#5e626f] text-sm">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="mt-2">
                    <h3 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-base leading-[27px]">
                      {product.title}
                    </h3>
                  </div>

                  <div className="flex justify-end mt-2">
                    <div className="flex flex-col items-end">
                      <div className="text-[#5e626f] text-sm leading-[26px] [font-family:'Aoboshi_One',Helvetica] line-through">
                        ${product.originalPrice.toFixed(2)}
                      </div>
                      <div className="text-[#13172b] text-sm leading-[26px] [font-family:'Aoboshi_One',Helvetica]">
                        ${product.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
