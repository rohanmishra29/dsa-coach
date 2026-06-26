import { useState } from 'react'
import Landing from './components/Landing'
import Interview from './components/Interview'
import Debrief from './components/Debrief'
import { PROBLEMS } from './data/problems'

function App() {
  const [screen, setScreen] = useState('landing')
  const [currentProblem, setCurrentProblem] = useState(null)
  const [sessionData, setSessionData] = useState(null)

  const handleStart = () => {
    const randomProblem = PROBLEMS[Math.floor(Math.random() * PROBLEMS.length)]
    setCurrentProblem(randomProblem)
    setScreen('interview')
  }

  const handleEnd = (data) => {
    setSessionData(data)
    setScreen('debrief')
  }

  const handleTryAgain = () => {
    const randomProblem = PROBLEMS[Math.floor(Math.random() * PROBLEMS.length)]
    setCurrentProblem(randomProblem)
    setScreen('interview')
  }

  const handleHome = () => {
    setScreen('landing')
  }

  return (
    <div>
      {screen === 'landing' && <Landing onStart={handleStart} />}
      {screen === 'interview' && currentProblem && (
        <Interview problem={currentProblem} onEnd={handleEnd} />
      )}
      {screen === 'debrief' && currentProblem && sessionData && (
        <Debrief
          problem={currentProblem}
          sessionData={sessionData}
          onTryAgain={handleTryAgain}
          onHome={handleHome}
        />
      )}
    </div>
  )
}

export default App
