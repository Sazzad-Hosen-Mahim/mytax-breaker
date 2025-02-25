import React from "react";

const ContactForm = () => {
  return (

    <div className="w-full max-w-[900px] bg-[#A7EB94] rounded-[30px] p-6 sm:p-10 relative">
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-8 sm:gap-y-10">
        {/* Name Field */}
        <div className="w-full">
          <label
            htmlFor="name"
            className="block text-[18px] sm:text-[20px] text-[#045141] font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John"
            className="w-full h-[50px] border border-[#04514130] rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Email Field */}
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-[18px] sm:text-[20px] text-[#045141] font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="info@strategyflow.com"
            className="w-full h-[50px] border border-[#04514130] rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Office Field */}
        <div className="w-full">
          <label
            htmlFor="office"
            className="block text-[18px] sm:text-[20px] text-[#045141] font-semibold mb-2"
          >
            Office
          </label>
          <input
            type="text"
            id="office"
            placeholder="South Australia"
            className="w-full h-[50px] border border-[#04514130] rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Phone Field */}
        <div className="w-full">
          <label
            htmlFor="phone"
            className="block text-[18px] sm:text-[20px] text-[#045141] font-semibold mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+756 235 9043"
            className="w-full h-[50px] border border-[#04514130] rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Message Field */}
        <div className="col-span-1 sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-[18px] sm:text-[20px] font-semibold text-[#045141] mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message..."
            className="w-full h-[150px] border border-[#04514130] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 sm:col-span-2 flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-[200px] h-[50px] sm:h-[60px] bg-[#045141] text-[#A7EB94] rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
   
  );
};

export default ContactForm;
