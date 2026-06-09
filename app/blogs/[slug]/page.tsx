"use client";
import Threecard from "@/components/Blog/Threecard";
import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";
import { useParams } from "next/navigation";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const blogsData = [
  {
    id: 1,
    slug: "rag-transforming-ai",
    title:
      "Bridging the Gap: How RAG (Retrieval Augmented Generation) is Transforming Generative AI",
    category: "Technology & Business",
    date: "Apr 15",
    readTime: "10 min read",
    image: "https://bzanalytics.ai/assets/images/blog/rag-l.jpg",

    content: [
      {
        type: "p",
        text: "In recent years, the field of artificial intelligence (AI) has witnessed a remarkable revolution, particularly in generative models. One of the most significant advancements in this realm is the emergence of retrieval augmented generation, which has proven to be a game-changer in enhancing the capabilities of generative AI models. This blog explores the profound impact of retrieval-augmented generation and its role in revolutionising the landscape of generative AI.",
      },
      {
        type: "h1",
        text: "Understanding Retrieval Augmented Generation",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/rag/rag1.png",
      },
      {
        type: "p",
        text: "Retrieval-augmented generation is a cutting-edge approach that combines the strengths of both retrieval-based and generative models. By using a vast repository of pre-existing data, retrieval-augmented generation enables AI systems to access and incorporate relevant information into the process of generating new content. This dynamic fusion of retrieval and generation empowers AI models to produce more coherent, contextually relevant, and high-quality outputs across various domains.",
      },
      {
        type: "h2",
        text: "Enhancing Creativity and Contextual Understanding",
      },
      {
        type: "p",
        text: "One of the key advantages of retrieval-augmented generation is its ability to enhance the creativity and contextual understanding of AI systems. Unlike traditional generative models, which operate in relative isolation, retrieval-augmented generation enables AI to draw upon a diverse range of external knowledge sources. This results in more nuanced and contextually rich outputs, thereby bridging the gap between AI-generated content and human-level understanding.",
      },
      {
        type: "h2",
        text: "Advancements in Natural Language Processing",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/rag/rag2.png",
      },
      {
        type: "p",
        text: "In the realm of natural language processing (NLP), retrieval-augmented generation has ushered in a new era of capabilities and possibilities. By enabling AI models to access and integrate relevant information from vast corpora of text, retrieval-augmented generation has significantly improved the coherence, relevance, and fluency of AI-generated language. This has profound implications for a wide range of applications, including chatbots, language translation, content generation, and more.",
      },
      {
        type: "h2",
        text: "Empowering Creative Industries and Content Creation",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/rag/rag3.png",
      },
      {
        type: "p",
        text: "The impact of retrieval-augmented generation extends beyond the realm of technical advancements, reaching into the creative industries and content creation. With the ability to seamlessly blend existing knowledge with generative capabilities, AI systems powered by retrieval-augmented generation are poised to transform the way content is created across various mediums. From literature and music composition to visual arts and design, the fusion of retrieval and generation opens up unprecedented avenues for creative expression and innovation.",
      },
      {
        type: "h2",
        text: "The Ethical Implications and Future Considerations",
      },
      {
        type: "p",
        text: "As with any revolutionary advancement, retrieval-augmented generation raises important ethical considerations and future implications. The potential for AI systems to generate highly convincing and contextually rich content using retrieval-augmented approaches necessitates careful consideration of issues such as misinformation, intellectual property rights, and content ownership. As this technology continues to evolve, it is crucial to proactively address these ethical considerations and ensure responsible deployment and use of retrieval-augmented generation.",
      },
      {
        type: "h2",
        text: "Revolutionizing Conversational AI",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/rag/rag4.png",
      },
      {
        type: "p",
        text: "Conversational AI systems empowered by RAG are redefining human-computer interactions. By usiing a wealth of knowledge from diverse sources, RAG-equipped chatbots and virtual assistants can engage in more meaningful and contextually rich conversations. This enables them to provide more accurate and personalized assistance, significantly enhancing the user experience.",
      },
      {
        type: "h2",
        text: "Unleashing the Potential of Large-Scale Knowledge Bases",
      },
      {
        type: "p",
        text: "RAG's integration with large-scale knowledge bases has unlocked unprecedented potential in AI applications. By tapping into extensive repositories of structured and unstructured data, RAG-equipped models can provide comprehensive, well-informed, and contextually relevant responses across a wide range of domains. This capability has far-reaching implications for fields such as education, healthcare, customer service, and beyond.",
      },
      {
        type: "h2",
        text: "Transforming Generative AI for a Brighter Future",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/rag/rag5.png",
      },
      {
        type: "p",
        text: "The emergence of retrieval-augmented generation represents a significant milestone in the ongoing evolution of generative AI. By harnessing the power of retrieval-augmented approaches, AI systems are poised to revolutionize content generation, creative expression, and contextual understanding across diverse domains. As researchers, developers, and stakeholders continue to explore and refine the capabilities of retrieval-augmented generation, the future holds immense promise for the continued advancement of generative AI and its transformative impact on society.",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/rag/rag6.png",
      },
      {
        type: "p",
        text: "In conclusion, retrieval augmented generation (RAG) has transformed the field of generative AI by enhancing creativity and contextual understanding. With its integration with large-scale knowledge bases, RAG-equipped models can provide comprehensive, well-informed, and contextually relevant responses across a wide range of domains, unlocking unprecedented potential in AI applications. The fusion of retrieval and generation has far-reaching implications for content creation, conversational AI, and natural language processing, promising a brighter future for society. However, as with any revolutionary advancement, it is crucial to address ethical considerations and ensure responsible deployment and use of retrieval-augmented generation.",
      },
    ],
  },
  {
    id: 2,
    slug: "virtual-try-on-digital-innovation",
    title:
      "Unlocking the Future of Fashion : The Power of Virtual Try-On and Digital Innovation",
    category: "Technology & Business",
    date: "Apr 15",
    readTime: "10 min read",
    image: "https://bzanalytics.ai/assets/images/blog/fashion-l.jpg",

    content: [
      {
        type: "p",
        text: "Let's delve into the myriad benefits and game-changing possibilities that these digital innovations are bringing to the fashion industry: ",
      },

      {
        type: "ol",
        items: [
          "See Before You Buy: Gone are the days of uncertainty when shopping online. With virtual try-on capabilities, customers can visualize how garments will fit and look on their unique body shapes, leading to more confident purchasing decisions and fewer returns.",

          "Get the Perfect Fit: Customization takes centre stage as clothes can now be tailored precisely to individual body measurements, ensuring a perfect fit and personalized experience for every customer.",

          "Save Time and Reduce Waste: Designers can expedite the creation and showcasing of new designs, minimizing the need for physical prototypes that often lead to wasted materials. This not only streamlines the design process but also contributes to environmental sustainability.",

          "Easy Shopping Online: Virtual try-on experiences make online shopping more immersive and enjoyable, bridging the gap between physical retail and e-commerce while enhancing customer satisfaction.",

          "Environmental Benefits: By embracing digital solutions like virtual fitting rooms and AR/VR experiences, fashion brands can significantly reduce their carbon footprint, aligning with sustainability goals and resonating with eco-conscious consumers.",

          "Enhance Accessibility and Inclusivity: Technology opens doors for people with diverse body types and mobility challenges, making fashion more inclusive and accessible to a wider audience.",

          "Innovative Marketing and Engagement: Brands are leveraging virtual fashion shows, interactive digital showcases, and AR try-on experiences to engage consumers in captivating ways, driving excitement and brand loyalty.",

          "Data-Driven Decision Making: The adoption of digital technologies generates valuable data insights into consumer preferences, sizing trends, and market demands, empowering brands to make informed decisions and craft targeted strategies.",
        ],
      },

      {
        type: "h2",
        text: "Customization and Personalization",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/fashion/fashion1.jpg",
      },

      {
        type: "p",
        text: "In the near future, imagine a world where your wardrobe is a reflection of your digital identity. Smart fabrics seamlessly integrate technology, adjusting to your body's needs and preferences. Your virtual stylist, powered by artificial intelligence, curates outfits based on your schedule, mood, and even the weather forecast. Shopping becomes an immersive experience through augmented reality, allowing you to try on clothes virtually before making a purchase. Sustainable practices are the norm, with 3D printing creating on-demand garments, reducing waste and carbon footprints. Blockchain technology ensures transparency in the fashion supply chain, giving you confidence in ethical and eco-friendly brands. The future of fashion is not just about looking good; it's about embracing innovation that enhances your lifestyle, values sustainability, and celebrates your individuality in the digital age.",
      },

      {
        type: "h2",
        text: "Virtual Styling Consultations: Expert Advice at your Fingertips",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/fashion/fashion2.jpg",
      },
      {
        type: "p",
        text: "Imagine having your own personal stylist right at your fingertips, available anytime and anywhere. In the future, virtual styling consultations will be the norm, offering expert fashion advice tailored specifically to you. Using advanced technology, these consultations will analyse your preferences, body shape, and even the latest trends to suggest outfits that suit your style and occasion perfectly. Whether you're preparing for a special event or just updating your wardrobe, virtual stylists will guide you through colour coordination, outfit choices, and trend recommendations with ease. It's like having a fashion expert in your pocket, making every outfit decision a breeze and ensuring you always look and feel your best.",
      },
      {
        type: "h2",
        text: "Sustainability and Environmental Impact",
      },

      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/fashion/fashion3.jpg",
      },
      {
        type: "p",
        text: "The fashion industry will lead the way in sustainable practices, thanks to cutting-edge digital solutions. Imagine a world where virtual prototyping allows designers to create and test clothing designs digitally, reducing the need for physical samples and minimizing waste. Efficient inventory management systems will ensure that only what is needed is produced, cutting down on overproduction. Sustainable material sourcing methods, using advanced technologies, will become the norm, promoting eco-friendly materials and reducing environmental impact. These futuristic approaches will help fashion brands greatly reduce their carbon footprint and contribute positively to preserving our planet for future generations",
      },

      {
        type: "h2",
        text: "Inclusive Fashion for All",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/fashion/fashion4.jpg",
      },
      {
        type: "p",
        text: " Fashion will embrace inclusivity like never before, thanks to groundbreaking technological advancements. Picture this: virtual fitting rooms that cater to diverse body types, allowing everyone to try on clothes and find the perfect fit effortlessly. Adaptive clothing designs will become mainstream, ensuring comfort and style for individuals with diverse abilities. Inclusive sizing options will be standard, making fashion accessible to people of all shapes and sizes. These futuristic innovations will break down barriers and promote authenticity in personal style, creating a more inclusive and equitable fashion world for everyone to enjoy.",
      },
      {
        type: "h2",
        text: "The Role of Data in Fashion Decision-Making",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/fashion/fashion5.jpg",
      },
      {
        type: "p",
        text: "Imagine a world where brands use advanced analytics to understand exactly what consumers want, from the latest trends to the perfect fit. This data-driven approach will help designers create clothing that meets the needs and aspirations of customers, leading to more personalized and satisfying shopping experiences. Pricing strategies and marketing campaigns will be tailored based on real-time data insights, ensuring that brands stay agile and responsive to changing trends. By harnessing the power of data, fashion brands will not only enhance their business operations but also strengthen their connection with customers, making the fashion world more dynamic and customer-centric than ever before.",
      },
      {
        type: "h2",
        text: "Looking Ahead : Trend and Opportunities",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/fashion/fashion6.jpg",
      },
      {
        type: "p",
        text: "The fashion world is brimming with exciting innovations waiting to unfold. Imagine stepping into virtual reality to experience fashion like never before, where you can virtually try on outfits and explore new styles from the comfort of your home. Blockchain technology will ensure transparency in the supply chain, so you can trust that your clothes are ethically sourced. AI-driven trend forecasting will revolutionize how brands create and showcase new designs, ensuring they stay ahead of the fashion curve. By embracing these futuristic trends, fashion brands will not only captivate new markets but also lead the way in sustainable and innovative growth, creating a brighter and more exciting fashion landscape for everyone.",
      },
      {
        type: "h2",
        text: "Empowering Creativity and Collaboration: Co-Creation in the Digital Age",
      },
      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/blog/blogdetails/fashion/fashion7.jpg",
      },
      {
        type: "h2",
        text: "Conclusion: Embracing a Digital Fashion Future",
      },

      {
        type: "p",
        text: "In conclusion, , the fusion of fashion and technology heralds an era of boundless possibilities and positive transformations. By embracing digital innovations like virtual try-ons, personalized recommendations, and sustainable practices, we are not only redefining how we experience style but also shaping a more inclusive and environmentally conscious fashion landscape. This digital revolution invites us to explore new horizons of creativity, connectivity, and responsible choices, ensuring that fashion remains not just a reflection of our individuality but also a force for positive change. As we step forward into this exciting digital fashion future, let's celebrate the harmony of style and innovation, making fashion a truly empowering and sustainable expression for generations to come.",
      },
    ],
  },
  {
    id: 3,
    slug: "applications-of-machine-learning-in-the-fashion-industry",
    title: "Applications Of Machine Learning In The Fashion Industry",
    category: "Technology & Business",
    date: "oct 20",
    readTime: "10 min read",
    image: "https://bzanalytics.ai/assets/images/blog/Blog_L11.jpg",

    content: [
      {
        type: "p",
        text: "Following the devastating economic effects of the COVID-19 pandemic, the fashion industry is starting to pick up the pieces and chart a new course. Machine learning and artificial intelligence (AI) have already gained traction in the industry, and in order to compete in today’s increasingly competitive environment, fashion retailers must look inwards to identify potential efficiency gaps. ",
      },
      {
        type: "p",
        text: "The key themes that fashion retailers will need to keep in mind in the next year include:",
      },

      {
        type: "ol",
        items: [
          "New spending habits in a post-COVID-19 world.Consumers have embraced loungewear in the remote work world, and many have also critically examined their wardrobes, substituting quality for quantity. As a result, inventory control will be more important than ever as products might not move as quickly off the shelves.",

          "Digital Transformation.A recent 2020 Survey from trending newsfeeds found that more than 75% of consumers now conduct their shopping online. Retailers will have a better understanding of the customer lifecycle as more people shop online, but they also need to make sure that the branding and level of customer service are consistent between the online and in-store experiences.",

          "Impact of Social Media on Purchase Decisions.Over the past ten years, social media use has been steadily increasing around the world and has emerged as a key aspect of online shopping and tracking fashion trends. In actuality, 74% of consumers today use social media to decide what to buy. More people using social media means more data is available to understand your customers and more channels for advertising. ",

          "Decreasing customer loyalty. action.",

          "Consumer loyalty is declining as there are more online resources for finding new brands and as consumers are more prices sensitive. According to a recent study, 75% of Asian-European consumers switched brands during the pandemic. To draw and keep customers, fashion retailers will need to work even harder. To that end, many are experimenting with various pricing and marketing strategies.",

          "Machine learning can be used in quite a handful of ways within the fashion industry. Some of the key methods, which we will explore in more detail below, include:",

          "Customized recommendations",
          "Improved customer support",
          "Trend forecasting",
          "Inventory optimization",
          "Price optimization",
        ],
      },

      {
        type: "h2",
        text: "Customized Recommendations",
      },

      {
        type: "p",
        text: "Based on past preferences and anticipated future behavior, recommendation engines are an excellent tool for creating personalized marketing for retail customers. Customers who buy a specific black shirt, for instance, may also be very likely to buy a jean jacket to go with it. In this situation, the retailer might want to advise a customer who has examined or purchased the black shirt to look at the jean jacket by stating that “customers who bought this black shirt also purchased this jean jacket.”",
      },
      {
        type: "p",
        text: " Instead of using more general manual or rules-based approaches to target clothing advertisements based on demographics, this strategy enables fashion retailers to customize recommendations for specific users. This means that advertisements from retailers are much more likely to result in a sale, allowing them to spend their advertising budgets more effectively. They can also decrease returns by suggesting products that customers are more likely to be pleased with.",
      },
      {
        type: "p",
        text: " There are several ways to construct recommendation engines, and the best strategy depends on the characteristics of your data and your business objectives.",
      },
      {
        type: "h2",
        text: "Improved Customer Support",
      },
      {
        type: "p",
        text: " Retailers can now quickly and effectively respond online to common customer inquiries about things like return policies and store hours thanks to chatbot technology. Additionally, style advice can be given by chatbots, which is a great way for retailers to learn more about their customers and enhance marketing strategies and trend analyses in general.",
      },

      {
        type: "p",
        text: "Chatbots are made possible by using Natural Language Processing (NLP) a subfield of AI that enables computers to process and understand human language by converting it into a numerical format. Thanks to recent developments in Deep learning approaching NLP chatbots have developed substantially in the last couple of years. They will continue to evolve in their ability to understand and process human language. While not perfect, they’re a great solution for retailers looking to speed up customer response times as well as free up professional resources for more strategic tasks Click here to view our new AI chatbot models if you want to learn more about chatbots. ",
      },

      {
        type: "h2",
        text: "Trent Forecasting",
      },

      {
        type: "p",
        text: "In the last few years, social media has grown in importance as a factor influencing retail purchase decisions. Retailers can forecast consumer preferences by looking at search engine trends, blog post topics, and social media activity (posts, comments, and likes). For example, if the hashtag #tie-dye is trending or image recognition software shows that people are posting more and more images of tie-dye clothing, it may be safe to assume that this is a new upcoming trend. Instead of relying solely on a much more manual approach to assessing fashion shows and fashion magazines, fashion experts can use this type of data to make more informed decisions about new products. H&M has relied heavily on big data, including social media data, to better predict upcoming trends, and many other retailers are beginning to follow suit, pun intended.",
      },
      {
        type: "p",
        text: "Social media data analysis for trend forecasting can benefit from a variety of ML techniques, including NLP, deep learning for image recognition, and traditional supervised learning methods for prediction.",
      },
      {
        type: "h2",
        text: "Inventory Optimization",
      },
      {
        type: "p",
        text: "Inventory management is one of the most common problems that fashion retailers face. If you order too many of a particular item, you will have unsold inventory that you have either wasted money producing or will need to drastically discount to get off the shelves before it goes out of style. On the other hand, if you order too little, you’ll miss out on potential sales and hurt your customers’ retail experience, as it’s an unpleasant customer experience to find an item of clothing you like only to discover it’s out of stock in your size.",
      },
      {
        type: "p",
        src: "Inventory optimization is primarily a problem of demand forecasting. We must forecast how much of each SKU will be sold in a given time period and then stock warehouses accordingly. Social media data, like store receipts or foot traffic data, can absolutely be used to improve SKU-level forecasting.",
      },

      {
        type: "p",
        text: "Price comparison is becoming simpler as consumers switch from in-store to online shopping, and price optimization has become essential for retailers to stay competitive. Retailers can maximize profits by setting the best prices and markdowns for products to move them off the shelves as quickly as possible.",
      },
      {
        type: "p",
        text: "In the past, retailers frequently used seasonal broad price markdowns or market research to guide their pricing decisions, but machine learning enables a much more sophisticated approach. This essentially entails two steps: the first is sales forecasting, and the second is price optimization.",
      },
      {
        type: "p",
        text: "In inventory optimization, we focused to forecast the number of sales for each SKU and store based on historical trends. We can then optimize prices by juggling tradeoffs between stock and margin while adhering to specific legal and business constraints. There will always be a trade-off between offering steep discounts to get products off the shelf before they go out of style and making sure that those discounts don’t go too far and negatively affect profits.",
      },
      {
        type: "h2",
        text: "What to Do From Here?",
      },
      {
        type: "p",
        text: "Examine your current procedures critically and look for areas that could be improved. Are you observing a lot of unsold inventory at the end of the season or an expanding social media presence that is untapped in terms of data? It might be time to make an investment in AI to protect your brand’s future and keep up with the sharper competition.",
      },
      {
        type: "p",
        text: "Go Further on AI in Retail",
      },
      {
        type: "p",
        text: "Uncover additional use cases for the retail space as well as retail-specific challenges (i.e., estimating ROI, data collection and management, data governance) and how to effectively navigate them",
      },
      {
        type: "p",
        text: "Let’s stick with BzAnalytics as the best method for implementing chatbots and AI to build your own e-commerce application and inventory management system. Visit us for more. WWW.BZANALYTICS.AI",
      },
    ],
  },
  {
    id: 4,
    slug: "ai-in-ecommerce",
    title: "AI In Ecommerce",
    category: "Technology & Business",
    date: "July 08",
    readTime: "10 min read",
    image: "https://bzanalytics.ai/assets/images/blog/Blog_L10.jpg",

    content: [
      {
        type: "p",
        text: "Artificial Intelligence in Ecommerce is playing a leading role in driving innovative business strategies and customer experiences. AI in E-commerce in its basic version is being utilized by online retailers for providing chatbot services, analyzing customer comments, and, personalizing services to online shopping.",
      },
      {
        type: "p",
        text: "With so much information being collected by companies, one challenge they face is how to process large datasets of information to unlock deeper insights. It’s no doubt then that machine learning has become more commonplace to help break through confusing, or even conflicting, observational data and give insights that can drive meaningful business impact.",
      },
      {
        type: "p",
        text: "visit our website:WWW.BZANALYTICS.AI",
      },

      {
        type: "p",
        text: "#ecommerce #ai #business #help #data #machinelearning #commerce #onlineshopping #artificialintelligence #bzanalytics ",
      },
    ],
  },
  {
    id: 5,
    slug: "data-analytics-intelligent-business",
    title: "Data Analytics : Intelligent Business",
    category: "Technology & Business",
    date: "Nov 18",
    readTime: "10 min read",
    image: "https://bzanalytics.ai/assets/images/blog/Blog_L9.jpg",

    content: [
      {
        type: "p",
        text: "Basically, big data analytics is the process of analyzing primary data to derive meaningful and actionable insights and is then used to inform and make intelligent business decisions.",
      },
      {
        type: "p",
        text: "Thus, the DA will make it possible to extract raw data, and organize and analyze it. It transforms them from incomprehensible figures into coherent and intelligible information. After interpreting the data, the data analyst will then communicate their findings in the form of suggestions or recommendations on the next steps for the business.",
      },

      {
        type: "p",
        text: "Discover the different platforms for analyzing big data and making it usable.",
      },
      {
        type: "p",
        text: "Indeed, Data Analysis affects all sectors, including financial services and insurance, manufacturing, energy, transportation, travel and logistics, healthcare, and more. It can help to:",
      },
      {
        type: "ol",
        items: [
          "Predict and manage disruptions",
          "Optimize routes",
          "Provide proactive customer service",
          "Offer intelligent cross-selling",
          "Predict impending equipment failures",
          "Manage inventory in real-time",
          "To optimize pricing and prevent fraud",
        ],
      },

      {
        type: "p",
        text: "Machine Learning is the key to Big Data analysis. By combining machine learning and high-dimensional statistics, companies will benefit from probabilistic predictions of unprecedented accuracy. To know more, contact us",
      },
    ],
  },
  {
    id: 6,
    slug: "cloud-computing-benefits-services",
    title: "Data Analytics : Intelligent Business",
    category: "Technology & Business",
    date: "May 01",
    readTime: "10 min read",
    image: "https://bzanalytics.ai/assets/images/blog/Blog_L8.jpg",

    content: [
      {
        type: "h2",
        text: "What Is Cloud Computing: Benefits and Services.",
      },
      {
        type: "p",
        text: "Cloud computing is defined as the computing services including servers, storage, databases, networking, software, analytics, and intelligence over the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale. Since the beginning of cloud computing the world has witnessed an explosion of cloud based application s and services in IT. It really took hold with the emergence of software as a service and hyper-scale cloud-computing providers such as Amazon Web Services, Azure, etc. Delivering hosted services through the internet called “cloud computing”. Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service are the three main categories or types of cloud computing into which these services fall (SaaS). A cloud can be either public or private. Anyone online can purchase services from a public cloud.",
      },
      {
        type: "h2",
        text: "Cloud Computing",
      },
      {
        type: "p",
        text: "Cloud computing/ cloud hosting has emerged as a critical computing paradigm, which provide easy to use, on demand access to a shared pool of programmable computer resources via the internet. Cloud computing is not always less expensive than conventional forms of computing, just as renting is not always less expensive than buying in the long run. If an application requires Cloud computing services on a regular and predictable basis, it may be more cost-effective to deliver those services in-house. As they embark on a much faster digital transformation journey, businesses are looking for solutions to improve agility, business continuity, profitability, and scalability.",
      },
      {
        type: "h2",
        text: "Benefits Of Cloud computing",
      },
      {
        type: "p",
        text: "There are many advantages and some considerations when choosing cloud storage over local data storage, especially when storing important business files that require safe storage, constant backups, and easy access.",
      },
      {
        type: "h2",
        text: "Accessibility",
      },
      {
        type: "h2",
        text: "AOne main benefit is that your files are accessible from any device with an internet connection. Customer presentations do not have to be brought in on a specific laptop or thumb drive — they can be easily accessed through the cloud.",
      },
      {
        type: "h2",
        text: "Drag and drop",
      },
      {
        type: "p",
        text: "Another plus for cloud storage is that a lot of them come with their own apps that let you just drag and drop data from one place on your computer or smartphone to the cloud, some even offer automatics storage backup, so you can just set it and forget it.",
      },
      {
        type: "h2",
        text: "Scalability",
      },
      {
        type: "p",
        text: "With the cloud, it is easy to scale your storage based on your data needs. If you add another user and need more storage, that’s no problem. If you lose a few users and suddenly have way too much storage, it is easy to scale down and save some money.",
      },
      {
        type: "h2",
        text: "Disaster Recovery",
      },
      {
        type: "p",
        text: "Cloud storage is the peace of mind that comes from constant storage backups made to a secure offsite location. If you’re on-premise storage infrastructure breaks down or your hardware fails, the cloud makes disaster recovery much simpler.",
      },
      {
        type: "h2",
        text: "No On-Site Server Maintenance Required",
      },
      {
        type: "h2",
        text: "- It eliminates the need for on-site server maintenance. With cloud storage, you don’t need to hire employees to run and maintain servers, which saves money on both hardware and salary expenses. By outsourcing server maintenance to the cloud, you eliminate the hassle and extra expense that comes from maintaining an on-prem server.",
      },

      {
        type: "img",
        src: "https://bzanalytics.ai/assets/images/service/cloud_tech.jpg",
      },
      {
        type: "h2",
        text: "Cloud computing services",
      },
      {
        type: "p",
        text: "Cloud computing services is on the rise and it’s not just for tech giants like Amazon or Microsoft. The usage of cloud services for business purpose has grown steadily over the past 10 years and by 2020, it is expected that over half of organisations will be using cloud-based services. Cloud computing enables rapid scalability, which means that businesses can expand without incurring additional costs for hardware or infrastructure upgrades.",
      },
    ],
  },
  {
    id: 7,
    slug: "transition-from-2-to-3",
    title: "Data Analytics : Intelligent Business",
    category: "Technology & Business",
    date: "July 29",
    readTime: "10 min read",
    image: "https://bzanalytics.ai/assets/images/blog/Blog_L4.jpg",

    content: [
      {
        type: "p",
        text: "Web 2.0 has revolutionized the web and its allied industries. This version of the web has made it exceedingly simple for users to collect, generate, and distribute huge amounts of data with just one click..",
      },
      {
        type: "p",
        text: "Because of the rising adoption of blockchain technology across various apps and sites, Web 3.0 is the latest generation of the World Wide Web. It offers a more interactive and personalized web experience built on emerging technologies such as artificial intelligence (AI). Web 3.0 is sometimes referred to as the Semantic Web, with the goal of making Internet data machine-readable.",
      },
      {
        type: "p",
        text: "Web 3.0 has the potential to transform the way we use the internet, undoubtedly having a significant impact on our lives. In moving towards the future of the Internet, Web 3.0 aims to speed up, simplify, and streamline the process of looking for information. Unlike using a Web 2.0 application, where a user must interact with the front end that connects to the back end and interacts with the database.",
      },
      {
        type: "p",
        text: "Centralized servers host all of the code that is sent to users via a web browser. In contrast, there are no centralized databases or web servers for backend functions in Web 3.0.",
      },
      {
        type: "p",
        text: "Instead, Internet 3.0 blockchains are used to build apps on a decentralized computer system governed by anonymous web nodes. Developers construct smart contracts to govern the logic of their programs, which are then placed on the decentralized state machine.",
      },

      {
        type: "h2",
        text: "Features of Web 3.0",
      },

      {
        type: "p",
        text: "Web 3.0 will increase the efficiency of machine-human interaction by making the web more secure and transparent, ultimately improving the efficiency of web browsing. Benefits of Web 3.0 include:",
      },

      {
        type: "h2",
        text: "Transparency",
      },

      {
        type: "p",
        text: "You can track your data and the code that runs the platform no matter which blockchain platform you choose. Open source blockchain platforms built by non-profits enable the planning and implementation of blockchain technology projects to take place openly and transparently. Using this method, the user will no longer solely rely on the platform's creator.",
      },
      {
        type: "h2",
        text: "No Restrictions on Data Access",
      },
      {
        type: "p",
        text: "Access to the data may be done from anywhere in the world and on any device. The goal is to increase global data collection and accessibility. Web 3.0 will allow for a wide range of interactions, from simple payments to secure data exchanges.",
      },
      {
        type: "p",
        text: "We are moving towards a web in which users maintain full control over their data and privacy while allowing corporations to use it.",
      },
    ],
  },
  {
    id: 8,
    slug: "unity-3d-game-development",
    title:
      "Unity 3D Game Development And How It Will Revolutionize The Metaverse",
    category: "Technology & Business",
    date: "Dec 07",
    readTime: "10 min read",
    image: "https://bzanalytics.ai/assets/images/blog/Blog_L7.jpg",

    content: [
      {
        type: "p",
        text: "Unity Technologies established the cross-platform Unity 3D gaming engine. Since its creation in 2004, the engine has been used to make games for a variety of platforms, and as of 2018, there were 4.6 million registered developers using it. To encourage innovation and resourceful management, Unity creates software development tools for game developers to employ when creating a game. Applications for VR, Virtual reality, and augmented reality use Unity 3D, which has been around for a while. It is a game engine that simulates the action and feelings of characters using artificial intelligence.",
      },
      {
        type: "p",
        text: "Any games created using the Unity 3D Engine and featuring artificial intelligence — such as computer enemies or non-player characters (NPCs) — are included in the AI Games category",
      },
      {
        type: "h2",
        text: "As a platform and game engine, Unity has aligned itself over the years to be at the forefront of all trends. This is one of its USPs. It not only supports the development of mobile games but also supports AR and VR elements in games as well.Notable features that add to its popularity include:",
      },

      {
        type: "p",
        text: "• Affordable Cost: Anyone can get started with Unity via its free version. And for veteran developers who are looking for extra features, affordable monthly plans do the trick.",
      },
      {
        type: "p",
        text: "• Less Code Dependency:Unity is beginner-friendly and does not require much prior coding knowledge. In fact, it is possible to create a game from scratch without even writing a single line of code.",
      },
      {
        type: "p",
        text: "•Strong Community Support: Unity sports a friendly community environment where developers can always reach out for and receive prompt help. ",
      },
      {
        type: "p",
        text: "• Graphic Suite: With a rich library of high-quality visual effects and high customization, Unity supports the development of intuitive games with smooth and natural movements and rendering.",
      },

      {
        type: "p",
        text: "To get started with Unity, you need to download it first. Head over to THIS LINK TO DOWNLOAD THE FREE VERSION OF UNITY. Once downloaded, launch the installer package and continue with the on-screen instructions to complete the installation.",
      },

      {
        type: "p",
        text: "Once you launch Unity for the first time, it would ask you to create a Unity ID. Next, select a Microgame, to begin with, your first Unity project. You can also select an Empty project to have zero preset elements and maximum flexibility.",
      },
      {
        type: "h2",
        text: "Unity's Role in the Metaverse:",
      },

      {
        type: "h2",
        text: "The metaverse will eventually become a setting where you can play video games in actual life. The concept behind the game is that you may play it whenever and where ever you want, and it will feel just like you are there. Virtual worlds with 3D technology have been created for decades by the business Unity Technologies.",
      },
      {
        type: "h2",
        text: "The impressiveness and realism of the metaverse games they have been developing are rapidly increasing. It will be able to explore virtual reality landscapes that offer a wide range of different games to play. We won’t be able to distinguish between these games and real life because of how realistic they are going to be.",
      },
      {
        type: "h2",
        text: "Some New Features and Updates in Unity 2020.1 Camera Stacking In Universal Render Pipeline",
      },
      {
        type: "p",
        text: "When building a game, there are many instances where you want to include something that is rendered out of the main camera’s context. For example, in a pause menu, you may want to display a version of your character, or in a mech game, you may need a special rendering setup for the cockpit.",
      },

      {
        type: "p",
        text: "You can now use CAMERA STACKING to layer the output of multiple Cameras and create a single combined output. It allows you to create effects such as a 3D model in a 2D user interface (UI), or the cockpit of a vehicle.SEE DOCUMENTATION for current limitations.",
      },
      {
        type: "h2",
        text: "Lighting Updates",
      },
      {
        type: "p",
        text: "Lighting Setting Assets let users change settings that are used by multiple Scenes simultaneously. This means that modifications to multiple properties can quickly propagate through your projects, which is ideal for lighting artists who may need to make global changes across several Scenes. It’s now much quicker to swap between lighting settings, for example, when moving between preview and production-quality bakes.",
      },
      {
        type: "p",
        text: "An important note: Lighting settings are no longer a part of the Unity Scene file; instead, they are now located in an independent file within the Project that stores all the settings related to precomputed Global Illumination.",
      },
      {
        type: "h2",
        text: "Overlap-Free Packing",
      },
      {
        type: "p",
        text: "To lightmap objects, they must first be “unwrapped” to flatten the geometry into 2D texture coordinates (UVs). That means that all faces must be mapped to a unique part of the lightmap. Areas that overlap can cause bleeding and other unwanted visual artifacts in the rendered result. To prevent bleeding between adjacent UV charts, geometry areas need sufficient padding into which lighting values can be dilated. This helps to ensure that the effect of texture filtering does not average-in values from neighboring charts, which may not correspond to expected lighting values at the UV border..",
      },
      {
        type: "p",
        text: "Unity’s automatic packing creates a minimum pack margin between lightmap UVs to allow for this dilation. This happens at import time. However, when using low texel densities in the Scene, or perhaps when scaling objects, the lightmap output may still have insufficient padding. To simplify the process of finding the required size for the pack margin at import, Unity now offers the “Calculate” Margin Method in the model importer. Here you can specify the minimum lightmap resolution at which the model will be used, as well as the minimum scale. From this input, Unity’s unwrapped calculates the required pack margin so no lightmaps overlap.",
      },
      {
        type: "h2",
        text: "GPU And CPU Lightmapper: Improved Sampling",
      },
      {
        type: "p",
        text: "Correlation in path tracing is a phenomenon where random samples throughout a light-mapped Scene can appear to be “clumped” or otherwise noisy. In 2020.1, we implemented a better decorrelation method for CPU and GPU Lightmappers. These decorrelation improvements are active by default and do not need any user input. The result is lightmaps that converge upon the noiseless result in less time and display fewer artifacts.",
      },
      {
        type: "p",
        text: "We have also increased the Lightmapper sample count limits from 100,000 to one billion samples. This can be useful for projects like architectural visualizations, where difficult lighting conditions can lead to noisy lightmap output. Further improvements are coming to this feature for 2020.2, which you can now preview in",
      },
      {
        type: "h2",
        text: "Streaming Virtual Texturing:",
      },
      {
        type: "p",
        text: "loading times when you have many high-resolution textures in your Scene. It works by splitting Textures into tiles, and progressively uploading these tiles to GPU memory when they are needed. It’s now supported in the High Definition Render Pipeline (9. x-Preview and later) and for use with SHADER GRAPH.",
      },
      {
        type: "p",
        text: "The Future Of Gaming Is Here With Unity And These Are Some Games Run In Metaverse",
      },
      {
        type: "h2",
        text: "In the future, we are going to be seeing more and more games in virtual reality. This is why Unity has created a platform that can be used for this type of gaming.",
      },
      {
        type: "ol",
        items: ["VulcanVerse", "Farmers World"],
      },
      {
        type: "p",
        text: "While in the past gamers usually played video games on their own PCs, consoles, or amusement arcades where they had to pay for the pleasure, these days in the era of play-to-earn games on blockchain-based platforms, metaverse games have given gamers the chance to earn off of their skills. While many of them have the reality of regular income — some can even earn six figures or more.",
      },
      {
        type: "p",
        text: "Making money in metaverse games can be achieved by buying, selling, trading, creating, or finding virtual items. Avatars, too — digital versions of people — are a big part of the Metaverse gaming ecosystem, with many startups entering the market whose laser focus is on building services for the creation of avatars solely for metaverse games.",
      },
      {
        type: "h2",
        text: "Read Also: https://www.linkedin.com/pulse/gaming-metaverse-earn-money-experience-bzanalytics/?trackingId=sCB1mOAWLDzagHOd50fmnw%3D%3D",
      },
    ],
  },
  {
    id: 9,
    slug: "top-nodejs-frameworks",
    title: "Top 7 Node Js Frameworks That Can Drive Success To Your Business",
    category: "Technology & Business",
    date: "Dec 27",
    readTime: "10 min read",
    image: "https://bzanalytics.ai/assets/images/blog/Blog_L1.jpg",

    content: [
      {
        type: "p",
        text: "Technology is ever-evolving, and there is no stop to it. Here the credit goes to our ever-expanding necessities that are looking for a tech solution to resolve them. In this run, thousands of new technological trends in the market benefitted users immensely.",
      },
      {
        type: "p",
        text: "No prize for guessing, but when it comes to a technology solution, then something that really triggers the attention is web and app development. These two aspects have transformed the way we access services around us. To make everything accessible and affordable, the worth of technologies, tools, and frameworks cannot be taken for granted.",
      },
      {
        type: "p",
        text: "Node.js has quickly become the go-to choice for businesses, as they are looking for an easy and fast way to build robust and scalable web applications.",
      },
      {
        type: "p",
        text: "Node.js has quickly become the go-to choice for businesses, as they are looking for an easy and fast way to build robust and scalable web applications.",
      },
      {
        type: "h2",
        text: "Overview Of Node.Js",
      },
      {
        type: "p",
        text: "Node.js is a JavaScript platform that is focused on real-time applications. It excels at events, real-time data, and APIs. It’s an event-driven, single-threaded, non-blocking language. It’s built for speed and is lightweight, making it easy to deploy on the web and mobile devices. It also facilitates parallelism by utilizing multiple processors and cores. It automatically scales the number of CPU or GPU cores used as needed, allowing you to use them efficiently. It is an open-source framework that has a shared repository of various modules Perfect choice for data-intensive web and App Can handle concurrent user traffic They are used for performance, as Node.js I/O operations are non-blocking. Its written code is compatible with many platforms. Node.js web apps are affordable to host compared to other platforms.",
      },
      {
        type: "h2",
        text: "Advantages Of Node JS",
      },
      {
        type: "h2",
        text: "Powered by JSON",
      },
      {
        type: "p",
        text: "Node.js is a JavaScript runtime built on Google’s V8 engine with immense capabilities. Developers highly use it for its robust data exchange format. It has gained popularity owing to its easy learning curve and support for various programming paradigms.",
      },
      {
        type: "h2",
        text: "Owned by Google",
      },
      {
        type: "p",
        text: "Node.js is owned by the Google V8 engine and works perfectly for the back end. Google released Node.js in 2009, and the JavaScript ecosystem exploded with numerous libraries and frameworks, making Node.js an indispensable part of any developer’s toolkit.",
      },

      {
        type: "h2",
        text: "Package Manager",
      },

      {
        type: "p",
        text: "The Node package manager (or npm) is the most popular package manager for node.js applications. It is how node.js packages are distributed and how they are installed. At the core of npm are a package search and delivery mechanism that makes it easy to discover and access the latest packages from npm and the npm Registry and to publish and share them.",
      },
      {
        type: "p",
        text: "A node package manager is a tool that allows developers to install, update, and remove existing Node.js modules. The name is derived from the npm package manager, which helps developers to manage their Node.js",
      },
      {
        type: "h2",
        text: "JavaScript",
      },
      {
        type: "p",
        text: "A Node.js app runs as a single process and can utilize multiple cores. One process handles all the incoming requests in this, while another takes all the outgoing responses. This process separation is achieved using a technique called `child_process,` which allows you to spawn multiple Node.js instances, each of which can handle requests and responses independently.",
      },
      {
        type: "h2",
        text: "Express.JS",
      },
      {
        type: "h2",
        text: "It is also called Simply Express and is an incredible choice for a backend web development platform. It can be used as an open-source, accessible platform and is currently being used by over 20 million websites. It offers a rich set of enterprise-grade or browser-based App development features, including templating robust routing security features alongside the error handling options. These features make JS the best suitable for developing enterprise-grade or browser-based apps. It is one of the fastest node frameworks with robust features that are perfect for flexible web app development, with easy-to-integrate instant API.",
      },
      {
        type: "h2",
        text: "Hapi.JS",
      },
      {
        type: "p",
        text: "Hapi.js is a secure, simple, and reliable service that is also an open-source framework of Node.js for web app development. It was created by Jez Humble and Ben Nadel in early 2013 and is currently maintained by the Node Foundation.",
      },
      {
        type: "p",
        text: "It can be used for developing web applications with an open-source platform Node.js. It is one of the most secure and reliable servers supporting protocols like HTTP/2, DNS, and IDN. It is simple to use and has good community support.",
      },

      {
        type: "h2",
        text: "NestJS",
      },
      {
        type: "p",
        text: "It is an excellent framework for creating modular and organized applications. It’s extensible, versatile, and progressive, making it an ideal choice for developers who want to create high-quality, scalable applications.",
      },
      {
        type: "h2",
        text: "An open-source, extensible, versatile, and progressive Node.js framework for building scalable and fault-tolerant applications. Its features make it a good fit for modern web development, such as its support for async/await and its ability to work with both Express and Connect applications.",
      },
      {
        type: "h2",
        text: "Meteor JS",
      },
      {
        type: "p",
        text: "Meteor JS is a full-stack JavaScript framework for building modern web and mobile applications. It provides a seamless integration between the client and server, allowing developers to write code in a single language.Meteor.js is a full-stack framework of Node.js, utilized for building real-time web and mobile apps. This framework provides reactive programming paradigms to build user interfaces that update in real-time based on user input or external system events.",
      },
      {
        type: "p",
        text: "Meteor.js is a JavaScript and server-side framework that makes it easy to build real-time web applications and APIs. The Meteor.js Platform is a new approach to developing fast, real-time, interactive web applications. Meteor.js applications are written in JavaScript, share the same interface across all platforms, and automatically compile the relevant runtime for each device. Meteor.js is used by thousands of developers around the world.",
      },
      {
        type: "h2",
        text: "Feathers.js",
      },
      {
        type: "p",
        text: "Feathers.js is the popular JavaScript Framework for backend development and ensures flexibility with Node.js and React native. Node.js is a platform that enables developers to create scalable applications and React Native is a mobile development platform from Facebook which allows developers to create native applications for iOS and Android devices. Backend development becomes more flexible using these two platforms, and developers can develop applications responsive to market changes.",
      },
      {
        type: "p",
        text: "Using Feathers.js, developers can build interactive UIs using real-time data without writing a single line of code. No coding or design skills are required to create an interactive application, and Feathers.js powers some of the most successful apps on the web. Developers use Feathers.js to build apps that work offline or online, can adapt to different screen sizes, and that load quickly.",
      },
      {
        type: "h2",
        text: "Total.js",
      },
      {
        type: "p",
        text: "Total.js offers a great CMS-like experience in the Node.js environment. This makes it perfect for managing content and building custom interfaces.",
      },
      {
        type: "p",
        text: "Total.js gives you a clean interface for creating and editing WordPress content. It’s great for small and midsize websites with a limited development team.Total.js is much better than other cms systems, which are overkill for your needs. It’s super easy to use and is powerful enough.",
      },
      {
        type: "h2",
        text: "Socket.IO",
      },
      {
        type: "p",
        text: "Socket.IO is one of the Node.js frameworks that are majorly used to produce real-time computing apps. It is prevalent for building real-time web applications and streaming applications. It has a huge community backing it and is very well documented.",
      },
      {
        type: "p",
        text: "It’s well known for its robustness and performance. It has an event-based model, which makes it perfect for real-time handling applications.",
      },
      {
        type: "h2",
        text: "Final Call",
      },
      {
        type: "p",
        text: "Node.js has become a de facto tool for web development companies. As the number of applications using Node has grown, so has the need for Node versions that run in a broader set of hosting environments. Node 8, the eighth version of Node, adds a range of new features that will improve the user experience and expand Node’s capabilities to make the web a better place. With so many choices, many people opt to use a popular, easy-to-use, and well-maintained framework, and they settle on one that doesn’t require much in the way of technical knowledge.",
      },
    ],
  },
];

export default function BlogPage() {
  const { slug } = useParams();

  const blog = blogsData.find((b) => b.slug === slug);
  if (!blog) {
    return <div className="text-white text-center py-20">Blog not found</div>;
  }

  return (
    <>
       <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />

        <BreadcrumbWrapper />
      </section>
      <div className="max-w-7xl mx-auto pl-3 pr-6 md:pl-24 md:pr-16 py-12">
        <div className="flex flex-col min-[1049px]:flex-row gap-6 items-start">
          {/* LEFT SIDE */}
          <div
            className="w-full md:w-[70%] text-white
          [&>h1]:text-[30px] [&>h1]:font-light [&>h1]:mb-[13px] [&>h1]:mt-6
          [&>h2]:text-[20px] [&>h2]:font-bold [&>h2]:mb-[13px] [&>h2]:mt-5
          [&>p]:text-[16px] [&>p]:leading-[1.875] [&>p]:tracking-[0.5px] [&>p]:mt-4
          [&>img]:rounded-xl [&>img]:my-5 [&>img]:border [&>img]:border-white"
          >
            {/* TOP IMAGE */}
            <div className="relative overflow-hidden mb-20">
              <img
                src={blog.image}
                alt="blog"
                className="w-full md:w-[700px] h-[360px] sm:h-[280px] md:h-[450px] object-cover"
              />

              {/* OVERLAY */}
              <div
                className="absolute bottom-0 left-0 w-full 
              h-[85%] sm:h-[75%] md:h-[45%] 
              bg-black/40 backdrop-blur-sm"
              ></div>

              {/* CONTENT */}
              <div className="absolute bottom-2 left-3 md:left-6 right-3 md:right-6 flex flex-col gap-1">
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 bg-white px-2 py-1.5 rounded-2xl w-fit max-w-full">
                  <span className="w-4 h-4 bg-[#4900a7] rounded-full shrink-0"></span>
                  <p className="text-[10px] sm:text-sm text-[#4900a7] break-words">
                    {blog.category}
                  </p>
                </div>

                {/* TITLE */}
                <h2 className="text-white text-[14px] md:text-[28px] font-bold leading-5 md:leading-9 mt-2 break-words">
                  {blog.title}
                </h2>

                {/* META */}
                <p className="text-white text-[11px] sm:text-[14px] mt-1">
                  {blog.date} • {blog.readTime}
                </p>
              </div>
            </div>
            {/*  */}
            <div className="block min-[1049px]:hidden mt-6 mb-20 space-y-6">
              <div>
                <h2 className="text-[18px] mb-4 font-semibold text-white">
                  In this article
                </h2>

                <p className="border-l-[3px] border-orange-500 pl-3 py-2 text-[#f79d0f]  text-[14px]">
                  RAG Transforming generative AI.
                </p>
              </div>
            </div>
            {/* BLOG CONTENT */}
            {blog.content.map((item, index) => {
              if (item.type === "h1") return <h1 key={index}>{item.text}</h1>;
              if (item.type === "h2") return <h2 key={index}>{item.text}</h2>;
              if (item.type === "p") return <p key={index}>{item.text}</p>;
              if (item.type === "img")
                return <img key={index} src={item.src} alt="" />;
              if (item.type === "ol" && item.items)
                return (
                  <ul key={index} className="list-disc pl-5 mt-4 space-y-3">
                    {item.items.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                );
              return null;
            })}
             {/* SHARE SECTION */}
      <div
        className="flex items-center justify-between flex-wrap gap-4"
        style={{
          marginTop: "24px",
          padding: "16px 20px",
          backgroundColor: "#f5900d",
          width: "100%",
          borderRadius: "14px",
        }}
      >
        <p style={{ color: "white", fontWeight: "600" }}>
          Like what you see? Share with friends
        </p>

        <div style={{ display: "flex", gap: "12px" }}>
          {[FaFacebookF, FaXTwitter, FaLinkedinIn].map((Icon, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "white",
                width: "34px",
                height: "34px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <Icon style={{ color: "#f5900d" }} />
            </div>
          ))}
        </div>
      </div>

      <hr className="mt-7 border-t border-gray-300 opacity-50" />
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-[40%] space-y-6">
            <div className="hidden min-[1049px]:block">
              <h2 className="text-[18px] lg:text-[20px] mb-4 lg:mb-6 font-semibold text-white">
                In this article
              </h2>

              <p className="border-l-[3px] border-orange-500 pl-3 py-2 text-[#f79d0f] text-[14px]">
                RAG Transforming generative AI.
              </p>
            </div>

            {/* SHARE BOX */}
            <div
              className="hidden md:flex bg-[#f5900d] mt-[380px] rounded-xl p-3 
    h-[100px] flex-col 
    w-[350px]
    max-w-[280px] md:max-w-[300px] lg:max-w-[380px]
    items-start gap-3
    sticky top-20"
            >
              <p className="text-white font-semibold text-[14px] md:text-[15px] lg:text-[16px]">
                Share with your community!
              </p>

              <div className="flex gap-2 md:gap-3 mb-2">
                {[FaFacebookF, FaXTwitter, FaLinkedinIn].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white rounded-lg flex items-center justify-center"
                  >
                    <Icon className="text-[#f5900d] text-[16px] md:text-[18px] lg:text-[20px]" />
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
    </>
  );
}
