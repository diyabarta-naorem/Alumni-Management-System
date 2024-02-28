import alumniHomeFoto from '../assets/alumniHomeFoto.jpg';
import alumnniFotos from '../assets/alumniFotos.jpg';
import quotePic from '../assets/logos/quote.png';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CarouselData } from '../DataJs/CarouselData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import img45 from '../assets/gallery/img45.jpg';
import img36 from '../assets/gallery/img36.JPG';
import img3 from '../assets/gallery/img3.JPG';
import img44 from '../assets/gallery/img44.jpg';
import img28 from '../assets/gallery/img28.JPG';
import img43 from '../assets/gallery/img43.jpg';
import '../index.css';


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
          style={{
              ...style, display: "block", width: "44px", height: "44px",margin:"0 -8% ", paddingTop: "14px",paddingLeft:"11px", top: "112%", right: "40%", background: "rgb(30,58,138)", boxShadow: "2px 4px 5px gray", borderRadius: "50%",
        } }
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
          style={{
              ...style, display: "block", width: "44px", height: "44px",margin:"0 -8% ", paddingTop: "14px",paddingLeft:"11px", top: "112%", left: "40%", background: "rgb(30,58,138)", boxShadow: "2px 4px 5px gray", borderRadius: "50%",
        } }
      onClick={onClick}
      >    
    </div>
  );
  }

export default function Home(){
  const navigate = useNavigate();
  const goToLogIn = () => {
    navigate("/login");
  }
  const goToRegister = () => {
    navigate("/register")
  }

  const goToGallery = () => {
    navigate("/gallery")
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
                  <button onClick={goToLogIn} className=' px-4 py-2.5 rounded-md bg-Bluee  text-white font-medium hover:bg-blue-700 lg:max-w-max'>COMMUNITY LOGIN</button>
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
        <section id='gallery' className='bg-violet-200 m-3 pt-6 py-5 md:py-9 space-y-6 rounded-lg '>
            <h1 className='text-4xl text-gray-800 font-bold md:text-5xl text-center'>Gallery</h1>
            <div className='columns-3 gap-3  md:w-[700px] mx-auto space-y-3 pt-5'>
              <div className='break-inside-avoid transform  overflow-hidden'><img alt="1" className='h-full w-full object-cover duration-200 hover:scale-110' src={img3} /></div>
              <div className='break-inside-avoid transform  overflow-hidden'><img alt="1" className='h-full w-full object-cover duration-200 hover:scale-110' src={img44} /></div>
              <div className='break-inside-avoid transform  overflow-hidden'><img alt="1" className='h-full w-full object-cover duration-200 hover:scale-110' src={img28} /></div>
              <div className='break-inside-avoid transform  overflow-hidden'><img alt="1" className='h-full w-full object-cover duration-200 hover:scale-110' src={img43} /></div>
              <div className='break-inside-avoid transform  overflow-hidden'><img alt="1" className='h-full w-full object-cover duration-200 hover:scale-110' src={img45} /></div>
              <div className='break-inside-avoid transform  overflow-hidden'><img alt="1" className='h-full w-full object-cover duration-200 hover:scale-110' src={img36} /></div>
              <div className='break-inside-avoid pl-6 md:pl-14'>
                <button onClick={goToGallery} className='p-6 mr-4 md:p-8 bg-black text-white text-2xl md:text-6xl border-2 border-black rounded-lg shadow-lg shadow-gray-500 font-bold hover:bg-white hover:text-black duration-500'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
              </div>
            
            </div>
          </section>
          <section id="testimonal" className='bg-violet-200 h-[900px] pt-10'>
                  <div className='w-3/4 mx-auto'>
                      <h1 className='text-4xl text-gray-800 font-bold md:text-5xl text-center'>Testimonial</h1>
                      <p className='text-md text-gray-700 font-semibold mt-4 text-center md:text-xl'>What our alumni say</p>
                      <div className='mt-1 m-auto md:mt-8'>
                        <Slider {...settings}>
                          {CarouselData.map((d) => (
                              <div key={d.id} className="bg-blue-900 h-100 w-[600px]  p-5 pb-14 mx-auto rounded-lg flex flex-col space-y-3 text-white my-10">
                                    <img alt="alumni" src={d.image} className="w-20  md:w-32  rounded-full mx-auto" />
                                    <img alt="quote" src={quotePic} className='w-12 mx-auto rotate-180 md:w-16 ' />                                           
                                    <p className='text-center text-sm md:text-base'>{d.quote}</p>
                                    <p className='text-gray-200 text-sm md:text-base font-light text-center'>{d.identity}/ {d.department} ({d.batch})</p>
                              </div>)
                          )}
                      </Slider>
                  </div>
            
               </div>
            </section>
        </div>
    )
}