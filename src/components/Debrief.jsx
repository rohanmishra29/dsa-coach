import { useState, useEffect } from 'react'

function Debrief({ problem, sessionData, onTryAgain, onHome }) {
  const [score, setScore] = useState(null)
  const [feedback, setFeedback] = useState('')
  const [loading, setLoading] = useState(true)

  const formatTime = (s) => {
    const m = String(Math.floor(s / 60)).padStart(2, '0')
    const sec = String(s % 60).padStart(2, '0')
    return `${m}:${sec}`
  }

  useEffect(() => {
    generateScore()
  }, [])

  async function generateScore() {
    const submitCount = sessionData.messages.filter(m => m.role === 'system' && m.content.includes('submitted')).length
    const prompt = `Score this coding interview session 0-100 based on:
- Problem: ${problem.title} (${problem.difficulty})
- Hints used: ${sessionData.hints}
- Time taken: ${formatTime(sessionData.seconds)}
- Submissions made: ${submitCount}
- Conversation length: ${sessionData.messages.length} messages

Respond ONLY with valid JSON, no markdown:
{"score": N, "feedback": "2-3 sentences of personalized, encouraging but honest feedback"}`

    try {
      const res = await fetch('https://dsa-coach-server.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 300,
          messages: [{ role: 'user', content: prompt }]
        })
      })
      const data = await res.json()
      const raw = data.content?.[0]?.text || '{}'
      const clean = raw.replace(/```json|```/g, '').trim()
      const parsed = JSON.parse(clean)
      setScore(parsed.score || 50)
      setFeedback(parsed.feedback || 'Good effort on this problem!')
    } catch (e) {
      const base = Math.max(20, 70 - sessionData.hints * 5)
      setScore(base)
      setFeedback(`You attempted ${problem.title}. ${sessionData.hints === 0 ? 'No hints needed — impressive!' : 'Consider practicing similar problems to build more confidence.'}`)
    }
    setLoading(false)
  }

  const submitCount = sessionData.messages.filter(m => m.role === 'system' && m.content.includes('submitted')).length

  return (
    <div className="debrief-screen">
      <div className="debrief-card">
        <div className="debrief-header">
          <div className="debrief-title">SESSION COMPLETE</div>
          <div className="debrief-problem">{problem.title}</div>
          <div className="debrief-sub">{problem.topic} · {problem.difficulty}</div>
        </div>

        <div className="debrief-score">
          {loading ? (
            <div className="score-num" style={{ fontSize: '20px', color: '#4B6480' }}>Scoring...</div>
          ) : (
            <>
              <span className="score-num">{score}</span>
              <span className="score-max">/100</span>
            </>
          )}
        </div>

        <div className="debrief-stats">
          <div className="dstat">
            <div className="dstat-val">{formatTime(sessionData.seconds)}</div>
            <div className="dstat-label">TIME TAKEN</div>
          </div>
          <div className="dstat">
            <div className="dstat-val">{sessionData.hints}</div>
            <div className="dstat-label">HINTS USED</div>
          </div>
          <div className="dstat">
            <div className="dstat-val">{submitCount}</div>
            <div className="dstat-label">SUBMISSIONS</div>
          </div>
        </div>

        <div className="debrief-feedback">
          <div className="df-label">INTERVIEWER FEEDBACK</div>
          <div className="df-text">{loading ? 'Generating feedback...' : feedback}</div>
        </div>

        <div className="debrief-actions">
          <button className="btn-again" onClick={onTryAgain}>TRY AGAIN</button>
          <button className="btn-home" onClick={onHome}>← BACK TO HOME</button>
        </div>
      </div>
    </div>
  )
}

export default Debrief
