import React from 'react'
import { Link } from "react-router-dom";
import image1 from "../assets/about-1.jpg";
import image2 from "../assets/about-2.jpg";
import image3 from "../assets/about-3.jpg";

const About = () => {
  return (
    <div className="w-full flex flex-col py-12">
      <div className="flex flex-col justify-center items-center gap-8 text-center">
        <span className="text-[#73026b] font-bold text-[16px]">
          ABOUT
        </span>
        <span className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-bold text-[#333]">
        We are the most efficient and innovative cybersecurity firm in Kitchener.
        </span>
      </div>

      <div className="w-full flex flex-col p-10 gap-10 text-center bg-white">
        <div className='w-full flex flex-row flex-wrap gap-5 justify-center items-center'>
          <img
          className='h-[260px] w-full flex-1'
          src={image1}
          />
          <img
          className='h-[260px] w-full flex-1'
          src={image2}
          />
          <img
          className='h-[260px] w-full flex-1'
          src={image3}
          />

        </div>
        
        <span className='text-black text-[18px] sm:text-[25px] text-start'>At zero day security, we know that cyber-security attacks have increased now more than ever. We intend to strengthen your security systems at home and work. We offer the technical support and software tools you need to keep hackers away. Other services we provide include systems auditing, vulnerability consulting and analysis, managed services, and penetration testing. We work around the clock to meet each of your unique needs. With our protection, you can relax, knowing that everything you own is safe.</span>
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
  )
}

export default About


