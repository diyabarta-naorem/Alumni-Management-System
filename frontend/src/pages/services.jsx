import Upsection from "../common/upSection"
import { UpsectionContent } from "../upSecData"
import CommPic from "../assets/communication&support.webp"
import ReconnectPic from "../assets/reconnect.jpg"

export default function Services() {
    return(
        <div className="mt-[54px]">
        <Upsection title={UpsectionContent[1].title} description={UpsectionContent[1].description} />
        <section className="mt-32 bg">
          
          <div className="p-2 flex-col space-y-4 items-center">
            
            <div className="flex-col space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg ">
              <img src={CommPic} alt="img1" className="w-1/2 mx-auto rounded-[80px]" />
              <div className="px-5">
                <h2 className="text-2xl font-bold text-center">Communication and Support</h2>
                <p className="text-center">Provides a dedicated space for alumni to reach out with questions, concerns, or inquiries and offers assistance
                  and support for alumni who may need help with various matters
                  related to the community or their alumni status.</p>
              </div>

            </div>
            <div className="flex-col space-y-1 items-center justify-center rounded-2xl p-4 bg-divBg ">
              <img src={CommPic} alt="img1" className="w-1/2 mx-auto rounded-[80px]" />
              <div className="px-5">
                <h2 className="text-2xl font-bold text-center">Communication and Support</h2>
                <p className="text-center">Provides a dedicated space for alumni to reach out with questions, concerns, or inquiries and offers assistance
                  and support for alumni who may need help with various matters
                  related to the community or their alumni status.</p>
              </div>

            </div>
            
            
            
          </div>
        </section>
      </div>
      
    )
}