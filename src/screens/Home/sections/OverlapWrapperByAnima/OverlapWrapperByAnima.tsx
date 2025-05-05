'use client';

import React from 'react';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';

export const OverlapWrapperByAnima = (): JSX.Element => {
  // Timer data for countdown
  const timerItems = [
    { value: 0, label: 'day' },
    { value: 0, label: 'hour' },
    { value: 0, label: 'minute' },
    { value: 0, label: 'second' },
  ];

  return (
    <Card
      className="relative w-full h-[625px] rounded-[20px] border-2 border-solid border-[#13172b] bg-white"
      style={{
        background:
          'url(/section.png) 50% 50% / cover, linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)',
      }}
    >
      <CardContent className="relative p-0 h-full">
        <div className="relative w-full h-[533px] pt-[90px] px-[97px]">
          <div className="flex items-center">
            <img className="w-[25px] h-[21px]" alt="Icon" src="/icon-47.svg" />
            <span className="ml-[10px] [font-family:'DM_Sans',Helvetica] font-bold text-[#5e626f] text-xl">
              Deal of the Week
            </span>
          </div>
          <div className="relative w-full h-[526px] mt-[7px]">
            <div className="w-[1222px] h-[108px] mt-[61px]">
              <h2 className="w-[480px] [font-family:'Aoboshi_One',Helvetica] font-normal text-4xl leading-[54px]">
                <span className="text-[#13172b]">
                  Hurry Up! Offer ends in. Get
                  <br />
                </span>
                <span className="text-[#cc0d39]">UP TO 80% OFF</span>
              </h2>
            </div>
            <div className="absolute w-[706px] h-[526px] top-0 right-0 bg-[url(/image-5.png)] bg-cover bg-[50%_50%]" />
          </div>
          <div className="flex gap-6 mt-[170px]">
            {timerItems.map((item, index) => (
              <div
                key={index}
                className="w-24 h-24 rounded-[48px] border border-solid border-[#aeb0b6] flex flex-col items-center justify-center"
              >
                <div className="[font-family:'Aoboshi_One',Helvetica] font-normal text-4xl text-center leading-9 text-[#13172b]">
                  {item.value}
                </div>
                <div className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#5e626f] text-base text-center leading-[26px]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-[60px] w-[140px] h-12 bg-[#13172b] rounded-[50px] hover:bg-[#13172b]/90">
            Shop Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
