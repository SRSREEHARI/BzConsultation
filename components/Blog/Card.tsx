"use client";
import Link from "next/link";

type Blog = {
  id: number;
  slug: string; 
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

const Blogcard = () => {
  const blogsData: Blog[] = [
    {
      id: 1,
      slug: "rag-transforming-ai",
      title:
        "Bridging the Gap: How RAG (Retrieval Augmented Generation) is Transforming Generative AI",
      category: "Technology & Business",
      date: "Apr 15",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/rag-l.jpg",
    },
    {
      id: 2,
      slug: "virtual-try-on-digital-innovation",
      title:
        "Unlocking the Future of Fashion : The Power of Virtual Try-On and Digital Innovation",
      category: "Technology & Business",
      date: "Apr 14",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/fashion-l.jpg",
    },
    {
      id: 3,
      slug: "applications-of-machine-learning-in-the-fashion-industry",

      title: "Applications Of Machine Learning In The Fashion Industry",
      category: "Technology & Business",
      date: "Oct 20",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/Blog_L11.jpg",
    },
    {
      id: 4,
      slug: "ai-in-ecommerce",
      title: "AI in Ecommerce",
      category: "Technology & Business",
      date: "July 08",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/Blog_L10.jpg",
    },
    {
      id: 5,
      slug: "data-analytics-intelligent-business",
      title: "Data Analytics : Intelligent Business",
      category: "Technology & Business",
      date: "Nov 18",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/Blog_L9.jpg",
    },
    {
      id: 6,
      slug: "cloud-computing-benefits-services",
       
      title: "What is Cloud Computing? Benefits and Services",
      category: "Technology & Business",
      date: "May 01",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/Blog_L8.jpg",
    },
    {
      id: 7,
      slug: "transition-from-2-to-3",
      title: "Transition from 2.0 to 3.0",
      category: "Technology & Business",
      date: "Feb 16",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/Blog_L4.jpg",
    },
    {
      id: 8,
      slug: "unity-3d-game-development",
      title:

        "Unity 3D Game Development And How It Will Revolutionize The Metaverse",
      category: "Technology & Business",
      date: "Dec 27",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/Blog_L6.jpg",
    },
    {
      id: 9,
      slug: "top-nodejs-frameworks",
      title: "Top 7 Node Js Frameworks That Can Drive Success To Your Business",
      category: "Technology & Business",
      date: "Dec 07",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/Blog_L7.jpg",
    },
    {
      id: 10,
      slug: "blockchain-possibilities",
      title: "Blockchain Is Opening Up A World Of Possibilities",
      category: "Technology & Business",
      date: "Jan 13",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/Blog_L5.jpg",
    },
    {
      id: 11,
      slug: "ai-receptionist",
      title: "Revolutionize Your Front Desk with an AI-Powered Receptionist",
      category: "Artificial Intelligence",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/receptionist.jpg",
    },
    {
      id: 12,
      slug: "ai-managed-portfolios",
      title: "Transforming Investment Management with AI-Managed Portfolios",
      category: "Artificial Intelligence",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/aiportfolio.jpg",
    },
    {
      id: 13,
      slug: "genai-clinical-development",
      title: "Revolutionizing Clinical Development with GenAI",
      category: "Technology & Business",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/clinical.jpg",
    },
    {
      id: 14,
      slug: "genai-patient-matching-clinical-trials",
      title:
        "Optimized Trial Enrollment: Harnessing Generative AI for Patient Matching in Clinical Trials",
      category: "Technology & Business",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/clinicaltrial.jpg",
    },
    {
      id: 15,
      slug: "genai-personalized-content-creation",
      title:
        "Transform Your Sales Strategy with GenAI: Personalized Content Creation",
      category: "Technology & Business",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/content.jpg",
    },
    {
      id: 16,
      slug: "genai-digital-scribe-clinician-patient-interaction",
      title:
        "Ambient Digital Scribe for Clinician-Patient Interaction: A New Era in Healthcare Documentation",
      category: "Technology & Business",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/digital.jpg",
    },
    {
      id: 17,
      slug: "genai-drug-discovery",
      title:
        "Revolutionising Drug Discovery with Generative AI: Speed, Precision, and Innovation",
      category: "Artificial Intelligenc",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/drug.jpg",
    },
    {
      id: 18,
      slug: "genai-employee-assistance",
      title:
        "Enhancing Employee Assistance Using GenAI and AWS: A Comprehensive Roadmap",
      category: "Artificial Intelligenc",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/employee-assist.jpg",
    },
    {
      id: 19,
      slug: "genai-financial-report-generation",
      title: "Revolutionising Financial Report Generation with GenAI",
      category: "Artificial Intelligenc",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/finance.jpg",
    },
    {
      id: 20,
      slug: "genai-health-assist",
      title: "Intelligent Health Assist using GenAI solutions",
      category: "Artificial Intelligenc",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/genai-healthcare.jpg",
    },
    {
      id: 21,
      slug: "genai-medical-coding",
      title:
        "Enhancing Accuracy and Efficiency in Medical Coding with Generative AI",
      category: "Artificial Intelligenc",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/medicalcoding.jpg",
    },
    {
      id: 22,
      slug: "genai-personalized-medicine",
      title:
        "Personalized Medicine with Generative AI: Revolutionizing Healthcare",
      category: "Artificial Intelligenc",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/medicine1.png",
    },
    {
      id: 23,
      slug: "genai-operational-efficiency",
      title: "Enhancing Operational Efficiency through GenAI",
      category: "Artificial Intelligenc",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/operations.jpg",
    },
    {
      id: 24,
      slug: "genai-hyper-personalizing-customer-interactions",  
      title: "The Role of AI in Hyper-Personalizing Customer Interactions",
      category: "Artificial Intelligenc",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/personalization.jpg",
    },
    {
      id: 25,
      slug: "genai-supply-chain-traceability",
      title:
        "Enhancing Supply Chain Traceability with Generative AI: Transparency, Fraud Prevention, and Quality",
      category: "Artificial Intelligenc",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/supplychain.jpg",
    },
    {
      id: 26,
      slug: "genai-maintenance-assistance",
      title:
        "Transforming Technical Support: A Guide to Using Revolutionary Generative AI in Maintenance Assistance",
      category: "Artificial Intelligenc",
      date: "Aug 21",
      readTime: "10 min read",
      image: "https://bzanalytics.ai/assets/images/blog/techsupport.jpg",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 items-stretch">
       {blogsData.map((blog) => (
  <Link key={blog.id} href={`/blogs/${blog.slug}`}>
            <div className="w-full max-w-[374px] h-full bg-[#f7f7f7] rounded-[10px] shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_6px_20px_rgba(0,0,0,0.19)] pt-[10px] px-[10px] pb-[20px] flex flex-col text-[14px] sm:text-[16px] font-medium leading-[24px] sm:leading-[30px] tracking-[0.5px] transition-transform duration-300 ease-in hover:scale-105">
              <img
                src={blog.image}
                className="w-full h-[160px] sm:h-[180px] object-cover rounded-[10px]"
                alt={blog.title}
              />

              <div className="flex flex-col flex-grow gap-[6px] mt-[8px]">
                <div className="flex items-center text-blue-800">
                  <span className="text-xl sm:text-2xl mr-2 -translate-y-1">
                    •
                  </span>
                  <span>{blog.category}</span>
                </div>

                <h6 className="text-black font-semibold text-[18px] leading-[22px] mb-2 tracking-[0.5px] line-clamp-2">
                  {blog.title}
                </h6>

                <span className="text-black text-xs sm:text-sm mt-1">
                  {blog.date} • {blog.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogcard;
