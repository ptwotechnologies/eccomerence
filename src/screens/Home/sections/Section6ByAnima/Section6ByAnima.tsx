import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Section6ByAnima = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      text: "This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float.",
      author: "Rhodes Jhon",
      image: "/author-image.png",
    },
    {
      id: 2,
      text: "This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float.",
      author: "Rhodes Jhon",
      image: "/author-image-1.png",
    },
    {
      id: 3,
      text: "",
      author: "",
      image: "/author-image-2.png",
    },
  ];

  return (
    <section className="relative w-full h-[613px] bg-white overflow-hidden">
      <div className="w-[90px] h-[26px]" />

      {/* Bottom wave decoration */}
      <div className="absolute w-full h-[58px] bottom-0 left-0">
        <div className="relative h-[58px] overflow-hidden">
          <img
            className="w-[1909px] h-[77px] relative -top-[9px] -left-[234px]"
            alt="Bottom wave decoration"
            src="/tl-svgbottom-svg.svg"
          />
        </div>
      </div>

      {/* Section heading */}
      <div className="absolute w-[456px] h-[108px] top-[190px] left-3">
        <h2 className="w-[374px] font-['Aoboshi_One',Helvetica] font-normal text-[#13172b] text-4xl leading-[54px]">
          What Our Clients Say
          <br />
          about Us
        </h2>
      </div>

      {/* Navigation buttons */}
      <div className="absolute w-12 h-12 top-[348px] left-3 rounded-3xl border border-solid border-[#5e626f] flex items-center justify-center">
        <div className="absolute w-2.5 h-2.5 bottom-[3px] left-[3px] bg-[#13172b] rounded-[5px]" />
        <ChevronLeftIcon className="w-5 h-5 text-[#13172b]" />
      </div>

      <div className="absolute w-12 h-12 top-[348px] left-20 rounded-3xl border border-solid border-[#5e626f] flex items-center justify-center">
        <div className="absolute w-2.5 h-2.5 top-[3px] right-[3px] bg-[#13172b] rounded-[5px]" />
        <ChevronRightIcon className="w-5 h-5 text-[#13172b]" />
      </div>

      {/* Testimonials container */}
      <div className="absolute w-[1404px] h-[333px] top-[190px] left-[492px] overflow-hidden flex gap-[30px]">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            className="w-[525px] h-[293px] rounded-[20px] border-2 border-solid border-[#13172b] flex-shrink-0"
          >
            <CardContent className="p-0">
              {testimonial.text && (
                <div className="w-[438px] mt-[35px] mx-[42px] font-['DM_Sans',Helvetica] font-normal text-[#5e626f] text-xl leading-[26px]">
                  {testimonial.text.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              )}

              <div
                className="absolute w-20 h-20 top-[171px] left-[42px] rounded-[40px] bg-cover bg-center"
                style={{ backgroundImage: `url(${testimonial.image})` }}
              />

              {testimonial.author && (
                <div className="absolute top-[188px] left-[142px] font-['Aoboshi_One',Helvetica] font-normal text-[#13172b] text-xl leading-5 whitespace-nowrap">
                  {testimonial.author}
                </div>
              )}

              <div className="absolute w-[121px] h-4 top-[216px] left-[142px] flex">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className="w-3.5 h-[13px] mt-0.5 ml-[18px] first:ml-0"
                    alt="Star rating"
                    src="/item.svg"
                  />
                ))}
              </div>

              {index < 2 && (
                <img
                  className="absolute w-[50px] h-[50px] top-[182px] left-[433px]"
                  alt="Quote icon"
                  src="/icon-55.svg"
                />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
