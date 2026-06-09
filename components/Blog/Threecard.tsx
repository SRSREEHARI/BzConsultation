import React from 'react'

const Threecard = () => {
  return (
    <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 items-stretch">
      {/* card1 */}
  
            <div className="w-full max-w-[374px] h-full bg-[#f7f7f7] rounded-[10px] shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_6px_20px_rgba(0,0,0,0.19)] pt-[10px] px-[10px] pb-[20px] flex flex-col text-[14px] sm:text-[16px] font-medium leading-[24px] sm:leading-[30px] tracking-[0.5px] transition-transform duration-300 ease-in hover:scale-105">
              <img
                src="https://bzanalytics.ai/assets/images/blog/rag-l.jpg"
                className="w-full h-[160px] sm:h-[180px] object-cover rounded-[10px]"
                alt="blog"
              />

              <div className="flex flex-col flex-grow gap-[6px] mt-[8px]">
                <div className="flex items-center text-blue-800">
                  <span className="text-xl sm:text-2xl mr-2 -translate-y-1">
                    •
                  </span>
                  <span>Technology & Business</span>
                </div>

                <h6 className="text-black font-semibold text-[18px] leading-[22px] mb-2 tracking-[0.5px] line-clamp-2">
                 Bridging the Gap: How RAG (Retrieval Augmented Generation) is Transforming Generative AI
                </h6>

                <span className="text-black text-xs sm:text-sm mt-1">
                 Apr 15 • 10 min read
                </span>
              </div>
            </div>
       
      {/* card2 */}
      <div className="w-full max-w-[374px] h-full bg-[#f7f7f7] rounded-[10px] shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_6px_20px_rgba(0,0,0,0.19)] pt-[10px] px-[10px] pb-[20px] flex flex-col text-[14px] sm:text-[16px] font-medium leading-[24px] sm:leading-[30px] tracking-[0.5px] transition-transform duration-300 ease-in hover:scale-105">
              <img
                src="https://bzanalytics.ai/assets/images/blog/fashion-l.jpg"
                className="w-full h-[160px] sm:h-[180px] object-cover rounded-[10px]"
                alt="blog"
              />

              <div className="flex flex-col flex-grow gap-[6px] mt-[8px]">
                <div className="flex items-center text-blue-800">
                  <span className="text-xl sm:text-2xl mr-2 -translate-y-1">
                    •
                  </span>
                  <span>Technology & Business</span>
                </div>

                <h6 className="text-black font-semibold text-[18px] leading-[22px] mb-2 tracking-[0.5px] line-clamp-2">
                Unlocking the Future of Fashion : The Power of Virtual Try-On and Digital Innovation
                </h6>

                <span className="text-black text-xs sm:text-sm mt-1">
                 Apr 14 • 10 min read
                </span>
              </div>
            </div>
            {/*card3  */}
             <div className="w-full max-w-[374px] h-full bg-[#f7f7f7] rounded-[10px] shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_6px_20px_rgba(0,0,0,0.19)] pt-[10px] px-[10px] pb-[20px] flex flex-col text-[14px] sm:text-[16px] font-medium leading-[24px] sm:leading-[30px] tracking-[0.5px] transition-transform duration-300 ease-in hover:scale-105">
              <img
                src="https://bzanalytics.ai/assets/images/blog/Blog_L11.jpg"
                className="w-full h-[160px] sm:h-[180px] object-cover rounded-[10px]"
                alt="blog"
              />

              <div className="flex flex-col flex-grow gap-[6px] mt-[8px]">
                <div className="flex items-center text-blue-800">
                  <span className="text-xl sm:text-2xl mr-2 -translate-y-1">
                    •
                  </span>
                  <span>Technology & Business</span>
                </div>

                <h6 className="text-black font-semibold text-[18px] leading-[22px] mb-2 tracking-[0.5px] line-clamp-2">
             Applications Of Machine Learning In The Fashion Industry
                </h6>

                <span className="text-black text-xs sm:text-sm mt-1">
                 Oct 20 • 10 min read
                </span>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Threecard
