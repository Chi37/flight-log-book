import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'

const intitialState = {
  loading: true,
  error: '',
  data: []
}

const reducer = (state, action) => {
  switch(action.type){
    case 'FETCH_SUCCESS':
      return {
        loading: false, 
        lessons: action.payload,
        error: ' '
      }

    case 'FETCH_ERROR':
      return {
        loading: false, 
        lessons: [],
        error: 'Sorry! Something went wrong while querying data!'
      }

    default:
      return state
  }
}

function PilotInfo() {
  const [pilot, setPilot] = useState({ fname: 'Chi' })
  const [hours, setHours] = useState(10)

  const [state, dispatch] = useReducer(reducer, intitialState)


  const getLesson = (id) => {

    console.log(id)
  }

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/postss')
      .then(res => {
        dispatch({type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch(err => {
        dispatch({type: 'FETCH_ERROR', payload: [] })
      })
  }, [])
 
  return (
    <div className="Pilot-wrapper">
      <aside className="pilotAside">
        <div className="pilotPhoto">Photo PlaceHolder Text</div>
        <div className="pilotName">{pilot.fname}</div>
        <div className="pilotHours">Total hours: {hours}</div>
      </aside>
      <main>
        LESSONS <br/>
        {
          state.loading ? 'loading...' :  
          state.lessons.map((lesson, id) => (
            <p key={id} onClick={() => getLesson(id)}>{lesson.title}</p>
          ))
        }
        {state.error ? state.error : null}
      </main>
    </div>
  )
}




export default PilotInfo


