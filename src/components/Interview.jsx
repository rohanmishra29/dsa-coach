import { useState, useEffect, useRef } from 'react'

function Interview({ problem, onEnd }) {
  const [activeTab, setActiveTab] = useState('problem')
  const [seconds, setSeconds] = useState(0)
  const [hints, setHints] = useState(0)
  const [messages, setMessages] = useState([])
  const [chatInput, setChatInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [language, setLanguage] = useState('cpp')
  const [code, setCode] = useState(problem.starterCode[language])
  const [output, setOutput] = useState('// Run your code to see output')
  const chatEndRef = useRef(null)
  const historyRef = useRef([])
  const hasGreetedRef = useRef(false)

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!hasGreetedRef.current) {
      hasGreetedRef.current = true
      sendToAI('Start the interview. Greet me warmly and briefly (1-2 sentences), then ask me to walk you through my initial approach.', true)
    }
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const formatTime = (s) => {
    const m = String(Math.floor(s / 60)).padStart(2, '0')
    const sec = String(s % 60).padStart(2, '0')
    return `${m}:${sec}`
  }

  const formatMsg = (text) => {
    return text
      .replace(/```(\w+)?\n?([\s\S]*?)```/g, '<pre>$2</pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>')
  }

  async function sendToAI(userText, isOpening = false) {
    setIsThinking(true)
    if (!isOpening) {
      historyRef.current.push({ role: 'user', content: userText })
      setMessages(prev => [...prev, { role: 'user', content: userText }])
    } else {
      historyRef.current = [{ role: 'user', content: userText }]
    }

    try {
      const res = await fetch('https://dsa-coach-server.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: problem.systemPrompt,
          messages: historyRef.current
        })
      })
      const data = await res.json()
      const aiText = data.content?.[0]?.text || "Sorry, I hit an error. Try again!"
      historyRef.current.push({ role: 'assistant', content: aiText })
      setMessages(prev => [...prev, { role: 'ai', content: aiText }])
    } catch (e) {
      setMessages(prev => [...prev, { role: 'ai', content: 'Connection error — check API access.' }])
    }
    setIsThinking(false)
  }

  const handleSend = () => {
    if (!chatInput.trim() || isThinking) return
    sendToAI(chatInput.trim())
    setChatInput('')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleHint = () => {
    if (isThinking) return
    setHints(h => h + 1)
    setMessages(prev => [...prev, { role: 'system', content: `💡 Hint requested (#${hints + 1})` }])
    sendToAI("I'd like a hint please — something Socratic, don't give away the full answer.")
  }

  const handleLangChange = (e) => {
    const lang = e.target.value
    setLanguage(lang)
    setCode(problem.starterCode[lang])
  }

  const handleRun = () => {
    setOutput('// Note: Live execution requires Judge0 API key.\n// Submit your code for AI review instead!')
  }

  const handleSubmit = () => {
    if (!code.trim()) {
      setOutput('Write a solution before submitting!')
      return
    }
    const reviewMsg = `Here's my solution — please review for correctness, time/space complexity, code quality, and edge cases:\n\`\`\`\n${code}\n\`\`\``
    setMessages(prev => [...prev, { role: 'system', content: '📤 Code submitted for review' }])
    sendToAI(reviewMsg)
    setActiveTab('chat')
  }

  const diffClass = problem.difficulty === 'Easy' ? 'dc-easy' : problem.difficulty === 'Medium' ? 'dc-medium' : 'dc-hard'

  return (
    <div className="interview-shell">
      <div className="iheader">
        <div className="iheader-left">
          <div className="iheader-logo">⚡ DSA COACH</div>
          <div className="vsep"></div>
          <div className="hdr-prob-title">{problem.title}</div>
          <div className={`diff-chip ${diffClass}`}>{problem.difficulty.toUpperCase()}</div>
        </div>
        <div className="iheader-right">
          <div className="hints-box">Hints: <span>{hints}</span></div>
          <div className="timer-box">⏱ <span>{formatTime(seconds)}</span></div>
          <button className="btn-end" onClick={() => onEnd({ seconds, hints, messages })}>END SESSION</button>
        </div>
      </div>

      <div className="workspace">
        <div className="left-panel">
          <div className="panel-tabs">
            <div className={`ptab ${activeTab === 'problem' ? 'active' : ''}`} onClick={() => setActiveTab('problem')}>PROBLEM</div>
            <div className={`ptab ${activeTab === 'chat' ? 'active' : ''}`} onClick={() => setActiveTab('chat')}>CHAT</div>
          </div>

          {activeTab === 'problem' && (
            <div className="problem-pane">
              <h2 className="prob-title">{problem.title}</h2>
              <div className="prob-meta">
                <span className="prob-topic">{problem.topic}</span>
                <span className={`prob-diff ${diffClass}`}>{problem.difficulty}</span>
              </div>
              <p className="prob-desc">{problem.description}</p>
              <div className="prob-examples">
                {problem.examples.map((ex, i) => (
                  <div className="example-block" key={i}>
                    <div className="ex-label">EXAMPLE {i + 1}</div>
                    <div><strong>Input:</strong> {ex.input}</div>
                    <div><strong>Output:</strong> {ex.output}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'chat' && (
            <div className="chat-pane">
              <div className="interviewer-header">
                <div className="interviewer-avatar">AI</div>
                <div>
                  <div className="interviewer-name">Alex — Senior Engineer, AI</div>
                  <div className="interviewer-status"><div className="status-dot"></div>Online · Friendly &amp; Competitive</div>
                </div>
              </div>
              <div className="chat-messages">
                {messages.map((m, i) => (
                  <div className={`msg ${m.role}`} key={i}>
                    <div className="msg-av">{m.role === 'ai' ? 'AI' : m.role === 'user' ? 'ME' : '💡'}</div>
                    <div className="msg-bub" dangerouslySetInnerHTML={{ __html: formatMsg(m.content) }} />
                  </div>
                ))}
                {isThinking && (
                  <div className="msg ai">
                    <div className="msg-av">AI</div>
                    <div className="msg-bub" style={{ color: '#4B6480' }}>
                      thinking<span className="thinking-dots"><span>.</span><span>.</span><span>.</span></span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef}></div>
              </div>
              <div className="chat-input-area">
                <textarea
                  className="chat-input"
                  placeholder="Explain your approach, discuss complexity, ask a question..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={handleKey}
                />
                <div className="send-col">
                  <button className="btn-send" onClick={handleSend} disabled={isThinking}>SEND</button>
                  <button className="btn-hint" onClick={handleHint} disabled={isThinking}>HINT</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="right-panel">
          <div className="editor-bar">
            <div className="editor-bar-left">
              <select className="lang-select" value={language} onChange={handleLangChange}>
                <option value="cpp">C++ 17</option>
                <option value="python">Python 3</option>
                <option value="java">Java</option>
                <option value="javascript">JavaScript</option>
              </select>
            </div>
            <div className="editor-bar-right">
              <button className="btn-run" onClick={handleRun}>▶ RUN</button>
              <button className="btn-submit-code" onClick={handleSubmit}>SUBMIT →</button>
            </div>
          </div>
          <textarea
            className="code-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
          />
          <div className="output-pane">
            <span className="out-info">{output}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interview
