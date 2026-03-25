import React from 'react'

const SessionList = ({setToggle}) => {
  return (
    <div>
        <div className="navbar">
            <button onClick={()=>setToggle(true)}>Go to Form</button>
        </div>
        <h1 className='text-black'>List...</h1>
    </div>
  )
}

export default SessionList
