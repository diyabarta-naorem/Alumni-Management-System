import Upsection from "../common/upSection"
import { UpsectionContent } from "../upSecData"
import CommPic from "../assets/communication&support.webp"
import ReconnectPic from "../assets/reconnect.jpg"
import FeedbackPic from "../assets/feedback&suggestion.jpg"
import InfoReq from "../assets/infromationRequests.jpg"
import UpdatePic from "../assets/Update PersonalInformation.jpg"
import NetworkPic from "../assets/networOpportunities.jpg"
import EventPic from "../assets/EventCoordination.jpg.jpg"
import CommunityPic from "../assets/communityEgangement.jpg"
import PrivacyPic from "../assets/privacy .jpg"
import PromotesPic from "../assets/Promotes.png"

export default function Services() {
    return(
        <div className="mt-[54px]">
        <Upsection title={UpsectionContent[1].title} description={UpsectionContent[1].description} />
        <section className="mt-32 bg">
          
          <div className="p-2 space-y-4 items-center md:space-y-0 md:px-36">
            
            <div className="flex flex-col space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row md:space-y-0 md:space-x-52">
              <img src={CommPic} alt="img1" className="w-1/2 mx-auto rounded-[80px] md:w-44" />
              <div className="px-5">
                <h2 className="text-2xl font-bold text-center md:text-right ">Communication and Support</h2>
                <p className="text-center md:text-right">Provides a dedicated space for alumni to reach out with questions, concerns, or inquiries and offers assistance
                  and support for alumni who may need help with various matters
                  related to the community or their alumni status.</p>
              </div>
            </div>

            <div className="flex flex-col space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row">
              <img src={ReconnectPic} alt="img1" className="w-[250px] mx-auto rounded-[80px] md:w-52" />
              <div className="px-5">
                <h2 className="text-2xl font-bold text-center">Reconnection</h2>
                <p className="text-center">Encourages alumni to reconnect with the community and each other. Facilitates communication for organizing reunions, events, or other alumni gatherings.</p>
              </div>
            </div>

            <div className="flex flex-col space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row">
              <img src={FeedbackPic} alt="img1" className="w-1/2 mx-auto rounded-[80px]" />
              <div className="px-5">
                <h2 className="text-2xl font-bold text-center">Feedback and Suggestions</h2>
                <p className="text-center">Allows alumni to provide feedback on their experiences, share suggestions for improvement, and contribute ideas to enhance the alumni community.</p>
              </div>  
            </div>

            <div className="flex flex-col space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row">
              <img src={InfoReq} alt="img1" className="w-1/2 mx-auto rounded-[80px]" />
              <div className="px-5">
                <h2 className="text-2xl font-bold text-center">Information Requests</h2>
                <p className="text-center">Acts as a point of contact for alumni seeking information about upcoming events, news, or any changes within the community.</p>
              </div>
            </div>

            <div className="flex flex-col space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row">
              <img src={UpdatePic} alt="img1" className="w-1/2 mx-auto rounded-[80px]" />
              <div className="px-5">
                <h2 className="text-2xl font-bold text-center">Update Personal Information</h2>
                <p className="text-center">Provides a platform for alumni to update their contact details, professional achievements, or other relevant information.</p>
              </div>
            </div>

            <div className="flex flex-col space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row">
              <img src={NetworkPic} alt="img1" className="w-1/2 mx-auto rounded-[80px]" />
              <div className="px-5">
                <h2 className="text-2xl font-bold text-center">Networking Opportunities</h2>
                <p className="text-center">Facilitates networking by allowing alumni to express interest in connecting with fellow alumni for professional or social reasons.</p>
              </div>
            </div>

            <div className="flex flex-col space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row">
              <img src={EventPic} alt="img1" className="w-1/2 mx-auto rounded-[80px]" />
              <div className="px-5">
                <h2 className="text-2xl font-bold text-center">Event Coordination</h2>
                <p className="text-center">Supports the planning and coordination of alumni events or activities by providing a channel for communication among alumni volunteers or organizers.</p>
              </div>
            </div>

            <div className="flex flex-col space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row md:flex-row">
              <img src={CommunityPic} alt="img1" className="w-1/2 mx-auto rounded-[80px]" />
              <div className="px-5">
                <h2 className="text-2xl font-bold text-center">Community Engagement</h2>
                <p className="text-center">Strengthens the sense of community by fostering ongoing engagement and interaction among alumni members.</p>
              </div>
            </div>

            <div className="flex flex-col space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row">
              <img src={PrivacyPic} alt="img1" className="w-1/2 mx-auto rounded-[80px]" />
              <div className="px-5">
                <h2 className="text-2xl font-bold text-center">Privacy and Security</h2>
                <p className="text-center">Ensures a secure and private means of communication, especially if the contact form includes fields for personal information.</p>
              </div>
            </div>

            <div className="flex flex-col space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg md:flex-row">
              <img src={PromotesPic} alt="img1" className="w-[250px] mx-auto rounded-[100px]" />
              <div className="px-5">
                <h2 className="text-2xl font-bold text-center">Promotes a Welcoming Environment:</h2>
                <p className="text-center">Conveys a message of openness and accessibility, making alumni feel valued and welcome within the community.</p>
              </div>
            </div>
            
            
            
          </div>
        </section>
      </div>
      
    )
}