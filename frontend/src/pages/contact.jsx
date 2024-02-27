import React from "react";
import Upsection from "../common/upSection";
import { UpsectionContent } from "../DataJs/upSecData";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
  return (
    <div className="mt-[54px] w-full font-poppins mb-10 ">
      <Upsection title={UpsectionContent[0].title} description={UpsectionContent[0].description} />
      <section className=" w-full overflow-hidden">
        <h1 className="mt-8 text-center text-4xl font-bold">Get In Touch</h1>
      <div className="mt-4 mx-auto flex flex-col-reverse space-y-1 md:flex-row items-center w-5/6 md:space-x-3 md:space-y-0 border border-gray-300 shadow-lg shadow-gray-400 rounded-lg md:w-[900px] md:h-[500px]">
        {/* img*/}
          <div className="hidden md:block md:w-[400px] md:h-full p-5">
            {/*
            <NavLink to="https://www.google.com/maps/place/Manipur+Technical+University/@24.7972741,93.9024575,17z/data=!3m1!4b1!4m6!3m5!1s0x3749262a5adc967b:0x65df1fde96bcb382!8m2!3d24.7972741!4d93.9050324!16s%2Fg%2F11cpfzvq43?entry=ttu">
               <img src={mtuMap} alt="contactImg" className="object-cover hidden mt-4 rounded-lg shadow-lg shadow-gray-500  w-auto mx-auto md:mt-0 md:h-[550px] md:rounded-r-none transform duration-200 md:block hover:scale-105" /> 
            </NavLink> */}

            <iframe className="" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7243.893661308951!2d93.9050324!3d24.7972741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3749262a5adc967b%3A0x65df1fde96bcb382!2sManipur%20Technical%20University!5e0!3m2!1sen!2sin!4v1703759951766!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="mtuMap">
            </iframe>
          </div>
        <div className="flex-1">
          <form className="p-9 space-y-3 md:space-y-1" action="">
          <h1 className="font-semibold mb-3 text-xl">SEND MESSAGE</h1>
            <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-3 ">
              <div>
                <label for="name">Name</label>
                <input type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 focus:ring-blue-600"placeholder="Enter your name"  required="#"/>
              </div>
              <div>
                <label for="email">Email</label>
                <input type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 focus:ring-blue-600"placeholder="Enter your email"  required="#"/>
              </div>
            </div>
            <label for="subject">Subject</label>
            <input type="text"
              name="subject"
              id="subject"
              className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 focus:ring-blue-600" placeholder="Subject" />
            <label>Message</label>
            <textarea
              className="resize-none bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 h-[200px] border-gray-600 focus:ring-blue-600" placeholder="Type your message here" required="#" />
            <button type="submit" className="px-2 py-2 mx-auto block bg-blue-600 font-medium text-white text-sm rounded-lg ">Submit Here</button>
            
          </form>
          </div>
          
        </div>
        <NavLink to="https://www.google.com/maps/place/Manipur+Technical+University/@24.7972741,93.9024575,17z/data=!3m1!4b1!4m6!3m5!1s0x3749262a5adc967b:0x65df1fde96bcb382!8m2!3d24.7972741!4d93.9050324!16s%2Fg%2F11cpfzvq43?entry=ttu" title="mtuMap" className="md:hidden">
          <div className="flex flex-col items-center justify-center p-3 border border-gray-300 w-5/6 rounded-lg shadow-lg shadow-gray-500 mx-auto mt-7 mb-6">
            <FontAwesomeIcon icon={faLocationDot} className="text-red-600 text-2xl"/>
            <h1 className="text-lg text-center text-blue-900 font-semibold">Manipur Technical University</h1>
            <p className="text-center text-sm text-gray-600">Takyelpat,Takyel, Imphal, Manipur 795004</p>
          </div>
        </NavLink>
      </section>

      
    </div>
  );
}
