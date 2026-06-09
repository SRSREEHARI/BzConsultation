"use client";


import Threecard from "@/components/NewsLetter/Threecard";
import { useParams } from "next/navigation";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";



const NewsData = [
  {
    id: 1,
     slug: "bzanalytics-journey",
    title:
      "From Vision to Reality: BzAnalytics's Journey from 2020 to 2023",
    category: "News",
    date: "Apr 16",
    readTime: "10 min read",
    image: "/newssingle1.jpg",
    summary: "BzAnalytics's Journey from 2020 to 2023", 


    content: [
      {
        type: "p",
        text: "In the ever-evolving landscape of technology and digital transformation, BzAnalytics emerged in 2020 with a clear vision: to revolutionize the digital world and create a fair and integrated digital ecosystem. As we fast forward to 2023, it's evident that their unwavering commitment to innovation, customer-centric solutions, and a dedicated team has transformed their vision into reality.",
      },
      {
        type: "p",
        text: "Founding and Early Days: BzAnalytics began its journey with a passionate team determined to fully embrace the digital mindset. They quickly set out to implement automated processes and develop technology solutions centered around enhancing customer experiences. In 2020, the company took its first step with the launch of Bz Bot, a groundbreaking trading platform product, which marked the beginning of their growth trajectory.",
      },
      {
        type: "p",
        text: "Exponential Growth and Value Creation: Over the last three years, BzAnalytics experienced exponential growth, consistently delivering value to clients across various industries. Their service offerings evolved beyond trading platforms, diversifying into consulting and custom product development. This strategic expansion allowed BzAnalytics to cater to a broader range of client needs and stay at the forefront of the ever-changing technology landscape.",
      },
      {
        type: "p",
        text: "Empowering Job Seekers and Building a Cohesive Team: One of the cornerstones of BzAnalytics's success is its talented and dedicated team of employees. Recognizing that their team members are instrumental in achieving their vision, the company nurtured a culture that fosters innovation, collaboration, and a sense of purpose. By attracting top talent and providing them with opportunities for growth, BzAnalytics not only excelled as an organization but also contributed to job creation and empowerment within the industry.",
      },
      {
        type: "p",
        text: "Vision and Mission - Guiding Principles: Throughout their journey, BzAnalytics has remained anchored to their vision of creating a self-determining society through a fair and integrated digital ecosystem. Their mission to deliver transformative technology services while upholding integrity and accountability has been the driving force behind their every endeavor.",
      },
      {
        type: "p",
        text: "Innovative Products and Agile Services: BzAnalytics commitment to innovation is evident through its portfolio of top-notch, innovative products. By harnessing the latest technological advances, the company continually pushes boundaries to create solutions that redefine industries and deliver lasting value to their clients. Their agile approach to service delivery allows them to adapt swiftly to the dynamic needs of the market, providing clients with timely and effective solutions.",
      },
      {
        type: "p",
        text: "Embracing the Future: As BzAnalytics looks forward to the years ahead, they remain resolute in their pursuit of excellence and transformative impact. With a talented team, a strong vision, and a passion for pushing the boundaries of technology, they are poised to remain a leader in the industry and continue shaping the digital landscape.",
      },
      {
        type: "p",
        text: "Conclusion: From humble beginnings to a leading force in the digital world, BzAnalytics's journey from 2020 to 2023 is a testament to the power of vision, determination, and innovation. By staying true to their core values and fostering a collaborative and dynamic environment, BzAnalytics has successfully transformed their vision into a reality, leaving an indelible mark on the technology landscape and creating a brighter future for the digital ecosystem.",
      },
      
    ],
  },
  {
    id: 2,
      slug: "bzanalytics-cloudq-alliance",
    title:
      "BzAnalytics and CloudQ Forge a Formidable Alliance to Redefine Business Solutions in 2023",
    category: "News",
    date: "July 29",
    readTime: "10 min read",
    image: "/newssingle2.jpg",
    summary: "BzAnalytics and CloudQ Forge a Formidable Alliance", 


    content: [
      {
        type: "p",
        text: "In a groundbreaking development, BzAnalytics, a leading company specializing in ML-powered solutions, announced an impending acquisition by the esteemed US partner company, CloudQ. This strategic move solidifies BzAnalytics's position as a key player in the industry, with the backing of a powerful and trusted technology ally.",
      },
      {
        type: "p",
        text: "Established in 2020, BzAnalytics quickly rose to prominence with its focus on revolutionizing businesses across various sectors. By automating routine tasks through AI and ML, they achieved unparalleled efficiencies, empowering companies to reduce operational costs and drive unprecedented growth.",
      },
      {
        type: "p",
        text: "The impending acquisition by CloudQ promises to take BzAnalytics's capabilities to new heights. As part of the CloudQ family, BzAnalytics now gains access to additional resources, expertise, and an expansive platform to develop and customize ZOHO and Salesforce ERP Solutions, providing even more tailored solutions to organizations through its sister company.",
      },
      {
        type: "p",
        text: "\"We are thrilled to join forces with CloudQ,\" said the CEO of BzAnalytics. \"This acquisition opens up endless possibilities for us to further enhance our offerings and provide our clients with cutting-edge solutions for their evolving needs.\"",
      },
      {
        type: "p",
        text: "CloudQ, a renowned technology company with a proven track record in the market, recognizes BzAnalytics's potential to shape the future of AI and ML-driven solutions. This alliance strengthens CloudQ's position as a pioneer in the industry and positions them to better assist enterprises and software product companies in planning and building state-of-the-art AI/ML solutions.",
      },
      {
        type: "p",
        text: "Both companies express excitement about the synergies that will be created through this collaboration. The shared vision of innovation and commitment to excellence is expected to deliver even greater value to clients, cementing their position as trusted technology partners in the competitive landscape.",
      },
      {
        type: "p",
        text: "With the acquisition set to be completed in 2023, businesses are eager to witness the transformative solutions that will emerge from this powerful union. BzAnalytics's comprehensive service offerings, coupled with CloudQ's vast resources and expertise, are poised to redefine how companies approach data management, AI solution development, and automation strategies.",
      },
      {
        type: "p",
        text: "Industry experts predict that the alliance will reshape the technology landscape, making it an exciting time for enterprises seeking to unlock their sales potential and drive exponential growth. Companies are encouraged to explore the advanced solutions offered by BzAnalytics and witness firsthand how this alliance will transform the way they do business.",
      },
    ],
  },
  {
    id: 3,
      slug: "bzanalytics-recognition",
    title: "BzAnalytics Achieves Outstanding Recognition: Among Top 5 Companies at Prestigious Entrepreneurship Expo",
    category: "News",
    date: "July 29",
    readTime: "10 min read",
    image: "/newssingle3.jpg",
    summary: "BzAnalytics Achieves Outstanding Recognition ", 


    content: [
      {
        type: "p",
        text: "BzAnalytics, a trailblazing technology company specializing in ML-powered solutions, has secured a remarkable position among the top 5 companies in the highly acclaimed Entrepreneurship Expo jointly conducted by IEEE and Startup Kerala Mission. This recognition comes in the wake of their exceptional work on the product \"Customer Experience Management platform\" in the cutting-edge Hyper-Automation project.",
      },
      {
        type: "p",
        text: "The expo, which saw numerous startups and technology companies vying for recognition, proved to be an exceptional platform for BzAnalytics to showcase their innovation and expertise. In the initial round, their remarkable product prototype earned them the impressive 14th rank, paving the way for their ascent to the finals.",
      },
      {
        type: "p",
        text: "\"We are absolutely thrilled with this achievement,\" said the elated CEO of BzAnalytics. \"It's a testament to the hard work and dedication of our team, who worked seamlessly to mold the product prototype and bring it to life.\"",
      },
      {
        type: "p",
        text: "The Hyper-Automation project, which combines advanced machine learning, AI, and automation techniques, caught the attention of the judging panel for its potential to revolutionize customer experience management. The platform's ability to streamline and optimize customer interactions earned it widespread acclaim and secured its position as one of the top 5 companies in the Founder's interview.",
      },
      {
        type: "p",
        text: "The recognition by IEEE and Startup Kerala Mission is a significant milestone for BzAnalytics, further solidifying their status as an industry leader in ML-powered solutions. This accolade not only validates their expertise but also presents a plethora of opportunities for future collaborations and business growth.",
      },
      {
        type: "p",
        text: "\"We extend our heartfelt congratulations to the entire BzAnalytics team for their outstanding work,\" stated the organizers of the Entrepreneurship Expo. \"Their dedication to innovation and pursuit of excellence serves as an inspiration to aspiring entrepreneurs and startups.\"",
      },
      {
        type: "p",
        text: "BzAnalytics is no stranger to accolades, having garnered recognition for their comprehensive service offerings, conceptual and architectural design, data management expertise, AI solution development, and much more. This recent achievement adds yet another feather to their cap and reinforces their commitment to delivering cutting-edge solutions that redefine businesses across sectors.",
      },
      {
        type: "p",
        text: "Looking ahead, BzAnalytics remains driven by a spirit of innovation, aiming to create even more groundbreaking solutions that will revolutionize industries and empower enterprises to achieve unparalleled success. The company expresses gratitude to all its stakeholders, clients, and partners for their unwavering support and looks forward to embarking on new ventures fueled by the infinite power of their future endeavors.",
      },
    ],
  },
  
];


export default function NewsPage() {
const { slug } = useParams();

  const news = NewsData.find((b) => b.slug === slug);
  if (!news) {
    return <div className="text-white text-center py-20">News not found</div>;
  }

  return (
    <>

    <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />

        <BreadcrumbWrapper />
      </section>

  <div className="bg-white dark:bg-black text-black dark:text-white">
    <div className="max-w-7xl mx-auto pl-3 pr-6 md:pl-24 md:pr-16 py-12">
      
      <div className="flex flex-col md:flex-row gap-6 items-start">

        {/* LEFT SIDE */}
        <div className="w-full md:w-[70%] text-white
          [&>h1]:text-[30px] [&>h1]:font-light [&>h1]:mb-[13px] [&>h1]:mt-6
          [&>h2]:text-[20px] [&>h2]:font-bold [&>h2]:mb-[13px] [&>h2]:mt-5
          [&>p]:text-[18px] [&>p]:leading-relaxed [&>p]:tracking-[0.5px] [&>p]:mt-4 
          [&>img]:rounded-xl [&>img]:my-5 [&>img]:border [&>img]:border-white"
        >

          {/* TOP IMAGE */}
          <div className="relative overflow-hidden">
            <img
              src={news.image}
              alt="news"
              className="w-full md:w-[700px] h-[360px] sm:h-[280px] md:h-[450px] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute bottom-0 left-0 w-full 
              h-[85%] sm:h-[75%] md:h-[45%] 
              bg-black/40 backdrop-blur-sm">
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-2 left-3 md:left-6 right-3 md:right-6 flex flex-col gap-1">

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 bg-white px-2 py-1.5 rounded-2xl w-fit max-w-full">
                <span className="w-4 h-4 bg-orange-400 rounded-full shrink-0"></span>
                <p className="text-[10px] sm:text-sm text-orange-400 break-words">
                  {news.category}
                </p>
              </div>

              {/* TITLE */}
              <h2 className="text-white text-[14px] md:text-[25px] font-bold leading-5 md:leading-9 mt-2 break-words">
                {news.title}
              </h2>

              {/* META */}
              <p className="text-white text-[11px] sm:text-[14px] mt-1">
                {news.date} • {news.readTime}
              </p>
            </div>
          </div>

          {/* ✅ MOBILE ONLY - BELOW IMAGE */}
          <div className="block md:hidden mt-4">
            <h2 className="text-[20px] mb-4 font-semibold text-black dark:text-white">
              In this article
            </h2>

            <p className="border-l-[3px] border-orange-500 pl-3 py-2 text-[#f79d0f]">
            {news.summary}
            </p>
          </div>

          {/* News CONTENT */}
          {news.content.map((item, index) => {
            if (item.type === "h1") return <h1 key={index}>{item.text}</h1>;
            if (item.type === "h2") return <h2 key={index}>{item.text}</h2>;
if (item.type === "p") {
  return (
    <p
      key={index}
      className="text-[18px] leading-relaxed tracking-[0.5px] mt-4 text-gray-800 dark:text-gray-300"
    >
      {item.text}
    </p>
  );
}            if (item.type === "img" && "src" in item) return <img key={index} src={item.src as string} alt="" />;
            if (item.type === "ol" && "items" in item && item.items)
              return (
                <ul key={index} className="list-disc pl-5 mt-4 space-y-3">
                  {(item.items as string[]).map((li, i) => <li key={i}>{li}</li>)}
                </ul>
              );
            return null;
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-[40%] space-y-6">

          {/* DESKTOP ONLY */}
          <div className="hidden md:block">
            <h2 className="text-[20px] mb-6 font-semibold text-black dark:text-white">
              In this article
            </h2>

            <p className="border-l-[3px] border-orange-500 pl-3 py-2 text-[#f79d0f]">
             {news.summary}
            </p>
          </div>

        
          <div className="hidden md:flex bg-[#f5900d] rounded-xl p-3 mt-[300px] flex-col w-[380px] items-start gap-4">
            <p className="text-white font-semibold text-[18px]">
              Share with your community!
            </p>

            <div className="flex gap-3 cursor-pointer">
              {[FaFacebookF, FaXTwitter, FaLinkedinIn].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center"
                >
                  <Icon className="text-[#f5900d]" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* RELATED */}
      <h1 className="text-[20px] md:text-[29px] text-white font-black mt-7 ml-2">
        Related Articles
      </h1>

      <Threecard />
    </div>
  </div>
    </>
  );
}
