import { useState } from 'react'
import { app } from './assets/styles/App.module.css'
import Playbtn from './features/Playbtn'



function App() {

  return (
    <div className={app}>
      <h1>Aura Meditation</h1>
      <p>Start a new meditation to Relax</p>
      <Playbtn />
    </div>
  )
}

export default App
