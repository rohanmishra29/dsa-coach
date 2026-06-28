# DSA Interview Coach

## Problem and Domain

Most coding interview practice happens in isolation. Platforms check whether code passes test cases, but real interviews are conversational: you explain your approach out loud, defend your complexity choices, and respond to follow-up pressure from an interviewer. There is no easy way to practice that part of the interview alone.

Themes Selected: Learning & Knowledge Systems, Human Experience & Productivity

## Objective

Target users: students and engineers preparing for technical coding interviews.

Pain point: practicing alone means no one pushes back on your reasoning, asks follow-up questions, or reviews your actual code the way a real interviewer would.

Value provided: an AI interviewer that presents a DSA problem, asks the candidate to explain their approach before coding, pushes with follow-up questions on complexity and edge cases, gives Socratic hints instead of full answers, and reviews submitted code with specific feedback. A scored debrief at the end summarizes the session.

## Team and Approach

Team Name: SoloStack

Team Members:
- Rohan Kumar Mishra (GitHub: rohanmishra29)

Approach:
- Chose this problem because most DSA practice tools test correctness but never the communication skill that actually decides real interviews.
- Key challenge addressed: making the AI feel like a real interviewer, pushing back and asking why, giving hints instead of answers, rather than a chatbot that just answers questions.
- The project went through an architecture pivot from a single HTML file calling the Anthropic API directly, to a proper React frontend with a separate Express backend, after discovering that browsers block direct calls to the Anthropic API for security reasons.

## Tech Stack

Core Technologies Used:
- Frontend: React 19, Vite, custom CSS
- Backend: Node.js, Express
- Database: None, session state is client-side
- APIs: Built for the Anthropic Claude API
- Hosting: Vercel for frontend, Render for backend

Additional Technologies Used:
- AI / ML: Claude API integration for interview conversation, hints, code review, and session scoring. Currently running in a mock response mode for the live demo at zero API cost, with the real Claude integration fully wired and ready to activate by adding an API key.

## Key Features

- Random DSA problem selection across 12 problems and 7 topics
- Multi-turn AI interview conversation with context retention
- On-demand Socratic hints, tracked and scored
- Multi-language code editor supporting C++, Python, Java, and JavaScript
- AI-powered code review on submission
- Live session timer and hint counter
- End-of-session debrief with AI-generated score and personalized feedback

## Demo and Deliverables

- Demo Video Link: to be added
- Deployment Link: https://dsa-coach-ebon.vercel.app
- Pitch Deck: to be added

## Tasks and Bonus Checklist

- Mandatory social task: pending
- Bonus Task 1, badge sharing: pending
- Bonus Task 2, blog or article: not attempted

## How to Run the Project

Requirements: Node.js v18 or higher, npm

Backend setup:
cd dsa-coach-server
npm install
node index.js
Runs on http://localhost:3001

Frontend setup:
cd dsa-coach
npm install
npm run dev
Runs on http://localhost:5173

## Future Scope

- Real code execution via the Judge0 API instead of AI-only review
- Expanded problem bank covering more topics and difficulty levels
- Persistent user accounts to track improvement across sessions
- Activating the live Claude API integration in place of the current mock mode

## Resources and Credits

- Built with the Anthropic Claude API
- React, Vite, Express

## Final Words

Built solo across a tight hackathon window. The biggest lesson was architectural: a feature that works perfectly in a single demo file can completely break once deployed, because of browser security rules around API keys. Solving that properly with a real backend proxy made the project both more secure and more genuinely production-shaped.

## Links

- Live App: https://dsa-coach-ebon.vercel.app
- Frontend Repo: https://github.com/rohanmishra29/dsa-coach
- Backend Repo: https://github.com/rohanmishra29/dsa-coach-server

Built for HACKHAZARDS '26 by Rohan Kumar Mishra, GitHub: rohanmishra29
