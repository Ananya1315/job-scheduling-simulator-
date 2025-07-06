# 💽 Job Scheduling Simulator

An interactive disk scheduling visualizer built with **React.js**, designed to demonstrate various disk scheduling algorithms like **FCFS**, **SSTF**, **SCAN**, and **C-SCAN**. The simulator visually shows the head movements and total seek time based on user input, making it great for understanding disk scheduling from a DSA and OS perspective.

---

## 🔗 Live Demo

👉 [View the Live App on Netlify](https://job-scheduler-ananya.netlify.app/)

---

## ⚙️ Tech Stack

- **Frontend:** React.js
- **Charts:** Chart.js
- **CI/CD:** GitHub Actions
- **Deployment:** Netlify

---

## 🧠 Features

- Supports 4 major algorithms:
  - FCFS (First Come First Serve)
  - SSTF (Shortest Seek Time First)
  - SCAN (Elevator Algorithm)
  - C-SCAN (Circular SCAN)
- Custom input for:
  - Initial head position
  - Disk size
  - Request sequence
  - Direction for SCAN & C-SCAN
- Real-time visual charts for each algorithm
- Displays total seek time and execution path
- Clean, responsive layout

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/Ananya1315/job-scheduling-simulator-.git
cd job-scheduling-simulator-
npm install
npm start
```
🛠 Scripts
Command	Description
npm start	Run app in development mode
npm run build	Build app for production
npm test	Run tests (if added)

✅ CI/CD
This project uses GitHub Actions for CI. Every push triggers:

Lint checks

Build tests

Auto-deploy to Netlify

📦 Deployment
This app is deployed via Netlify using the production build folder.
You can also drag and drop your build folder into Netlify manually for quick deployment.

✨ Author
Ananya Samudrala
