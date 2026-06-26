function Landing({ onStart }) {
  return (
    <div className="landing">
      <div className="landing-logo">⚡ DSA COACH</div>
      <h1 className="landing-title">
        Crack the<br />
        <span>coding interview.</span>
      </h1>
      <p className="landing-sub">
        Practice with an AI that asks like a real interviewer — competitive questions,
        helpful hints, and honest feedback.
      </p>
      <button className="btn-start" onClick={onStart}>
        START INTERVIEW →
      </button>
    </div>
  )
}

export default Landing
