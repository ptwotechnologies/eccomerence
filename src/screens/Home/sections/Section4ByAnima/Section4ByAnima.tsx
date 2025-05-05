import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const Section4ByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-white relative">
      <div className="container mx-auto flex flex-col md:flex-row gap-4">
        {/* Left section with newsletter form */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute w-full h-full top-0 left-0 opacity-40 bg-[url(/pattern-shape.png)] bg-cover bg-[50%_50%]" />

          <div className="relative z-10 p-6 md:p-14">
            <h3 className="font-['DM_Sans',Helvetica] font-normal text-[#13172b] text-xl leading-[26px] mb-4">
              Our Newsletter
            </h3>

            <div className="mb-10">
              <h2 className="font-['Aoboshi_One',Helvetica] font-normal text-[#13172b] text-2xl leading-[35px]">
                Get Weekly Update. Sign Up And Get Up To
              </h2>

              <div className="flex items-center">
                <span className="font-['Aoboshi_One',Helvetica] font-normal text-[#cc0d39] text-2xl leading-[35px] border-b border-[#cc0d39]">
                  20% Off
                </span>
                <span className="font-['Aoboshi_One',Helvetica] font-normal text-[#13172b] text-2xl leading-[35px]">
                  {" "}
                  Your First Purchase
                </span>
              </div>
            </div>

            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <div className="flex items-center rounded-[50px] border border-solid border-[#13172b] bg-white overflow-hidden">
                  <Input
                    className="flex-1 border-none h-[63px] pl-5 font-['DM_Sans',Helvetica] font-medium text-[#757575]"
                    placeholder="Write your Email Address"
                  />
                  <Button className="h-[52px] w-[141px] rounded-[50px] bg-[#13172b] font-['DM_Sans',Helvetica] font-normal text-white text-xl mx-[5px]">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right section with image */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute w-[434px] h-[380px] top-0 right-0 opacity-40 bg-[url(/pattern-shape-1.png)] bg-cover bg-[50%_50%]" />
          <div className="w-[460px] h-[342px] relative bg-[url(/image-6.png)] bg-cover bg-[50%_50%]" />
        </div>
      </div>

      {/* Decorative element */}
      <div className="w-[89px] h-[89px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-[url(/shape-4.png)] bg-cover bg-[50%_50%]" />
    </section>
  );
};
