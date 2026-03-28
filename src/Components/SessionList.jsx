
import { useContext } from 'react';
import Navbar from './Navbar'
import { MyContext } from '../Context/SessionContext';
import SessionCard from './SessionCard';

const SessionList = () => {
   let {Studydata, setStudydata}= useContext(MyContext);
       console.log(Studydata);

    let handledelete = (id) => {
      let remove = Studydata.filter((data) => data.id != id);
      setStudydata(remove)
      console.log(Studydata);
      
  }
  return (

    
    <div>
      <Navbar />
        <div className="FormPage pt-[100px]">
          <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-2'>
          {Studydata.map((elem) => {
            return <SessionCard study={elem} key={elem.id} handledelete={handledelete}/>
          })}
          </div>
        </div>
    </div>
  )
}

export default SessionList
