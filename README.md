# Job Scheduling Simulator

A full-stack Disk Scheduling Simulator built using React and FastAPI that visualizes disk scheduling algorithms, compares their performance, and recommends the most efficient algorithm for a given workload.

## Features

* Interactive disk scheduling simulation
* Supports multiple scheduling algorithms
* Real-time movement visualization using charts
* Algorithm comparison dashboard
* Automatic best algorithm recommendation
* Performance insights and metrics
* REST API powered backend
* Dockerized backend deployment
* Automated testing with Pytest and React Testing Library
* GitHub Actions CI/CD pipeline

---

## Supported Algorithms

| Algorithm | Description                   |
| --------- | ----------------------------- |
| FCFS      | First Come First Serve        |
| SSTF      | Shortest Seek Time First      |
| SCAN      | Elevator Scheduling Algorithm |
| CSCAN     | Circular SCAN                 |
| LOOK      | Optimized SCAN                |
| CLOOK     | Optimized CSCAN               |

---

## Tech Stack

### Frontend

* React.js
* Axios
* Recharts
* CSS3

### Backend

* FastAPI
* Python
* Uvicorn

### Testing

* Pytest
* React Testing Library

### DevOps

* Docker
* GitHub Actions

---

## System Architecture

```text
React Frontend
      │
      ▼
Axios API Requests
      │
      ▼
FastAPI Backend
      │
      ▼
Scheduling Algorithms Engine
      │
      ▼
Results & Comparison Engine
      │
      ▼
Charts and Recommendations
```

---

## Project Screenshots

### Home Page

<img width="957" height="533" alt="image" src="https://github.com/user-attachments/assets/16628354-9763-422a-b438-4ddaa913d760" />

### Algorithm Simulation

<img width="957" height="528" alt="image" src="https://github.com/user-attachments/assets/35a6b73e-2bbb-45f9-a680-bcf70e2e43f0" />

### Algorithm Comparison Dashboard

<img width="562" height="455" alt="image" src="https://github.com/user-attachments/assets/9ac47b06-b2a3-435d-9bba-ba354d6dcf7b" />
<img width="550" height="379" alt="image" src="https://github.com/user-attachments/assets/1cd3e07f-79df-4bf5-ab12-a4462fe06c89" />

### CI/CD Pipeline

<img width="659" height="341" alt="image" src="https://github.com/user-attachments/assets/94cec450-e392-4807-ae6d-fcd64c5914ef" />
<img width="659" height="347" alt="image" src="https://github.com/user-attachments/assets/3b978e4a-7f69-46ff-9fec-1b2eefa50cba" />

---

## API Endpoints

### Run Single Algorithm

```http
POST /simulate
```

Request:

```json
{
  "algorithm": "fcfs",
  "requests": [98,183,37,122,14,124,65,67],
  "head": 53,
  "disk_size": 200,
  "direction": "right"
}
```

### Compare All Algorithms

```http
POST /compare
```

Request:

```json
{
  "requests": [98,183,37,122,14,124,65,67],
  "head": 53,
  "disk_size": 200,
  "direction": "right"
}
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Ananya1315/job-scheduling-simulator-.git
```

### Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs at:

```text
http://localhost:8000
```

### Frontend Setup

```bash
cd frontend

npm install

npm start
```

Frontend runs at:

```text
http://localhost:3000
```

---

## Running with Docker

### Build Image

```bash
docker build -t job-scheduler-backend .
```

### Run Container

```bash
docker run -p 8000:8000 job-scheduler-backend
```

---

## Testing

### Backend Tests

```bash
pytest
```

### Frontend Tests

```bash
npm test
```

---

## CI/CD

The project uses GitHub Actions to automatically:

* Install dependencies
* Verify FastAPI backend
* Run backend tests
* Run frontend tests
* Validate builds

---

## Future Enhancements

* Disk scheduling animation playback
* User authentication
* Performance history tracking
* Export simulation reports
* Advanced analytics dashboard

---

## Author

**Ananya Samudrala**

Computer Science Engineering Student

Passionate about Full Stack Development, System Design, Artificial Intelligence and Software Engineering.
