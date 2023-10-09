import { useState } from 'react'
import { app } from './assets/styles/App.module.css'
import Playbtn from './components/Playbtn.jsx'



function App() {

  const [isPlay, setIsPlay] = useState(false)

  function isPlayHandle() {
    console.log(isPlay)
    setIsPlay(!isPlay)
  }

  return (
    <div className={app}>
      <h1>Aura Meditation</h1>
      <p>Start a new meditation to Relax</p>
      <Playbtn
        clickHandle={isPlayHandle}
        status={isPlay}
      />
    </div>
  )
}

export default App
