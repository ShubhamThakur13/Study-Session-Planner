import React, { useContext } from 'react'
import { MyContext } from '../Context/SessionContext'

const SessionCard = ({handledelete, study}) => {
  let {Studydata} = useContext(MyContext);
  console.log(Studydata);

  let multiplecolor = () => {
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    return `rgb(${c1},${c2},${c3})`;
  }
  
  return (
    <div style={{ backgroundColor: multiplecolor() }} className= {`w-[350px] h-[200px] border-2 p-2 flex shrink-0 flex-col justify-between rounded-2xl`}>
      <h1 className='font-extrabold text-3xl'>{study.subject}</h1>
      <div className='w-[100%] h-[3px] bg-black'></div>
      <p className='font-bold'>{study.TopicName}</p>
      <div className='flex justify-between items-center'>
        <p>Duration: {study.Duration} Minutes</p>
        <p className= {`${study.Priorite === 'low' ? 'px-3 py-1 border-2 inline bg-green-300 border-green-800 rounded-2xl text-green-900' : '' }
        ${study.Priorite === 'high' ? 'px-3 py-1 border-2 inline bg-red-300 border-red-800 rounded-2xl text-red-900' : '' }
        ${study.Priorite === 'medium' ? 'px-3 py-1 border-2 inline bg-orange-300 border-orange-800 rounded-2xl text-orange-900' : '' }`}>{study.Priorite}</p>
      </div>

      <div className='flex justify-between items-center'>
        <p className='font-bold border-2 rounded-2xl py-1 px-3'>{study.date}</p>
        <button onClick={()=> handledelete(study.id)
        } className='bg-red-600 text-white px-6 py-2 rounded-xl cursor-pointer'>Delete</button>
      </div>
    </div>
  )
}

export default SessionCard
 