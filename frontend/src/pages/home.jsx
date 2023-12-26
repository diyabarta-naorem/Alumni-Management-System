import alumniHomeFoto from '../assets/alumniHomeFoto.jpg';
import alumnniFotos from '../assets/alumniFotos.jpg';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function Home(){
  const navigate = useNavigate();
  const goToLogIn = () => {
    navigate("/logIn");
  }

    return(
        <div className='font-poppins'>
          <div className=" relative group overflow-hidden h-screen min-h-[400px]">
          <img className="h-full w-full object-cover bg-black" alt='AlumniHomeFoto' src={alumniHomeFoto}/>
          <div className="absolute mt-12 top-0 left-0 w-full text-center md:text-left max-w-[600px] md:mt-28">
                <h1 className='mx-10 mt-28 text-white text-4xl font-bold md:mt-20 md:mx-16 md:text-6xl'>Join, Connect, Thrive</h1>
                <h2 className='mx-10 mt-4 text-white text-xl font-medium md:mt-6 md:mx-16 md:text-2xl'>Students of Manipur Technical University</h2>
                <p className='mx-10 my-4 text-white font-poppins md:mt-6 md:mx-16 '>We are delighted to welcome you to the our MTU Alumni community. 
                This space is dedicated to fostering<br/> connections, celebrating achievements, and keeping you informed
                 about the exciting developments within<br/>our vibrant community.
                </p>
                
                <div className='flex mx-16 mt-7 flex-col space-y-4 sm:flex-row sm:space-x-5 sm:space-y-0'>
                  <button onClick={goToLogIn} className=' px-4 py-2.5 rounded-md bg-Bluee text-white font-medium lg:max-w-max'>COMMUNITY LOGIN</button>
                  <button className=' px-4 py-2.5 rounded-md bg-white text-black font-medium lg:max-w-max'>REGISTER</button>
                  
                </div>
              </div>
          </div>
          <div>
            <div className='flex py-14 px-20 items-center justify-center flex-col space-y-4 md:flex-row md:space-x-10 md:space-y-0'>
              <img className='w-3/4 md:w-1/3' alt='alumniFotos' src={alumnniFotos}/>
              <div className='text-center md:text-left'>
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