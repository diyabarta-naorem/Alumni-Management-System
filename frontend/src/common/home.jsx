import alumniHomeFoto from '../assets/alumniHomeFoto.jpg';
import alumnniFotos from '../assets/alumniFotos.jpg'
import '../index.css';
export default function Home(){
    return(
        <div className=''>
          <div className=" relative group">
          <img className="object-contain max-w-full max-h-full flex flex-row" src={alumniHomeFoto}/>
          <div className="absolute mt-24 top-0 left-0 w-3/4">
                <h1 className='mx-10 mt-28 text-white text-3xl font-bold md:mt-20 md:mx-16 md:text-6xl'>Join, Connect, Thrive</h1>
                <h2 className='mx-10 mt-4 text-white text-md font-medium md:mt-6 md:mx-16 md:text-2xl'>Students of Manipur Technical University</h2>
                <p className='mx-10 my-4 text-white font-poppins md:mt-6 md:mx-16 '>We are delighted to welcome you to the our MTU Alumni community. 
                This space is dedicated to fostering<br/> connections, celebrating achievements, and keeping you informed
                 about the exciting developments within<br/>our vibrant community.
                </p>
                
                <div className='flex mx-16 mt-12 flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
                  <button className=' px-6 py-3 bg-Bluee text-white font-medium md:w-3/12'>COMMUNITY LOGIN</button>
                  <button className=' px-6 py-3 bg-white text-black font-medium md:w-3/12'>REGISTER</button>
                </div>
              </div>
          </div>
          <div>
            <div className='flex p-10 items-center justify-center flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
              <img className='w-1/2' src={alumnniFotos}/>
              <div className=''>
                <h1>Our mission</h1>
                <p>Our mission is to foster lifelong connections, celebrate the achievements of our alumni, and provide a dynamic platform that promotes engagement, philanthropy, and professional growth. Through the MTU Alumni, we aim to build a community where every graduate feels valued,
                 connected, and empowered to contribute to the ongoing success of our institution.
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}