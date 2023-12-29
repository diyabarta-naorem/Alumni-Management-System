import alumniHomeFoto from '../assets/alumniHomeFoto.jpg';
import alumnniFotos from '../assets/alumniFotos.jpg';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function Home(){
  const navigate = useNavigate();
  const goToLogIn = () => {
    navigate("/logIn");
  }
  const goToRegister = () => {
    navigate("/regist")
  }

    return(
        <div className='font-poppins'>
          <div className=" relative group overflow-hidden h-screen min-h-[700px]">
          <img className="h-full w-full object-cover" alt='AlumniHomeFoto' src={alumniHomeFoto}/>
          <div className="absolute mt-12 left-0 top-0 bg-black bg-opacity-60 h-full w-full text-center md:text-left">
                <h1 className='mx-10 mt-28 text-white text-4xl font-bold md:mx-16 md:text-6xl md:mt-48'>Join, Connect, Thrive</h1>
                <h2 className='mx-10 mt-4 text-white text-xl font-medium md:mt-6 md:mx-16 md:text-3xl'>Students of Manipur Technical University</h2>
                <p className='mx-10 my-4 max-w-[600px] text-white font-poppins md:mt-10 md:mx-16 '>We are delighted to welcome you to the our MTU Alumni community. 
                This space is dedicated to fostering connections, celebrating achievements, and keeping you informed
                 about the exciting developments within our vibrant community.
                </p>
                
                <div className='flex mx-16 mt-7 flex-col space-y-4 sm:flex-row sm:space-x-5 sm:space-y-0'>
                  <button onClick={goToLogIn} className=' px-4 py-2.5 rounded-md bg-Bluee text-white font-medium lg:max-w-max'>COMMUNITY LOGIN</button>
                  <button onClick={goToRegister} className=' px-4 py-2.5 rounded-md bg-white text-black font-medium lg:max-w-max'>REGISTER</button>
                  
                </div>
              </div>
          </div>
          <div>
          <div className='flex py-14 px-10 items-center justify-center flex-col space-y-4 md:px-20 md:flex-row md:space-x-10 md:space-y-0'>
            
            <div className='w-11/12 md:w-1/3 overflow-hidden rounded-lg shadow-md shadow-gray-700'>
              <img className='w-full h-full object-cover shadow-md rounded-md shadow-gray-700 transform hover:scale-110 duration-200 ' alt='alumniFotos' src={alumnniFotos}/>
            </div>
              
              
              <div className='text-center md:text-left flex-1'>
                <h1 className='text-4xl font-bold md:text-5xl'>Our mission</h1>
                <p className='mt-4 font-normal text-gray-700'>Our mission is to foster lifelong connections, celebrate the achievements of our alumni, and provide a dynamic platform that promotes engagement, philanthropy, and professional growth. Through the MTU Alumni, we aim to build a community where every graduate feels valued,
                 connected, and empowered to contribute to the ongoing success of our institution.
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}