# RoomEngine

An intelligent hostel room allocation system that assigns roommates based on personality compatibility and lifestyle preferences.

Built using the **MERN stack** .

---

##  Features

-  16-question personality test (MBTI-style scoring)
-  Compatibility-based roommate matching
-  Automatic hostel room creation
-  Admin-only hostel room dashboard (protected via secret key)
-  Preference matching score system
-  Real-time room allocation updates
-  Full-stack MERN architecture

---

##  Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router DOM
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

##  How It Works

### 1️. Personality Test

Users answer 16 questions.

Each answer contributes to four personality dimensions:
- E / I
- S / N
- T / F
- J / P

Scores are calculated and converted into a personality type (e.g., ENTJ, INFP).

---

### 2️. Best Match Algorithm

For a student:

1. Calculate compatibility score with all other students.
2. Find 5 students with lowest compatibility scores(most compatible).
3. Among those, select student with highest preference match score.
4. Display best match.

---

### 3️. Room Allocation

When a student confirms a roommate:

- A new room is created
- Both students are marked as assigned
- Room document stores:
  - Room number
  - Two student ObjectIds

---

### 4️. Admin Room Dashboard

Accessible via secret key:

```
HOSTEL2026
```

Displays:
- All room numbers
- Students inside each room

---

##  Project Structure

```
smart-room-allotment/

├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── BestMatch.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Mid.jsx
│   │   │   ├── Personality.jsx
│   │   │   ├── Preference.jsx
│   │   │   ├── Rooms.jsx
│   │   │   └── SignUp.jsx
│   │   ├── Comp.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   └── vite.config.js
│
├── server/
│   ├── models/
│   │   ├── Student.js
│   │   └── Room.js
│   ├── functions.js
│   ├── index.js
│   └── .env
│
└── README.md
```

---

##  API Routes

### Student Routes

```
POST   /signup
POST   /login
POST   /submit-personality
GET    /best-match/:studentId
POST   /confirm-room
```

### Room Routes

```
GET    /all-rooms
```

---

##  How To Run Locally

### 1️. Clone Repository

```bash
git clone <repo-url>
cd smart-room-allotment
```

---

### 2️. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm run dev
```

---

### 3️. Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Highlights

- Real-world hostel allocation problem
- Psychological + preference-based pairing
- Automated room creation
- Admin dashboard
- Scalable matching logic
- Clean full-stack implementation

---

## Future Improvements

- JWT authentication
- Proper admin role system
- Room capacity management
- Conflict detection
- Matching analytics dashboard
- Preference priority based roommate matching
- Use machine learning for more accurate results

---

## Contributors

- Md Fareed Khan
- Rehan Fazal
- Faiqa
- Farhan Quamar

---

##  Conclusion

RoomEngine combines psychology and technology to create harmonious hostel living environments using compatibility-driven matching.