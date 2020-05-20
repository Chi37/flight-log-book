import React, {useState, useEffect} from 'react'
import axios from 'axios'

function PilotInfo() {
  const [pilot, setPilot] = useState({fname: 'Chi'})
  const [hours, setHours] = useState(10)
  const [lessons, setLessons] = useState([])

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( res => {
      console.log(res.data)
      setLessons(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
    <aside className="pilotAside">
      <div className="pilotPhoto">Photo PlaceHolder Text</div>
      <div className="pilotName">{pilot.fname}</div>
      <div className="pilotHours">Total hours: {hours}</div>
    </aside>
    <main>
      {
        lessons.map((lesson, id) => (
          <p>{lesson.title}</p>
        ))
       }
    </main>
    </>
  )
}




export default PilotInfo


