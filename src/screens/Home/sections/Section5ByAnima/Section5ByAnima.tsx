import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Section5ByAnima = (): JSX.Element => {
  // Pagination dots data
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
  ];

  return (
    <section className="relative w-full h-[785px]">
      <div className="relative w-full h-[600px] mt-[100px]">
        <div className="container mx-auto">
          <h3 className="font-normal text-2xl text-[#cc0d39] [font-family:'Aoboshi_One',Helvetica] leading-[26px] mb-14">
            Best for your categories
          </h3>

          <div className="max-w-[696px]">
            <div className="relative w-[569px] h-[177px] mb-5">
              <h2 className="font-normal text-6xl text-[#13172b] [font-family:'Aoboshi_One',Helvetica] leading-[90px] tracking-[0]">
                Exclusive Collection
                <br />
                in
              </h2>

              <div className="relative">
                <Badge className="absolute h-[65px] w-[332px] left-[71px] bg-[#feeb9d] rounded-[100px_10px_10px_100px] p-0">
                  <span className="w-[316px] mt-[-15px] ml-2 [font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-6xl leading-[60px]">
                    Our Online
                  </span>
                </Badge>

                <span className="absolute w-[167px] top-[90px] left-[403px] [font-family:'Aoboshi_One',Helvetica] text-[#13172b] text-6xl leading-[90px] font-normal tracking-[0] whitespace-nowrap">
                  {" "}
                  Store
                </span>
              </div>
            </div>

            <p className="font-normal text-xl text-[#5e626f] [font-family:'DM_Sans',Helvetica] leading-[30px] tracking-[0] mb-12">
              Discover our exclusive collection available only in our online
              store. Shop
              <br />
              now for unique and premium items that you won&#39;t find anywhere
              else.
            </p>

            <Card className="border-none shadow-none">
              <CardContent className="flex items-center p-0">
                <div className="flex items-start mr-8">
                  <span className="text-[70px] leading-[70px] text-[#13172b] [font-family:'Aoboshi_One',Helvetica] font-normal tracking-[0]">
                    $
                  </span>
                  <div className="ml-[11px]">
                    <p className="font-medium text-xl text-[#5e626f] [font-family:'DM_Sans',Helvetica] tracking-[0] leading-5">
                      Discount Price
                    </p>
                    <p className="font-normal text-[40px] text-[#13172b] [font-family:'Aoboshi_One',Helvetica] tracking-[0] leading-10">
                      140.00
                    </p>
                  </div>
                </div>

                <div className="w-[189px] h-[29px] bg-[url(/item---line-1-png-1.png)] bg-cover bg-[50%_50%] mx-8" />

                <Button className="h-[54px] w-[136px] bg-[#13172b] rounded-[50px] text-white font-medium text-base [font-family:'DM_Sans',Helvetica]">
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="absolute top-[284px] right-[72px] rotate-90 flex space-x-5">
          {paginationDots.map((dot, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-[5px] border border-solid ${
                dot.active
                  ? "bg-[#13172b] border-[#13172b]"
                  : "bg-transparent border-[#13172b]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
