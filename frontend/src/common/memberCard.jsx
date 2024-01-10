import React from 'react'
import alumniPic from '../assets/logos/avatar3.png';
const MemberCard = () => {
    const batch = 2016;
  return (
      <div className=' relative rounded-lg h-96 w-72 font-poppins bg-white shadow-lg flex flex-col items-center space-y-3 py-6'>
          <img alt='alumniPic' className='rounded-full h-36' src={alumniPic} />
          <div className='bg-Bluee rounded-b-lg absolute w-full flex items-center flex-col h-52 bottom-0 p-2'>
          <h1 className='text-xl text-white font-semibold'>Ricky Thoudam</h1>
            <p className='text-white font-medium'>{ batch} batch</p>
            <p className='text-white font-medium'>Computer Science & Engineering</p>
              <button className='px-3 py-1 mt-7 rounded-md bg-orange-500 text-white hover:bg-white hover:text-orange-500'>View More
              </button>
          </div>
     </div>
  )
}

export default MemberCard