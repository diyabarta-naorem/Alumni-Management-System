import alumni from "../assets/alumniGroupFoto.jpg"
import FbLogo from "../assets/logos/fbLogo.png"
import GoogleLogo from "../assets/logos/googleLogo.png"

export default function LogIn(){
    return(
        <div class="h-screen mt-24 bg-blue-200">
        <div class="flex justify-center items-center rounded-2xl p-10 w-auto">
            <div class="h-[653px]">
                <div class=" h-full flex items-center justify-center">
                    <img src={alumni} alt="" class="max-w-1/2 rounded-l-2xl hidden object-cover w-full h-full md:block hover:shadow-xl"/>
                </div>
            </div>
            

            <i class="fa-regular fa-circle-xmark absolute top-5 right-5 text-white text-2xl rounded-full"></i>
    
            <div class="relative flex flex-row bg-white rounded-r-2xl shadow-2xl md:flex-row md:space-y-0">
                <div class="p-6 md:p-20" >
                    <h1 class="font-bold font-poppins mb-5 text-orange-400 text-4xl">Log In</h1>
                    <p class="max-w-sm font-poppins text-gray-600 mb-12">Log in to your account to upload or download pictures,videos or music.</p>
                    <input class="w-full py-3 px-3 border border-gray-700 rounded-md placeholder:font-light" type="text" placeholder="Enter email address"/>
                    <div class="flex flex-col items-center justify-center mt-8 space-y-6 md:flex-row md:space-0">
                        <div class="font-thin text-blue-600 cursor-pointer hover:underline underline-offset-1">Forgot password</div>
                        <button class="w-full md:width-auto rounded-md justify-center items-center p-4 bg-blue-600 shadow-2xl text-white hover:bg-blue-800 transition hover:translate-y-0.5">Next</button>
                    </div>
                    <div class="border-b border-b-gray-400 mt-12"></div>
                    <div class="text-center text-sm text-gray-600 py-6">or login with</div>
                    <div class="flex flex-col space-y-3 space-x-0 md:space-y-0 md:space-x-4 md:flex-row items-center justify-center">
                        <button class="flex items-center justify-center space-x-1 py-2 px-6 w-full border border-gray-300 rounded-md hover:opacity-90 shadow-sm hover:shadow-lg transition hover:translate-y-0.5 duration 500">
                            <img src={FbLogo} alt="" class="w-10"/>
                            <span class="font-poppins">Facebook</span>
                        </button>
                        <button class="flex items-center justify-center space-x-1 py-2 px-6 w-full border border-gray-300 rounded-md hover:opacity-90 shadow-sm hover:shadow-lg transition hover:translate-y-0.5 duration 100">
                            <img src={GoogleLogo} alt="" class="w-10"/>
                            <span class="font-poppins">Google</span>
                        </button>
                    </div>
                </div>
    
                
            
            </div>
        </div>
    </div>
    )
}