import {useContext, useState} from 'react'
import SessionList from './Components/SessionList';
import SessionForm from './Components/SessionForm';
import { MyContext } from './Context/SessionContext';

const App = () => {


  let {setToggle, Toggle, setStudydata} = useContext(MyContext);

  return (
    <div className='h-screen p-3'>
      {Toggle ? <SessionForm/> : <SessionList setToggle={setToggle}/>}
    </div>
  )
}

export default App
