import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Section1ByAnima = (): JSX.Element => {
  // Define the workflow steps data for mapping
  const workflowSteps = [
    {
      id: "01",
      icon: "/icon-44.svg",
      title: "Browsing & Choosing",
      description:
        "This is where customers visit your online store, browse your products.",
    },
    {
      id: "02",
      icon: "/icon-42.svg",
      title: "Checkout & Payment",
      description:
        "Once they have picked their items, customers proceed to checkout.",
    },
    {
      id: "03",
      icon: "/icon-43.svg",
      title: "Order Fulfillment",
      description:
        "After the order is placed, it's sent to your fulfillment team.",
    },
    {
      id: "04",
      icon: "/icon-40.svg",
      title: "Delivery to Customer",
      description: "The packed order is then sent off with a shipping carrier",
    },
  ];

  return (
    <section className="w-full py-16 flex flex-col items-center">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img className="w-4 h-4" alt="Icon" src="/icon-11.svg" />
          <span className="font-medium text-[#cc0d39] text-base [font-family:'DM_Sans',Helvetica]">
            Work Processing
          </span>
          <img className="w-4 h-4" alt="Icon" src="/icon-11.svg" />
        </div>
        <h2 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-4xl tracking-[0] leading-[54px]">
          How It Work Processing
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {workflowSteps.map((step) => (
          <Card
            key={step.id}
            className="relative rounded-[10px] border-none shadow-sm"
          >
            <CardContent className="p-6 pt-10">
              <img
                className="w-10 h-10 mb-6"
                alt={`${step.title} icon`}
                src={step.icon}
              />
              <div className="absolute w-10 h-14 top-0.5 right-6 bg-[#feeb9d] rounded-[0px_0px_100px_100px]">
                <div className="w-[21px] h-6 top-[15px] left-2.5 [font-family:'Aoboshi_One',Helvetica] font-normal text-base text-center leading-[26px] whitespace-nowrap absolute text-[#13172b] tracking-[0]">
                  {step.id}
                </div>
              </div>
              <h3 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-lg tracking-[0] leading-[18px] mb-4">
                {step.title}
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e626f] text-sm tracking-[0] leading-[26px]">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
