import React from 'react'
import Upsection from '../common/upSection'
import { UpsectionContent } from "../upSecData";
import Card from '../common/memberCard';
const Members = () => {
  return (
      <div className='' >
          <Upsection title={UpsectionContent[5].title} />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-5 gap-y-3 gap-x-3 bg-violet-200 '>
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

export default Members