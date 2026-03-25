import {useState} from 'react'
import SessionList from './Components/SessionList';
import SessionForm from './Components/SessionForm';

const App = () => {
    const [Toggle, setToggle] = useState(false);
  return (
    <div>
      {Toggle ? <SessionForm/> : <SessionList setToggle={setToggle}/>}
    </div>
  )
}

export default App
