import Upsection from "../common/upSection";
import { UpsectionContent } from "../upSecData";

export default function AboutUs() {
    return(
      <div className="mt-[54px]">
          <Upsection title={UpsectionContent[2].title} description={UpsectionContent[2].description}/>
        </div>
    )
}