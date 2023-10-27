import React from "react";
import Button from "../Buttons/Button";
function ContactUsForm() {
  return (
    <div>
      <div className="input__group flex flex-col md:flex-row pt-6">
        <div className="w-1/2 pr-5">
          <label htmlFor="name" className="text-xs pb-2 block font-semibold">
            Your Name *
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-[4px] border-[#A2A6B0] p-2"
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="email" className="text-xs pb-2 block font-semibold">
            Your Email *
          </label>
          <input
            type="text"
            placeholder="Your Email "
            className="w-full border rounded-[4px] border-[#A2A6B0] p-2"
          />
        </div>
      </div>
      <div className="w-1/2 pr-5 pt-5">
        <label htmlFor="phone" className="text-xs pb-2 block font-semibold">
          Your Phone Number
        </label>
        <input
          type="text"
          placeholder="Your Phone Number"
          className="w-full border rounded-[4px] border-[#A2A6B0] p-2"
        />
      </div>
      <div className=" pt-5">
        <label htmlFor="phone" className="text-xs pb-2 block font-semibold">
          What’s on your mind? *
        </label>
        <textarea
          type="text"
          placeholder="Jot us a note and we’ll get back to you as quickly as possible"
          className="w-full border rounded-[4px] border-[#A2A6B0] p-2 resize-none"
          rows={7}
        />
      </div>
      <Button className="bg-[#0156FF] px-16 py-3 rounded-[50px] text-white text-sm mb-2 mt-6">
        Submit
      </Button>
    </div>
  );
}

export default ContactUsForm;
