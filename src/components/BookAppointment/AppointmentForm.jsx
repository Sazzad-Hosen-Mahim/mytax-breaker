import React, { useState } from "react";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import SelectField from "./SelectField";
import TimePicker from "./TimePicker";
import TextAreaField from "./TextAreaField";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  // Function to format time as HH:MM AM/PM
  const formatTime = (time) => {
    const [hours, minutes] = time.split(":");
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    return `${formattedHours}:${minutes} ${period}`;
  };

  const onSubmit = async (data) => {
    // Format the time to HH:MM AM/PM
    const formattedTime = formatTime(data.time);

    // Combine date and time into a single ISO string
    const dateObj = new Date(data.date);
    const [hours, minutes] = data.time.split(":");
    dateObj.setUTCHours(hours, minutes, 0, 0);

    // Prepare the payload
    const payload = {
      fullName: data.fullName,
      email: data.email,
      service: data.service,
      phoneNumber: data.phoneNumber,
      subject: data.subject,
      date: dateObj.toISOString(),
      time: formattedTime, // Use the formatted time
      message: data.message,
    };

    setIsLoading(true);
    const loadId = toast.loading("Creating........", { position: "top-right" });

    try {
      const response = await axios.post(
        "https://appoinment-server-h773.onrender.com/api/appointments",
        payload
      );
      toast.dismiss(loadId);
      toast.success("Created Successfully", { position: "top-right" });
      reset();
    } catch (error) {
      toast.dismiss(loadId);
      if (error.response && error.response.data) {
        const validationErrors = error.response.data;
        validationErrors.forEach((err) => {
          toast.error(`Validation Error: ${err.message}`, {
            position: "top-right",
          });
        });
      } else {
        toast.error("Something went wrong", { position: "top-right" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[1479px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[75px] -mt-[150px] lg:-mt-[380px] my-12">
      {/* Form Section */}
      <div className="w-full border border-[#EDF3F2] shadow-[-1.35px_18.89px_180.83px_0px_#0A303D1A] bg-white rounded-lg p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16">
        <form
          className="grid grid-cols-1 md:gap-[10px] md:grid-cols-2 2xl:gap-[30px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Full Name & Email */}
          <InputField
            label="Full Name"
            name="fullName"
            register={register}
            placeholder="Enter your full name"
            errors={errors}
            rules={{ required: "Name is required" }}
          />
          <InputField
            label="Your Email"
            name="email"
            register={register}
            placeholder="Enter your email"
            errors={errors}
            rules={{ required: "Email is required" }}
          />

          {/* Select Service & Phone Number */}
          <SelectField
            label="Select Service"
            name="service"
            register={register}
            options={[
              { value: "Financial Service", label: "Financial Service" },
              { value: "Task Control", label: "Task Control" },
              { value: "Financial Growth", label: "Financial Growth" },
              { value: "Capital Investments", label: "Capital Investments" },
            ]}
            errors={errors}
            rules={{ required: "Service is required" }}
          />
          <InputField
            label="Your Phone"
            name="phoneNumber"
            register={register}
            placeholder="+1234567890"
            helperText="Please enter a valid phone number (e.g., +1234567890 or 123-456-7890)"
            errors={errors}
            rules={{
              required: "Phone is required",
              pattern: {
                value: /^\+?[1-9]\d{1,14}$/, // Regex for international phone numbers
                message: "Invalid phone number format",
              },
            }}
          />

          {/* Subject - Takes Full Width */}
          <div className="col-span-1 md:col-span-2">
            <InputField
              label="Subject"
              name="subject"
              register={register}
              placeholder="How can we help?"
              errors={errors}
              rules={{ required: "This field is required" }}
            />
          </div>

          {/* Date & Time */}
          <InputField
            label="Select Date"
            name="date"
            register={register}
            type="date"
            errors={errors}
            rules={{ required: "Date is required" }}
          />
          <TimePicker
            label="Select Time"
            name="time"
            register={register}
            errors={errors}
            rules={{ required: "Time is required" }}
          />

          {/* Message - Full Width */}
          <div className="col-span-1 md:col-span-2">
            <TextAreaField
              label="Message"
              name="message"
              register={register}
              placeholder="Enter your message here..."
              errors={errors}
              rules={{ required: "Message is required" }}
            />
          </div>

          {/* Submit Button - Full Width */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#A7EB94] lg:h-[80px] text-[#004D3F] lg:text-[26px] py-3 rounded-md hover:bg-green-600 hover:text-white transition-all cursor-pointer"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default AppointmentForm;
