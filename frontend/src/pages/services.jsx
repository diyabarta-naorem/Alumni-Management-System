import Upsection from "../common/upSection"
import { UpsectionContent } from "../DataJs/upSecData"
import CommPic from "../assets/Services/communication&support.webp"
import ReconnectPic from "../assets/Services/reconnect.jpg"
import FeedbackPic from "../assets/Services/feedback&suggestion.jpg"
import InfoReq from "../assets/Services/infromationRequests.jpg"
import UpdatePic from "../assets/Services/updatePersonalInfo.jpg"
import NetworkPic from "../assets/Services/networOpportunities.jpg"
import EventPic from "../assets/Services/EventCoordination.jpg.jpg"
import CommunityPic from "../assets/Services/communityEgangement.jpg"
import PrivacyPic from "../assets/Services/privacy .jpg"
import PromotesPic from "../assets/Services/Promotes.png"

export default function Services() {
    return(
        <div className="mt-[54px] font-poppins">
        <Upsection title={UpsectionContent[1].title} description={UpsectionContent[1].description} />
        <section className="">
          
          <div className="p-2 space-y-4 bg-white flex flex-col items-center justify-center md:space-y-0 md:px-36 md:bg-white">
            
            <div className="flex flex-col border-b-2 space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row md:bg-white md:space-y-1 md:space-x-52">
              <img src={CommPic} alt="img1" className="w-1/2 mx-auto rounded-[80px] md:w-80 md:ml-1" />
              <div className="px-5">
                <h2 className="text-2xl font-bold text-center md:text-right md:text-5xl">Communication and Support</h2>
                <p className="text-center md:text-right">Provides a dedicated space for alumni to reach out with questions, concerns, or inquiries and offers assistance
                  and support for alumni who may need help with various matters
                  related to the community or their alumni status.</p>
              </div>
            </div>

            <div className="flex flex-col border-b-2 space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row-reverse md:bg-white">
              <img src={ReconnectPic} alt="img1" className="w-[250px] mx-auto rounded-[80px] md:w-80 md:mr-1" />
              <div className="px-5 md:w-1/2">
                <h2 className="text-2xl font-bold text-center md:text-left md:text-5xl">Reconnection</h2>
                <p className="text-center md:text-left">Encourages alumni to reconnect with the community and each other. Facilitates communication for organizing reunions, events, or other alumni gatherings.</p>
              </div>
            </div>

            <div className="flex flex-col border-b-2 space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row md:bg-white">
              <img src={FeedbackPic} alt="img1" className="w-1/2 mx-auto rounded-[80px] md:w-80 md:ml-1" />
              <div className="px-5 md:w-1/2">
                <h2 className="text-2xl font-bold text-center md:text-right md:text-5xl">Feedback and Suggestions</h2>
                <p className="text-center md:text-right">Allows alumni to provide feedback on their experiences, share suggestions for improvement, and contribute ideas to enhance the alumni community.</p>
              </div>  
            </div>

            <div className="flex flex-col border-b-2 space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row-reverse md:bg-white">
              <img src={InfoReq} alt="img1" className="w-1/2 mx-auto rounded-[80px] md:w-80 md:mr-1" />
              <div className="px-5 md:w-1/2">
                <h2 className="text-2xl font-bold text-center md:text-left md:text-5xl">Information Requests</h2>
                <p className="text-center md:text-left">Acts as a point of contact for alumni seeking information about upcoming events, news, or any changes within the community.</p>
              </div>
            </div>

            <div className="flex flex-col border-b-2 space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row md:bg-white">
              <img src={UpdatePic} alt="img1" className="w-1/2 mx-auto rounded-[80px] md:w-80 md:ml-1" />
              <div className="px-5 md:w-1/2">
                <h2 className="text-2xl font-bold text-center md:text-5xl md:text-right">Update Personal Information</h2>
                <p className="text-center md:text-right">Provides a platform for alumni to update their contact details, professional achievements, or other relevant information.</p>
              </div>
            </div>

            <div className="flex flex-col border-b-2 space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row-reverse md:bg-white">
              <img src={NetworkPic} alt="img1" className="w-1/2 mx-auto rounded-[80px] md:w-80 md:mr-1" />
              <div className="px-5 md:w-1/2">
                <h2 className="text-2xl font-bold text-center md:text-5xl md:text-left">Networking Opportunities</h2>
                <p className="text-center md:text-left">Facilitates networking by allowing alumni to express interest in connecting with fellow alumni for professional or social reasons.</p>
              </div>
            </div>

            <div className="flex flex-col border-b-2 space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row md:bg-white">
              <img src={EventPic} alt="img1" className="w-1/2 mx-auto rounded-[80px] md:w-80 md:ml-1" />
              <div className="px-5 md:w-1/2">
                <h2 className="text-2xl font-bold text-center md:text-5xl md:text-right">Event Coordination</h2>
                <p className="text-center md:text-right">Supports the planning and coordination of alumni events or activities by providing a channel for communication among alumni volunteers or organizers.</p>
              </div>
            </div>

            <div className="flex flex-col border-b-2 space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row-reverse md:bg-white">
              <img src={CommunityPic} alt="img1" className="w-1/2 mx-auto rounded-[80px] md:w-80 md:mr-1" />
              <div className="px-5 md:w-1/2">
                <h2 className="text-2xl font-bold text-center md:text-5xl md:text-left">Community Engagement</h2>
                <p className="text-center md:text-left">Strengthens the sense of community by fostering ongoing engagement and interaction among alumni members.</p>
              </div>
            </div>

            <div className="flex flex-col border-b-2 space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row md:bg-white">
              <img src={PrivacyPic} alt="img1" className="w-1/2 mx-auto rounded-[80px] md:w-80 md:ml-1" />
              <div className="px-5 md:w-1/2">
                <h2 className="text-2xl font-bold text-center md:text-5xl md:text-right">Privacy and Security</h2>
                <p className="text-center md:text-right">Ensures a secure and private means of communication, especially if the contact form includes fields for personal information.</p>
              </div>
            </div>

            <div className="flex flex-col border-b-2 space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row-reverse md:bg-white">
              <img src={PromotesPic} alt="img1" className="w-[250px] h-auto mx-auto rounded-[100px] md:w-80 md:mr-1" />
              <div className="px-5 md:w-1/2">
                <h2 className="text-2xl font-bold text-center md:text-5xl md:text-left">Promotes a Welcoming Environment:</h2>
                <p className="text-center md:text-left">Conveys a message of openness and accessibility, making alumni feel valued and welcome within the community.</p>
              </div>
            </div>
            
            
            
          </div>
        </section>
      </div>
      
    )
}