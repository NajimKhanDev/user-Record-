import React from 'react'
import Header from './Other/Header'
import TaskNumber from './Other/TaskNumber'
import ShowCard from './Other/ShowCard'
import Createtask from './Other/Createtask'

const Employeedashboard = ({data}) => {
  console.log({data})
  return (
    <div className='h-full md:h-full w-full bg-black text-white'>
      <div>
      <Header data={data}/>
      <TaskNumber data={data}/>
      <ShowCard data={data}/>
    </div>
      
    </div>
  )
}

export default Employeedashboard
