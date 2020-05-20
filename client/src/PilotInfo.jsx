import React, {useState, useEffect} from 'react'

function PilotInfo() {
  const [pilot, setPilot] = useState({fname: 'Chi'})
  const [hours, setHours] = useState(10)

  useEffect(()=> {
      //call hours
      
  }, [])

  return (
    <div>
      <div className="pilotName">{pilot.fname}</div>
      <div className="pilotHours">Total hours: {hours}</div>
    </div>
  )
}

export default PilotInfo
