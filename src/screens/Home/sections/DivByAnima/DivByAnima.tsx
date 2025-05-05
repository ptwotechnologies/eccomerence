import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

// Product data for mapping
const products = [
  {
    id: 1,
    image: "/products.png",
    discount: "10% OFF",
    title: "Lightweight linen summer dress with belt",
    originalPrice: 80.0,
    discountedPrice: 40.0,
    rating: 5,
    reviews: 80,
  },
  {
    id: 2,
    image: "/products-1.png",
    discount: "40% OFF",
    title: "Cozy knit sweater with pockets",
    originalPrice: 67.0,
    discountedPrice: 23.0,
    rating: 5,
    reviews: 80,
  },
  {
    id: 3,
    image: "/products-2.png",
    discount: "10% OFF",
    title: "Athletic leggings with mesh panels",
    originalPrice: 80.0,
    discountedPrice: 40.0,
    rating: 5,
    reviews: 80,
  },
  {
    id: 4,
    image: "/products-3.png",
    discount: "40% OFF",
    title: "Classic leather biker jacket with zippers",
    originalPrice: 67.0,
    discountedPrice: 23.0,
    rating: 5,
    reviews: 80,
  },
  {
    id: 5,
    image: "/products-4.png",
    discount: "80% OFF",
    title: "Floral print sundress with adjustable straps",
    originalPrice: 80.0,
    discountedPrice: 40.0,
    rating: 5,
    reviews: 80,
  },
  {
    id: 6,
    image: "/products-5.png",
    discount: "40% OFF",
    title: "Relaxed fit denim jeans with distressing",
    originalPrice: 67.0,
    discountedPrice: 23.0,
    rating: 5,
    reviews: 80,
  },
  {
    id: 7,
    image: "/products-6.png",
    discount: "40% OFF",
    title: "Cargo shorts with pockets and drawstring",
    originalPrice: 80.0,
    discountedPrice: 40.0,
    rating: 5,
    reviews: 80,
  },
  {
    id: 8,
    image: "/products-7.png",
    discount: "80% OFF",
    title: "Elegant silk dress with sequins",
    originalPrice: 67.0,
    discountedPrice: 23.0,
    rating: 5,
    reviews: 80,
  },
];

export const DivByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          <div className="flex flex-col">
            <div className="flex items-center mb-1">
              <img className="w-4 h-4 mr-2" alt="Icon" src="/icon-11.svg" />
              <span className="font-medium text-[#cc0d39] text-base [font-family:'DM_Sans',Helvetica]">
                Feature Products
              </span>
            </div>
            <h2 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-4xl leading-[54px]">
              Our Features Collection
            </h2>
          </div>

          <Tabs defaultValue="best-sellers" className="mt-4 md:mt-0">
            <TabsList className="h-[53px] w-full md:w-[428px] rounded-[50px] border border-solid border-[#aeb0b6] bg-transparent p-[7px]">
              <TabsTrigger
                value="best-sellers"
                className="h-10 rounded-[30px] data-[state=active]:bg-[#13172b] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#13172b] [font-family:'DM_Sans',Helvetica] font-normal text-base"
              >
                Best Sellers
              </TabsTrigger>
              <TabsTrigger
                value="new-products"
                className="h-10 rounded-[30px] data-[state=active]:bg-[#13172b] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#13172b] [font-family:'DM_Sans',Helvetica] font-normal text-base"
              >
                New Products
              </TabsTrigger>
              <TabsTrigger
                value="sale-products"
                className="h-10 rounded-[30px] data-[state=active]:bg-[#13172b] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#13172b] [font-family:'DM_Sans',Helvetica] font-normal text-base"
              >
                Sale Products
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="border-none shadow-none">
              <CardContent className="p-0">
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                  <div
                    className="w-full h-full rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    <Badge className="absolute top-[26px] left-0 h-[33px] w-[81px] rounded-[0px_50px_50px_0px] bg-[#13172b] text-white [font-family:'DM_Sans',Helvetica] font-bold text-sm flex items-center justify-center">
                      {product.discount}
                    </Badge>
                  </div>

                  <div className="absolute top-[26px] right-[-40px] flex flex-col gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-10 h-10 rounded-[20px] border border-solid border-[#13172b] bg-white"
                    >
                      <HeartIcon className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-10 h-10 rounded-[20px] border border-solid border-[#13172b] bg-white"
                    >
                      <ShoppingCartIcon className="w-4 h-3.5" />
                    </Button>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        className="w-3.5 h-[13px] mr-[2px]"
                        alt="Star rating"
                        src="/item.svg"
                      />
                    ))}
                    <span className="ml-2 [font-family:'DM_Sans',Helvetica] font-normal text-[#5e626f] text-sm">
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
                      <span className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#5e626f] text-sm leading-[26px]">
                        $
                        <span className="line-through">
                          {product.originalPrice.toFixed(2)}
                        </span>
                      </span>
                      <span className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-sm leading-[26px]">
                        ${product.discountedPrice.toFixed(2)}
                      </span>
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
