import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Section3ByAnima = (): JSX.Element => {
  // Blog post data for mapping
  const blogPosts = [
    {
      id: 1,
      image: "/post-thumbnail-1.png",
      title: "Slay the Summer Style Game Must-Have Trends You Can Shop Online",
      category: "WordPress",
      date: "Jan 12, 2024",
    },
    {
      id: 2,
      image: "/post-thumbnail-2.png",
      title: "Insider Tips on Finding Affordable Fashion Gems Online",
      category: "WordPress",
      date: "May 4, 2024",
    },
    {
      id: 3,
      image: "/post-thumbnail-3.png",
      title: "Eco-Friendly Fashion E-commerce You Can Feel Good About",
      category: "WordPress",
      date: "Feb 10, 2024",
    },
    {
      id: 4,
      image: "/post-thumbnail-4.png",
      title: "A Guide to Streamlining the Online Fashion Shopping Experience",
      category: "WordPress",
      date: "Aug 29, 2024",
    },
  ];

  const featuredPost = {
    image: "/post-thumbnail.png",
    title:
      "From Clicks to Closets: Mastering the Art of Fashion E-commerce Marketing",
    description:
      "Dives Into The World Of Fashion E-commerce Marketing, Guiding Readers On How to Turn Online Interest Into Sales. It Likely Explores Strategies To Attract Potential customers, Showcase Products Effectively, And Create A Smooth Buying Journey that Converts Clicks Into Clothes Hanging In Closets",
  };

  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-2 mb-1">
          <img className="w-4 h-4" alt="Icon" src="/icon-11.svg" />
          <span className="font-medium text-[#cc0d39] text-base [font-family:'DM_Sans',Helvetica]">
            Our Blogs
          </span>
          <img className="w-4 h-4" alt="Icon" src="/icon-11.svg" />
        </div>
        <h2 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-4xl text-center tracking-[0] leading-[54px]">
          Explore Our Articles
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured post - takes up 2 columns on large screens */}
        <Card className="lg:col-span-2 border-none shadow-none">
          <CardContent className="p-0">
            <div
              className="w-full h-[378px] rounded-[10px] bg-cover bg-center mb-6"
              style={{ backgroundImage: `url(${featuredPost.image})` }}
            />
            <h3 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-[#13172b] text-3xl tracking-[0] leading-[39px] mb-4">
              {featuredPost.title}
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e626f] text-lg tracking-[0] leading-[27px]">
              {featuredPost.description}
            </p>
          </CardContent>
        </Card>

        {/* Blog post grid - 2x2 on large screens */}
        <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="border-none shadow-none">
              <CardContent className="p-0">
                <div
                  className="w-full h-[204px] rounded-[10px] bg-cover bg-center mb-3"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#13172b] text-lg tracking-[0] leading-[23.4px] mb-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#5e626f] text-sm tracking-[0] leading-[26px]">
                    {post.category}
                  </span>
                  <img
                    className="w-3.5 h-[26px]"
                    alt="Icon"
                    src="/icon-49.svg"
                  />
                  <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#5e626f] text-sm tracking-[0] leading-[26px]">
                    {post.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
