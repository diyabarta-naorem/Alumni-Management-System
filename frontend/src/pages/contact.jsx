import React from "react";
import mtuMap from "../assets/mtuMap.jpg";
import Upsection from "../common/upSection";
import { UpsectionContent } from "../upSecData";


export default function Contact() {
  return (
    <div className="mt-[54px] w-full font-poppins">
      <Upsection title={UpsectionContent[0].title } description={UpsectionContent[0].description} />
      <div className="flex items-center justify-center">
        <div className="mt-8 md:relative flex flex-col items-center justify-around rounded-md shadow-lg bg-blue-100 space-x-72 w-1/2 md:flex-row md:space-y-0 ">
        <div className="w-72 h-full md:absolute md:top-0 md:left-0">
          <img src={mtuMap} alt="mtuMap"></img>
        </div>
        <div className="w-1/2 p-5">
          <h1>SEND MESSAGE</h1>
          <div className="flex flex-col space-y-1">
            <h2 className="text-black">Name</h2>
            <input className="p-2 " type="text"/>
          </div>
          <div className="flex flex-col space-y-1">
            <h2 className="text-black">Email</h2>
            <input className="p-2 " type="text"/>
          </div>
          <div className="flex flex-col space-y-1">
            <h2 className="text-black">Subject</h2>
            <input className="p-2 " type="text"/>
          </div>
          <div className="flex flex-col space-y-1">
            <h2 className="text-black">Message</h2>
            <textarea className="p-2 resize-none"></textarea>
          </div>
          <button className="bg-Bluee px-6 py-2 mt-4 text-white" type="submt">Submit</button>
        </div>
      </div>
      </div>
    </div>
  );
}
