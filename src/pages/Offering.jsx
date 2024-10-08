import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/offering-1.jpg";
import image2 from "../assets/offering-2.jpg";
import image3 from "../assets/offering-3.jpg";

const Offering = () => {
  return (
    <div className="w-full flex flex-col py-12">
      <div className="flex flex-col justify-center items-center gap-8 text-center">
        <span className="text-[#73026b] font-bold text-[16px]">
          OUR OFFERING
        </span>
        <span className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-bold text-[#333]">
          We prevent cyber-security attacks and provide services such as
          vulnerability analysis and penetration testing.
        </span>
      </div>

      <div className="w-full flex flex-col py-12 px-4 gap-8 text-center">
        <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row min-h-[400px] flex-1 bg-white">
          <img src={image1} className="h-full w-full md:w-3/5" />
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[25px] text-[#333]">
            Exceptional IT professionals
            </span>
            <span className="text-[18px]">
            Our IT experts have been trained, and our main goal is to keep you, your home, and organization safe no matter what.
            </span>
          </div>
        </div>
        <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row-reverse min-h-[400px] flex-1 bg-white">
          <img src={image2} className="h-full w-full md:w-3/5" />
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[25px] text-[#333]">
            Reliable support
            </span>
            <span className="text-[18px]">
            Our support team is super responsive and always available to serve you. Expect us to let you know everything we are doing to guarantee the safety of your data
            </span>
          </div>
        </div>
        <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row min-h-[400px] flex-1 bg-white">
          <img src={image3} className="h-full w-full md:w-3/5" />
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[25px] text-[#333]">
              Various cybersecurity services
            </span>
            <span className="text-[18px]">
              We offer a wide pool of cybersecurity services for our clients,
              including outsourced IT service and systems auditing.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f4] w-full py-24 flex flex-col justify-center items-center text-center gap-1">
        <span className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] text-black font-regular max-w-[1000px] px-8">
          zero day security has enabled me to keep my company safe from hackers
          for years. I highly recommend them.
        </span>
        <span>- Jane Smith</span>
      </div>
      <div className="bg-transparent w-full py-12 flex flex-col justify-center items-center text-center gap-3">
        <span className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] text-black font-semibold max-w-[800px] px-8">
          Contact us for more information about our top-of-the-line
          cyber-security services. 
        </span>
        <Link
          to="/contact"
          className="w-[170px] h-[50px] bg-[#73026b] hover:opacity-70 text-white text-[15px] font-bold rounded-sm flex justify-center items-center"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Offering;
