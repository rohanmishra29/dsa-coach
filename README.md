# ⚡ DSA Coach — AI Interview Simulator

**Live App:** https://dsa-coach-ebon.vercel.app

An AI-powered mock interview platform that simulates a real FAANG-style DSA (Data Structures & Algorithms) interview. Practice problem-solving out loud, get Socratic hints instead of full answers, submit code for review, and receive a scored debrief at the end — just like a real technical interview.

Built for **HACKHAZARDS '26** (AI/ML Track) by Rohan Kumar Mishra.

---

## 🎯 The Problem

Most DSA practice platforms (LeetCode, Codeforces, etc.) only check if your code passes test cases. They don't simulate the **conversational** part of a real interview — explaining your approach, defending your complexity analysis, and responding to follow-up pressure from an interviewer. That communication skill is often what makes or breaks a real interview, and there's no good way to practice it solo.

## 💡 The Solution

DSA Coach pairs you with an AI interviewer ("Alex") who:
- Presents a random DSA problem (12 problems across 7 topics: Arrays, Linked Lists, Binary Search, Strings, DP, Graphs, Bit Manipulation)
- Asks you to explain your approach **before** you start coding — just like a real interview
- Pushes back with follow-up questions on complexity, edge cases, and optimization
- Gives Socratic hints (guides you to the answer, never just hands it over) when you ask
- Reviews your submitted code for correctness, complexity, and quality
- Scores your full session and gives a personalized debrief at the end

---

## 🛠️ Tech Stack

**Frontend**
- React 19 + Vite
- Vanilla CSS (custom design system — dark theme, monospace UI)
- Deployed on **Vercel**

**Backend**
- Node.js + Express
- Acts as a secure proxy to the Claude API (keeps API keys off the client)
- Deployed on **Render**

**AI**
- Built for the **Anthropic Claude API** (`claude-sonnet-4-6`)
- Currently running in **mock mode** for the live demo (zero API cost) — the backend has a complete, ready-to-activate integration with the real Claude API. Swapping to live AI responses requires only adding an `ANTHROPIC_API_KEY` environment variable on the Render backend — no code changes needed.

---

## 🏗️ Architecture

```
React Frontend (Vercel)  --->  Express Backend (Render)  --->  Claude API (Anthropic)
       <---                          <---
```

The frontend never talks to Anthropic directly — all requests go through the backend proxy. This is the same pattern production apps use to keep API keys secure (the Anthropic API doesn't allow direct browser calls for this reason — CORS blocks it intentionally).

---

## ✨ Features

- 🎲 Random problem selection across difficulty levels and topics
- 💬 Multi-turn AI conversation with context retention
- 💡 On-demand Socratic hints (tracked and scored)
- 📝 Multi-language code editor (C++, Python, Java, JavaScript)
- 📤 AI-powered code review on submission
- ⏱️ Live session timer
- 📊 End-of-session debrief with AI-generated score and feedback
- 🎨 Custom dark-mode UI designed to feel like a real technical interview tool

---

## 🚀 Running Locally

**Backend:**
```bash
cd dsa-coach-server
npm install
node index.js
# Runs on http://localhost:3001
```

**Frontend:**
```bash
cd dsa-coach
npm install
npm run dev
# Runs on http://localhost:5173
```

---

## 🔗 Links

- **Live App:** https://dsa-coach-ebon.vercel.app
- **Frontend Repo:** https://github.com/rohanmishra29/dsa-coach
- **Backend Repo:** https://github.com/rohanmishra29/dsa-coach-server

---

## 🧠 Built For

**HACKHAZARDS '26** — AI/ML Track
By Rohan Kumar Mishra ([@rohanmishra29](https://github.com/rohanmishra29))
