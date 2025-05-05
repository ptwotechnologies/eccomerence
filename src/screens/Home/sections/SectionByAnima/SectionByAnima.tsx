import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const SectionByAnima = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      description: "You get your items delivered without any extra cost.",
      icon: "/icon-88.svg",
    },
    {
      id: 2,
      title: "Great Support 24/7",
      description: "Our customer support team is available around the clock",
      icon: "/icon-84.svg",
      iconClass: "w-4 h-6 top-[18px] left-[22px]",
    },
    {
      id: 3,
      title: "Return Available",
      description:
        "Making it easy to return any items if you're not satisfied.",
      icon: "/icon-87.svg",
    },
    {
      id: 4,
      title: "Secure Payment",
      description: "Shop with confidence knowing that our secure payment",
      icon: "/icon-2.svg",
      iconClass: "w-6 h-6 top-[18px] left-[18px]",
    },
  ];

  return (
    <section className="w-full max-w-[1416px] mx-auto my-8 p-8 bg-white rounded-[20px] border border-dashed border-[#aeb0b6]">
      <div className="flex flex-wrap justify-between">
        {features.map((feature, index) => (
          <React.Fragment key={feature.id}>
            <div className="flex items-start space-x-4 w-full sm:w-auto max-w-[285px]">
              <div className="w-[60px] h-[60px] flex-shrink-0 bg-white rounded-[30px] border border-solid border-[#aeb0b6] flex items-center justify-center">
                <img
                  className={feature.iconClass || "w-[30px] h-6"}
                  alt={`${feature.title} icon`}
                  src={feature.icon}
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-normal text-lg text-[#13172b] leading-[18px] [font-family:'Aoboshi_One',Helvetica]">
                  {feature.title}
                </h3>
                <p className="mt-[13px] text-sm text-[#5e626f] leading-[26px] [font-family:'DM_Sans',Helvetica]">
                  {feature.description}
                </p>
              </div>
            </div>

            {index < features.length - 1 && (
              <Separator
                orientation="vertical"
                className="h-[66px] mx-4 hidden sm:block"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
