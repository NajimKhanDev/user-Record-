import React from 'react'



const TaskNumber = ({data}) => {

  return (
    <>

    
    <div className=' flex flex-wrap md:flex-nowrap gap-5  p-8'>
<div className="box1 w-full md:w-[50%]  bg-gradient-to-br from-violet-500 via-blue-600 to-blue-700  p-10 flex flex-col gap-4">
    <h1 className='text-2xl font-semibold'>{data.taskCounts.newTask}</h1>
    <h1 className='text-2xl font-semibold'>New Task</h1>
        </div>

        <div className="box1 w-full md:w-[50%] bg-gradient-to-br from-green-500 via-emerald-600 to-green-700 p-10 flex flex-col gap-4">
    <h1 className='text-2xl font-semibold'>{data.taskCounts.active}</h1>
    <h1 className='text-2xl font-semibold'>Active Task</h1>
        </div>
        <div className="box1 w-full md:w-[50%] bg-gradient-to-br from-pink-500 via-blue-600 to-red-700 p-10 flex flex-col gap-4">
    <h1 className='text-2xl font-semibold'>{data.taskCounts.complete}</h1>
    <h1 className='text-2xl font-semibold'>Completed Task</h1>
        </div>
        <div className="box1 w-full md:w-[50%] bg-gradient-to-br from-violet-500 via-red-600 to-red-700 p-10 flex flex-col gap-4">
    <h1 className='text-2xl font-semibold'>{data.taskCounts.failed}</h1>
    <h1 className='text-2xl font-semibold'>Failed Task</h1>
        </div>
      
    </div>
    </>

  )
}

export default TaskNumber
