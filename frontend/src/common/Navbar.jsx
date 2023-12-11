import logo from '../assets/Logo.png';
export default function navbar(){
    return(
      <div>
        <section id="navbar"> 
          <div className="bg-whitee shadow-md flex flex-col items-center justify-around md:flex-row ">
            <div>
              <img src={logo} className='w-32 hidden md:block p-3'></img>
            </div>
            <ul className='flex flex-col md:flex-row text-black text-center w-full h-full md:w-auto'>
              <li className='p-3 mx-1 text-lg hover:text-blue-700 hover:bg-gray-300 hover:rounded-2xl font-semibold '><a className='p-3 cursor-pointer block'>Home</a></li>
              <li className='p-3 mx-1 text-lg hover:text-blue-700 hover:bg-gray-300 hover:rounded-2xl font-semibold '><a className='p-3 cursor-pointer block'>About</a></li>
              <li className='p-3 mx-1 text-lg hover:text-blue-700 hover:bg-gray-300 hover:rounded-2xl font-semibold '><a className='p-3 cursor-pointer block'>Service</a></li>
              <li className='p-3 mx-1 text-lg hover:text-blue-700 hover:bg-gray-300 hover:rounded-2xl font-semibold '><a className='p-3 cursor-pointer block'>Project</a></li>
              <li className='p-3 mx-1 text-lg hover:text-blue-700 hover:bg-gray-300 hover:rounded-2xl font-semibold '><a className='p-3 cursor-pointer block'>Blog</a></li>
              <li className='p-3 mx-1 text-lg hover:text-blue-700 hover:bg-gray-300 hover:rounded-2xl font-semibold '><a className='p-3 cursor-pointer block'>Pages</a></li>
              <li className='p-3 mx-1 text-lg hover:text-blue-700 hover:bg-gray-300 hover:rounded-2xl font-semibold '><a className='p-3 cursor-pointer block'>Contact</a></li>
           </ul>
          </div>
        </section>
        </div>
    );
}
