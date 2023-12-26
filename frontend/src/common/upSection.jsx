// import phonePic from "../assets/phone.jpg";
import upperImg from "../assets/upSection/upperImage.jpg";
export default function Upsection({title, description}) {
    return (
        <div className="relative h-54 font-poppins">
        <img src={upperImg}alt="contactPic" className="h-[500px] w-full bg-cover bg-center object-cover md:h-96"></img>
        <div className="absolute inset-0 p-16 md:py-32 bg-black bg-opacity-70 flex flex-col items-center h-[500px] z-20 space-y-4 md:h-96 md:px-52">
                <h1 className="text-white text-3xl font-bold text-center ">{title}</h1>
                <p className="text-white text-center">{description}</p>
                <button className="bg-Bluee px-6 py-2 rounded-lg text-white hover:bg-blue-800">Let's See</button>
        </div>
      </div>
    )
}