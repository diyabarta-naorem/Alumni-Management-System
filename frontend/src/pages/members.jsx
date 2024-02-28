import React from 'react'
import Upsection from '../common/upSection'
import { UpsectionContent } from "../DataJs/upSecData";
import { MemberData } from '../DataJs/MemberData';
const Members = () => {
  return (
      <div className='' >
          <Upsection title={UpsectionContent[5].title} />
          <div className=' h-52 md:h-36 pt-5 px-6 md:pt-10 shadow-lg shadow-black md:px-4'>
              <form className='flex flex-col items-center justify-center font-poppins md:flex-row-reverse md:space-x-1'>
                <div className=' flex flex-col space-y-3 md:space-x-3 md:space-y-0 md:flex-row'>
                      <input className='p-2 border border-black rounded-lg md:ml-3' type='text' placeholder='Search names here'></input> 
                      <button className='px-14 py-2  rounded-lg bg-Bluee text-white hover:bg-blue-700 '>Search</button>
                </div>
                <div className='flex flex-row space-x-3 items-center justify-center px-3'>
                      <div className=''>
                        {/*<label for="batch-select">Choose batch: </label>*/}
              <select className='border border-black px-7 rounded-md' name="" id="pet-select">
                                <option value="">Batch</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                      </select>
                      </div>
                      <div>
              {/*<label for="dept-select">Choose department: </label> */}
              <select name="" className='border border-black rounded-md' id="pet-select">
                                <option className="" value="">Department</option>
                                <option value="Computer Science<">Computer Science</option>
                                <option value="Civil">Civil</option>
                                <option value="Electonics & Communication">Electronics & Comm.</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Electrical">MBA</option>
                            
                            </select>
                      </div>
                </div>
              </form>
          </div>
          <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-5 p-5 gap-y-3 gap-x-2 place-items-center bg-violet-200 '>
            {
              MemberData.map((d) => (
                <div key={d.id} className=' relative rounded-lg h-80 m-2 w-72 font-poppins bg-white shadow-lg flex flex-col items-center space-y-2 py-2 hover:scale-95 transform duration-200'>
                  <div className='rounded-full h-36 transform  overflow-hidden'>
                  <img alt='alumniPic' className='h-full w-full object-cover duration-200 hover:scale-110' src={d.image} />
                </div>
                <div className='bg-Bluee rounded-b-lg absolute w-full flex items-center flex-col h-40 bottom-0 p-2'>
                    <h1 className='text-xl text-white font-semibold'>{d.firstName} {d.lastName}</h1>
                    <p className='text-white font-medium'>{d.batch} batch</p>
                    <p className='text-white font-medium'>{d.branch}</p>
                    <button className='px-3 py-1 mt-5 rounded-md bg-orange-500 text-white hover:bg-white hover:text-orange-500 font-semibold'>View More
                    </button>
                </div>
              </div>)
            )}
          </div>
      </div>
  )
}

export default Members