import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className="w-full flex flex-col py-12">
      <div className="flex flex-col justify-center items-center gap-8 text-center">
        <span className="text-[#73026b] font-bold text-[16px]">CONTACT US</span>
        <span className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-bold text-[#333]">Contact Us</span>
        <span className="text-[34px] font-bold text-[#333] mt-[-24px] max-w-[1000px] ">
          Contact us for more information about our top-of-the-line
          cyber-security services.
        </span>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-6 my-14">
        <div className="bg-white h-full rounded-sm mx-auto p-4 flex flex-col justify-center items-start w-full md:w-1/3">
          <span className="text-[34px] font-bold text-black">
            Our Contact Info
          </span>
          <ul className="flex flex-col text-[15px] font-bold justify-start gap-5 py-10">
            <li>416 887 5555</li>
            <li>123 address st.</li>
            <li>email@example.com</li>
            <li>yourwebsite.com</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.073935149137!2d-80.49253342449052!3d43.45163867165552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf41a07d0bbf5%3A0x4923c3504be50b5c!2sVictoria%20Park%2C%20Kitchener%2C%20ON!5e0!3m2!1sen!2sca!4v1696754700611!5m2!1sen!2sca"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form
          className="mx-auto p-4 w-full md:w-2/3 bg-white rounded-sm"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Leave a Message
            </label>
            <textarea
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
              id="message"
              name="message"
              rows="5"
              placeholder="Leave a message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between md:mb-48">
            <button
              className="bg-[#73026b] hover:opacity-70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
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

export default Contact;
