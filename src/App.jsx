import { useState } from 'react'
import { app, container } from './assets/styles/App.module.css'
import Timer from './features/timer/Timer'
import PlayStopbtn from './components/PlayStopbtn'
import TimeSelect from './components/TimeSelect'
import SoundSelect from './components/SoundSelect'



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
      <SoundSelect />
    </div>
  )
}

export default App
