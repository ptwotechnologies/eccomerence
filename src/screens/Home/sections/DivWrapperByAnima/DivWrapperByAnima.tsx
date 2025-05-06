'use client';

import React from 'react';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';

export const DivWrapperByAnima = (): JSX.Element => {
  // Data for promotional cards
  const promoCards = [
    {
      id: 1,
      discount: '50%',
      bgColor: 'bg-[#fff9f8]',
      shapeUrl: '/shape.png',
      backgroundUrl: '/shape-1.png',
    },
    {
      id: 2,
      discount: '70%',
      bgColor: 'bg-[#fefff8]',
      shapeUrl: '/shape-2.png',
      backgroundUrl: '/shape-3.png',
    },
  ];

  return (
    <section className="w-full py-16 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row gap-8 px-6 lg:px-8">
        {promoCards.map((card) => (
          <Card
            key={card.id}
            className={`w-full h-[372px] ${card.bgColor} rounded-[20px] overflow-hidden border-2 border-solid border-[#13172b] shadow-md hover:shadow-lg transition-shadow duration-300`}
          >
            <CardContent className="p-0 h-full relative">
              <div className="relative w-full h-full pl-[52px]">
                <div
                  className="w-[73px] h-[73px] absolute top-[45px] left-[313px] bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${card.shapeUrl})` }}
                />
                <div
                  className="w-[443px] h-[377px] absolute top-0 right-0 bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${card.backgroundUrl})` }}
                />
                <div className="absolute w-[270px] h-[270px] top-12 left-12">
                  <div className="absolute w-[122px] h-[87px] top-[-5px] left-0">
                    <div className="absolute w-[65px] top-0 left-0 [font-family:'DM_Sans',Helvetica] font-medium text-[#5e626f] text-[23px] tracking-[0] leading-[23px]">
                      UP TO
                    </div>
                    <div className="w-[122px] absolute top-[60px] left-0 [font-family:'DM_Sans',Helvetica] font-medium text-[#13172b] text-6xl tracking-[0] leading-[60px] whitespace-nowrap">
                      {card.discount}
                    </div>
                  </div>
                  <div className="absolute w-[270px] h-[72px] top-[113px] left-0">
                    <div className="absolute w-[268px] -top-px left-0 [font-family:'Aoboshi_One',Helvetica] font-normal text-[#5e626f] text-2xl tracking-[0] leading-9">
                      Exclusive Kids &amp; Adults
                      <br />
                      Summer Outfits
                    </div>
                  </div>
                  <Button className="absolute w-[133px] h-[50px] top-[220px] left-0 bg-[#13172b] rounded-[50px] hover:bg-[#13172b]/90 transition-colors duration-300">
                    <span className="font-medium text-white text-lg">
                      Shop Now
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
