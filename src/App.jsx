import { useState } from 'react'
import { app, container } from './assets/styles/App.module.css'
import Timer from './features/Timer'
import PlayStopbtn from './features/PlayStopbtn'
import TimeSelect from './features/TimeSelect'



function App() {

  return (
    <div className={app}>
      <h1>Aura Meditation</h1>
      <p>Start a new meditation to Relax</p>
      <div className={container}>
        <Timer />
        <PlayStopbtn />
      </div>
      <TimeSelect />
    </div>
  )
}

export default App
