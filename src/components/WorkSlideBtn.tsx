"use client";
import { useSwiper } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function WorkSlideBtn() {
  const swiper = useSwiper();
  return (
    <div className="flex gap-2 absolute right-0 bottom-[calc(50%-20px)] lg:bottom-0 w-full z-20 justify-between lg:max-w-[100px] lg:justify-none float-right ">
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
        className="w-[44px] h-[44px] bg-green-500 hover:bg-green-600 text-[22px] flex items-center justify-center rounded-sm transition-all duration-300  text-gray-800 hover:text-gray-900"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
        className="w-[44px] h-[44px] bg-green-500 hover:bg-green-600 text-[22px] flex items-center justify-center rounded-sm transition-all duration-300 text-gray-800 hover:text-gray-900"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default WorkSlideBtn;
