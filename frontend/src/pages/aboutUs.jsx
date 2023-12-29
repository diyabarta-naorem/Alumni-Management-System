import Upsection from "../common/upSection";
import { UpsectionContent } from "../upSecData";
import welcomePic from "../assets/aboutUs/welcome.jpg";
export default function AboutUs() {
    return(
      <div className="mt-[54px]">
        <Upsection title={UpsectionContent[2].title} description={UpsectionContent[2].description} />
        <section className="bg-blue-100 p-7 md:pt-32 md:px-48 md:relative">
          <div className=" bg-white flex-col rounded-lg p-3 md:py-10 md:flex-none ">
            <div className=" md:left-24 md:bottom-28 md:right-12 md:absolute">
              <img src={welcomePic}  alt="welcomingPic" className="shadow-lg shadow-gray-700 md:w-1/3 rounded-2xl"/>
            </div>
            <div className=" flex flex-col items-center justify-center md:w-1/2 md:ml-[450px] md:max-w-[600px]">
              <h1 className="text-4xl font-bold font-poppins text-center md:text-left">Welcome to Manipur Technical University</h1>
              <h1 className="text-2xl font-poppins font-semibold md:text-left md:w-full">Alumni Association</h1>
              <p className="font-normal text-gray-700 font-poppins text-center md:text-left">At Manipur Technical University, we believe in the enduring connection that spans beyond graduation. The Alumni Association serves as the bridge between the university and its
                graduates, fostering a lifelong relationship and a sense of pride in being a part of our esteemed community.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
}