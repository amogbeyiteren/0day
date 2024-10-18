import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/0day-security-offering-1.jpg";
import image2 from "../assets/0day-security-offering-2.jpg";
import image3 from "../assets/0day-security-offering-3.jpg";
import image4 from "../assets/0day-security-offering-4.jpg";
import image5 from "../assets/0day-security-offering-5.jpg";
import image6 from "../assets/0day-security-offering-6.jpg";
import image7 from "../assets/0day-security-offering-7.jpg";
import image8 from "../assets/0day-security-offering-8.jpg";
import image9 from "../assets/0day-security-offering-9.jpg";
import image10 from "../assets/0day-security-offering-10.jpg";
import image11 from "../assets/0day-security-offering-11.jpg";
import image12 from "../assets/0day-security-offering-12.jpg";

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

      {/* <div className="w-full flex flex-col py-12 px-4 gap-8 text-center">
        <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row min-h-[400px] flex-1 bg-white">
          <img src={image1} className="h-full w-full md:w-3/5 md:h-[400px]" />
          <div className="flex flex-col gap-4">
            <span  className="font-bold text-[25px] text-[#333]">
            Exceptional IT professionals
            </span>
            <span className="text-[18px]">
            Our IT experts have been trained, and our main goal is to keep you, your home, and organization safe no matter what.
            </span>
          </div>
        </div>
        <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row-reverse min-h-[400px] flex-1 bg-white">
          <img src={image2} className="h-full w-full md:w-3/5 md:h-[400px]" />
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
          <img src={image3} className="h-full w-full md:w-3/5 md:h-[400px]" />
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
      </div> */}
      <div className="w-full flex flex-col py-12 px-4 gap-8 text-center">
  {/* Item 1 - vCISO */}
  <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row min-h-[400px] flex-1 bg-white">
    <img src={image1} className="h-full w-full md:w-3/5 md:h-[400px]" />
    <div className="flex flex-col gap-4">
      <span className="font-bold text-[25px] text-[#333]">vCISO (Virtual Chief Information Security Officer)</span>
      <span className="text-[18px]">
        A vCISO provides virtual or outsourced chief information security officer services to organizations. 0day Security's vCISO service is customizable to protect systems and data from cyber threats.
      </span>
    </div>
  </div>
  
  {/* Item 2 - Secure Code Review */}
  <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row-reverse min-h-[400px] flex-1 bg-white">
    <img src={image2} className="h-full w-full md:w-3/5 md:h-[400px]" />
    <div className="flex flex-col gap-4">
      <span className="font-bold text-[25px] text-[#333]">Secure Code Review</span>
      <span className="text-[18px]">
        0day Security's team evaluates the source code of applications to identify and fix potential security vulnerabilities, offering a report with recommendations and a remediation roadmap.
      </span>
    </div>
  </div>
  
  {/* Item 3 - API Security Testing */}
  <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row min-h-[400px] flex-1 bg-white">
    <img src={image3} className="h-full w-full md:w-3/5 md:h-[400px]" />
    <div className="flex flex-col gap-4">
      <span className="font-bold text-[25px] text-[#333]">API Security Testing</span>
      <span className="text-[18px]">
        0day Security simulates real-world attacks on APIs to identify vulnerabilities such as SQL injection and XSS, and provides a detailed report with remediation recommendations.
      </span>
    </div>
  </div>
  
  {/* Item 4 - Fraud & Forensic Review */}
  <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row-reverse min-h-[400px] flex-1 bg-white">
    <img src={image4} className="h-full w-full md:w-3/5 md:h-[400px]" />
    <div className="flex flex-col gap-4">
      <span className="font-bold text-[25px] text-[#333]">Fraud & Forensic Review</span>
      <span className="text-[18px]">
        0day Security provides customized fraud risk management services, conducting forensic reviews to identify potential fraud risks and assess their likelihood and impact.
      </span>
    </div>
  </div>

  {/* Item 5 - Compliance & Risk Management */}
  <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row min-h-[400px] flex-1 bg-white">
    <img src={image5} className="h-full w-full md:w-3/5 md:h-[400px]" />
    <div className="flex flex-col gap-4">
      <span className="font-bold text-[25px] text-[#333]">Compliance & Risk Management</span>
      <span className="text-[18px]">
        0day Security helps clients navigate regulatory environments through compliance audits, risk management, and training to protect businesses from potential threats.
      </span>
    </div>
  </div>
  
  {/* Item 6 - Vulnerability Assessment & Penetration Testing */}
  <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row-reverse min-h-[400px] flex-1 bg-white">
    <img src={image6} className="h-full w-full md:w-3/5 md:h-[400px]" />
    <div className="flex flex-col gap-4">
      <span className="font-bold text-[25px] text-[#333]">Vulnerability Assessment & Penetration Testing</span>
      <span className="text-[18px]">
        0day Security conducts penetration tests to assess security vulnerabilities and their business impacts, providing actionable insights for management to prioritize countermeasures.
      </span>
    </div>
  </div>

  {/* Item 7 - Internal Control & Technology Audit */}
  <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row min-h-[400px] flex-1 bg-white">
    <img src={image7} className="h-full w-full md:w-3/5 md:h-[400px]" />
    <div className="flex flex-col gap-4">
      <span className="font-bold text-[25px] text-[#333]">Internal Control & Technology Audit</span>
      <span className="text-[18px]">
        0day Security assesses and improves internal controls and technology systems, identifying control deficiencies and ensuring compliance with industry standards.
      </span>
    </div>
  </div>
  
  {/* Item 8 - Incident Response Retainer */}
  <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row-reverse min-h-[400px] flex-1 bg-white">
    <img src={image8} className="h-full w-full md:w-3/5 md:h-[400px]" />
    <div className="flex flex-col gap-4">
      <span className="font-bold text-[25px] text-[#333]">Incident Response Retainer</span>
      <span className="text-[18px]">
        0day Security offers incident response services, including threat intelligence, incident management, and recovery support to help organizations handle security breaches effectively.
      </span>
    </div>
  </div>

  {/* Item 9 - Cloud Security Services */}
  <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row min-h-[400px] flex-1 bg-white">
    <img src={image9} className="h-full w-full md:w-3/5 md:h-[400px]" />
    <div className="flex flex-col gap-4">
      <span className="font-bold text-[25px] text-[#333]">Cloud Security Services</span>
      <span className="text-[18px]">
        0day Security provides cloud security services, including encryption, secure access management, and compliance support, to protect sensitive data in the cloud.
      </span>
    </div>
  </div>

  {/* Item 10 - KYC Risk & Control Self Assessments */}
  <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row-reverse min-h-[400px] flex-1 bg-white">
    <img src={image10} className="h-full w-full md:w-3/5 md:h-[400px]" />
    <div className="flex flex-col gap-4">
      <span className="font-bold text-[25px] text-[#333]">KYC Risk & Control Self Assessments</span>
      <span className="text-[18px]">
        0day Security ensures compliance with KYC regulations, assessing risks related to customer onboarding, evaluating control effectiveness, and providing employee training.
      </span>
    </div>
  </div>

  {/* Item 11 - ISO Standards Review & Implementation */}
  <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row min-h-[400px] flex-1 bg-white">
    <img src={image11} className="h-full w-full md:w-3/5 md:h-[400px]" />
    <div className="flex flex-col gap-4">
      <span className="font-bold text-[25px] text-[#333]">ISO Standards Review & Implementation</span>
      <span className="text-[18px]">
        0day Security helps organizations implement ISO standards in quality management, information security, and more, ensuring compliance and coordinating external audits.
      </span>
    </div>
  </div>

  {/* Item 12 - PCI DSS Implementation & Compliance */}
  <div className="flex justify-center items-start md:items-center text-start p-4 md:p-8 gap-1 md:gap-16 flex-col md:flex-row-reverse min-h-[400px] flex-1 bg-white">
    <img src={image12} className="h-full w-full md:w-3/5 md:h-[400px]" />
    <div className="flex flex-col gap-4">
      <span className="font-bold text-[25px] text-[#333]">PCI DSS Implementation & Compliance</span>
      <span className="text-[18px]">
        0day Security assists organizations in meeting PCI DSS requirements, securing cardholder data through security evaluations and audit preparation.
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
