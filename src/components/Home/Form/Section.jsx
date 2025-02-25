import React from 'react'
import ContactForm from './Form'
import Card from './component/Card'
import { Mail } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import { MapPin } from 'lucide-react';

function Section() {
  return (
    <div className=" flex flex-col md:flex-row p-12 md:p-40  gap-2 md:gap-10 ">
      {/* Left Section */}
      <div className="  w-full lg:w-[350px] grow flex flex-col p-6 items-center md:items-end">
        {/* "Get in touch" and Cards Container */}
        <div className="flex flex-col gap-4 w-full md:w-[338px] ">
          {/* "Get in touch" Text */}
          <p className="text-[#0C121D] text-4xl font-bold mb-2">Get in touch</p>
          {/* Cards */}
          <div className="flex flex-col gap-4">
            <Card title={"send a message"} icon={<Mail/>} key={"1"} description={"info@strategyflow.com"}/>
            <Card title={"call me today"} icon={ <PhoneCall />} key={"2"} description={"+6436336445"}/>
            <Card title={"Share a location"} icon={ <MapPin />} key={"3"} description={"South Australia"}/>
          </div>
        </div>
      </div>

      {/* Right Section (Contact Form) */}
      <div className="w-full max-w-[1000px] p-4 sm:p-6">

        <ContactForm />
      </div>
    </div>
  )
}

export default Section