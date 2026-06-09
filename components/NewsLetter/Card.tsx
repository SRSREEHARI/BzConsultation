"use client";
import Link from "next/link";

type News = {
  id: number;
  slug: string; 
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

const Newscard = () => {
  const NewsData: News[] = [
    {
      id: 1,
      slug: "bzanalytics-journey",
      title:
        "From Vision to Reality: BzAnalytics's Journey from 2020 to 2023",
      category: "News",
      date: "Apr 16",
      readTime: "10 min read",
      image: "newssingle1.jpg",
    },
    {
      id: 2,
      slug: "bzanalytics-cloudq-alliance",
      title:
        "BzAnalytics and CloudQ Forge a Formidable Alliance to Redefine Business Solutions in 2023",
      category: "News",
      date: "July 29",
      readTime: "10 min read",
      image: "newssingle2.jpg",
    },
    {
      id: 3,
      slug: "bzanalytics-recognition",

      title: "BzAnalytics Achieves Outstanding Recognition: Among Top 5 Companies at Prestigious Entrepreneurship Expo",
      category: "News",
      date: "Nov 30",
      readTime: "10 min read",
      image: "newssingle3.jpg",
    },
];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 mb-15 items-stretch">
       {NewsData.map((news) => (
  <Link key={news.id} href={`/news/${news.slug}`}>
            <div className="w-full max-w-[374px] h-full bg-[#f7f7f7] rounded-[10px] shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_6px_20px_rgba(0,0,0,0.19)] pt-[10px] px-[10px] pb-[20px] flex flex-col text-[14px] sm:text-[16px] font-medium leading-[24px] sm:leading-[30px] tracking-[0.5px] transition-transform duration-300 ease-in hover:scale-105">
              <img
                src={news.image}
                className="w-full h-[160px] sm:h-[180px] object-cover rounded-[10px]"
                alt={news.title}
              />

              <div className="flex flex-col flex-grow gap-[6px] mt-[8px]">
                <div className="flex items-center text-orange-400">
                  <span className="text-xl sm:text-3xl mr-2 -translate-y-1">
                    •
                  </span>
                  <span>{news.category}</span>
                </div>

                <h6 className="text-black font-semibold text-[18px] leading-[22px] mb-2 tracking-[0.5px] line-clamp-2">
                  {news.title}
                </h6>

                <span className="text-black text-xs sm:text-sm mt-1">
                  {news.date} • {news.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Newscard;
