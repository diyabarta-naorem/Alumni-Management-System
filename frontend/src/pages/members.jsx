import React from 'react'
import Upsection from '../common/upSection'
import { UpsectionContent } from "../upSecData";
import Card from '../common/memberCard';
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
                            
                            </select>
                      </div>
                </div>
              </form>
          </div>
          <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-5 p-5 gap-y-3 gap-x-2 place-items-center bg-violet-200 '>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            
          </div>
      </div>
  )
}

export default Members