import React from "react";
import mtuMap from "../assets/MTUmap.png";
import Upsection from "../common/upSection";
import { UpsectionContent } from "../upSecData";


export default function Contact() {
  return (
    <div className="mt-[54px] w-full font-poppins">
      <Upsection title={UpsectionContent[0].title} description={UpsectionContent[0].description} />
     <section className="h-screen">
      <div className="mt-10 mx-auto flex flex-col space-y-10 md:flex-row items-center w-5/6 md:space-x-3 md:space-y-0 border border-gray-300 shadow-lg shadow-gray-400 rounded-lg md:w-[900px]">
        {/* img*/}
        <div className="">
          <img src={mtuMap} alt="contactImg" className="h-[400px] mt-4 rounded-lg shadow-lg shadow-gray-500 w-auto mx-auto md:mt-0 md:h-[550px] md:rounded-r-none"/>
        </div>
        <div>
          <form className="p-9 space-y-3 md:space-y-1 md:ml-10" action="">
          <h1 className="font-medium text-xl">SEND MESSAGE</h1>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-3">
              <div>
                <label for="name">Name</label>
                <input type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 focus:ring-blue-600"placeholder="Enter your name"  required=""/>
              </div>
              <div>
                <label for="email">Email</label>
                <input type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 focus:ring-blue-600"placeholder="Enter your email"  required=""/>
              </div>
            </div>
            <label for="subject">Subject</label>
            <input type="text"
              name="subject"
              id="subject"
              className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 focus:ring-blue-600" placeholder="Enter your subject" />
            <label>Message</label>
            <textarea
              className="mb-3 resize-none bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 h-[200px] border-gray-600 focus:ring-blue-600" placeholder="Type your message here" required="" />
            <button type="submit" className="px-2 py-2 bg-blue-600 text-white text-sm rounded-lg">SubmitHere</button>
            
          </form>
        </div>
        </div>
       </section>
    </div>
  );
}
