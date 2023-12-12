import alumniHomeFoto from '../assets/alumniHomeFoto.jpg';
import '../index.css';
export default function Home(){
    return(
        <div className=''>
          <div className=" relative group">
            <img className="object-contain max-w-full max-h-full flex flex-row" src={alumniHomeFoto}/>
              <div className="absolute top-0 left-0 w-3/4">
                <h1 className='mx-10 mt-12 text-white text-3xl font-bold md:mt-20 md:mx-16 md:text-6xl'>Join, Connect, Thrive</h1>
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
        </div>
    )
}