import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";

export const FooterByAnima = (): JSX.Element => {
  // Customer services links data
  const customerServices = [
    "Collections & Delivery",
    "Returns & Refunds",
    "Terms & Conditions",
    "Delivery Return",
    "Store Locations",
  ];

  // Quick links data
  const quickLinks = [
    "Privacy Policy",
    "Terms Of Use",
    "FAQ",
    "Contact",
    "Login / Register",
  ];

  // Recent posts data
  const recentPosts = [
    {
      image: "/post-thumb.png",
      title: "Tips on Finding Affordable Fashion Gems Online",
      date: "July 11, 2023",
    },
    {
      image: "/post-thumb-1.png",
      title: "Mastering the Art of Fashion E-commerce Marketing",
      date: "JUly 11, 2024",
    },
    {
      image: "/post-thumb-2.png",
      title: "Must-Have Trends You Can Shop Online Now",
      date: "July 11, 2024",
    },
  ];

  return (
    <footer className="relative w-full bg-[#f9f3f0] py-14">
      {/* Top wave decoration */}
      <img
        className="w-full h-14 absolute top-0 left-0"
        alt="Wave decoration"
        src="/svg.svg"
      />

      {/* Decorative shape */}
      <div className="w-[75px] h-[75px] absolute top-[434px] left-[418px] rotate-[47deg] bg-[url(/shape-5.png)] bg-cover bg-[50%_50%]" />

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand column */}
        <div className="flex flex-col space-y-6">
          {/* Logo */}
          <div className="w-[155px] h-11 bg-[url(/brand-logo.png)] bg-cover bg-[50%_50%]" />

          {/* Brand description */}
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e626f] text-lg leading-[26px]">
            Pesco is an exciting International brand
            <br />
            we provide high quality cloths
          </p>

          {/* Contact info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <MailIcon className="w-[18px] h-[18px] text-[#5e626f]" />
              <span className="ml-7 [font-family:'DM_Sans',Helvetica] font-normal text-[#5e626f] text-lg leading-[26px]">
                info@mydomain.com
              </span>
            </div>

            <div className="flex items-center">
              <PhoneIcon className="w-[18px] h-[18px] text-[#5e626f]" />
              <span className="ml-7 [font-family:'DM_Sans',Helvetica] font-normal text-[#5e626f] text-lg leading-[26px]">
                info@mydomain.com
              </span>
            </div>
          </div>

          {/* Social media */}
          <div className="pt-4 border-t [border-top-style:dashed] border-[#aeb0b6]">
            <div className="flex items-center">
              <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#13172b] text-xl leading-[26px]">
                Find Us:
              </span>
              <div className="flex space-x-4 ml-4">
                <FacebookIcon className="w-[13px] h-[13px] text-[#13172b]" />
                <TwitterIcon className="w-[18px] h-[18px] text-[#13172b]" />
                <InstagramIcon className="w-[18px] h-[18px] text-[#13172b]" />
                <LinkedinIcon className="w-5 h-5 text-[#13172b]" />
              </div>
            </div>
          </div>
        </div>

        {/* Customer Services column */}
        <div className="flex flex-col space-y-6">
          <h3 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-2xl leading-[27px]">
            Customer Services
          </h3>

          <ul className="space-y-5">
            {customerServices.map((service, index) => (
              <li key={index} className="flex items-center">
                <div className="w-4 h-[18px] bg-[url(/star-3-svg.svg)] bg-[100%_100%]" />
                <span className="ml-7 [font-family:'DM_Sans',Helvetica] font-normal text-[#5a5858] text-lg leading-[26px]">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links column */}
        <div className="flex flex-col space-y-6">
          <h3 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-2xl leading-[27px]">
            Quick Link
          </h3>

          <ul className="space-y-5">
            {quickLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                <div className="w-4 h-[18px] bg-[url(/star-3-svg.svg)] bg-[100%_100%]" />
                <span className="ml-7 [font-family:'DM_Sans',Helvetica] font-normal text-[#5a5858] text-lg leading-[26px]">
                  {link}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts column */}
        <div className="flex flex-col space-y-6">
          <h3 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-2xl leading-[27px]">
            Recent Post
          </h3>

          <div className="space-y-5">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex space-x-4">
                <div
                  className="w-16 h-16 rounded-lg bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="flex flex-col">
                  <h4 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-[15px] leading-[20.8px]">
                    {post.title}
                  </h4>
                  <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#5e626f] text-sm leading-[14px] mt-2">
                    {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-16 border-t border-[#feeb9d] w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="[font-family:'DM_Sans',Helvetica] font-normal text-lg leading-[26px]">
            <span className="text-[#5e626f]">
              © 2024. All rights reserved by{" "}
            </span>
            <span className="text-[#cc0d39]">Pixelfit</span>
          </div>

          <div className="w-[401px] h-[38px] bg-[url(/payment-method.png)] bg-cover bg-[50%_50%]" />
        </div>
      </div>
    </footer>
  );
};
