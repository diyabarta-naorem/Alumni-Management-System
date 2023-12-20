import React from "react";
import phonePic from "../assets/phone.jpg";
import mtuMap from "../assets/mtuMap.jpg";

export default function Contact() {
  return (
    <div className="mt-[54px]">
      <div className="relative h-96">
        <img
          src={phonePic}
          alt="contactPic"
          className="h-[500px] w-full bg-cover bg-center object-cover md:h-96"
        ></img>
        <div className="absolute inset-0 p-16 md:p-32 bg-black bg-opacity-70 flex flex-col items-center h-[500px] z-20 space-y-4 md:h-96">
          <h1 className="text-white text-3xl font-bold text-center">
            Contact Us
          </h1>
          <p className="text-white text-center">
            Welcome to our Alumni Community! We're here to assist you and keep
            the lines of communication open.
            <br /> Whether you have questions, suggestions, or just want to
            reconnect, we're eager to hear from you.
          </p>
          <button className="bg-Bluee px-6 py-2 text-white ">Let's see</button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="mt-8 md:relative flex flex-col items-center justify-around rounded-md shadow-lg bg-blue-100 space-x-72 w-1/2 md:flex-row md:space-y-0 ">
          <div className="w-72 h-full md:absolute md:top-0 md:left-0">
            <img src={mtuMap} alt="mtuMap"></img>
          </div>
          <div className="w-1/2 p-5">
            <h1>SEND MESSAGE</h1>
            <div className="flex flex-col space-y-1">
              <h2 className="text-black">Name</h2>
              <input className="p-2 " type="text" />
            </div>
            <div className="flex flex-col space-y-1">
              <h2 className="text-black">Email</h2>
              <input className="p-2 " type="text" />
            </div>
            <div className="flex flex-col space-y-1">
              <h2 className="text-black">Subject</h2>
              <input className="p-2 " type="text" />
            </div>
            <div className="flex flex-col space-y-1">
              <h2 className="text-black">Message</h2>
              <textarea className="p-2 resize-none"></textarea>
            </div>
            <button className="bg-Bluee px-6 py-2 mt-4 text-white" type="submt">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
