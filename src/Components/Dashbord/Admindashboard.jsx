import React from 'react'
import Header from './Other/Header'
import Createtask from './Other/Createtask'
import Alltask from './Other/Alltask'

const Admindashboard = ({data}) => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <Header data={data}/>
      
      <Createtask/>
      <Alltask/>
      
    </div>
  )
}

export default Admindashboard
