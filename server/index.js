import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Student from "./models/Student.js";
import Room from "./models/Room.js";
import { compatibility ,preferenceMatch } from "./functions.js";

dotenv.config();

const app = express();
const PORT=5000;
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
   .then(() => {
     console.log("MongoDB Connected");
     app.listen(process.env.PORT || 5000, () =>
       console.log("Server running")
     );
   })
   .catch(err => console.log(err));


app.get("/", async (req, res) => {
  try {
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get("/Personality", (req, res) => {
  res.json(" ");
});


app.get("/Login", (req, res) => {
  res.json(" ");
  console.log("enteredLogin");
});

app.get("/SignUp", (req, res) => {
  res.json(" ");
  console.log("enteredSignUp");
});

app.get("/Preference", (req, res) => {
  res.json(" ");
  console.log("Compsss");
});
app.get("/Dashboard", (req, res) => {
  res.json(" ");
  console.log("Compsss");
});
app.get("/Mid", (req, res) => {
  res.json(" ");
  console.log("Compsss");
});

app.post("/signup", async (req, res) => {
  try {
    console.log("BODY:", req.body);
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(400).json({ message: "User not found" });
    }

    if (student.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({
      message: "Login successful",
      studentId: student._id,
      name: student.name
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/submit-personality", async (req, res) => {
  const { studentId, scores, type } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(
      studentId,
      {
        personalityScores: scores,
        personalityType: type
      },
      { new: true }
    );

    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/submit-preferences", async (req, res) => {
  const { studentId, preferences } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(
      studentId,
      { preferences },
      { new: true }
    );

    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.get("/student/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/best-match/:id", async (req, res) => {
  try {
    const currentStudent = await Student.findById(req.params.id);
    if (!currentStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    const allStudents = await Student.find({
      _id: { $ne: currentStudent._id },
      roomAssigned: false
    });
    if (allStudents.length === 0) {
      return res.json({ message: "No other students available" });
    }
    const scoredStudents = allStudents.map(student => {
      const compScore = compatibility(
        currentStudent.personalityScores,
        student.personalityScores
      );
      const prefScore = preferenceMatch(
        currentStudent.preferences,
        student.preferences
      );
      return {
        student,
        compScore,
        prefScore
      };
    });
    scoredStudents.sort((a, b) => a.compScore - b.compScore);
    const topCandidates = scoredStudents.slice(0, 5);
    topCandidates.sort((a, b) => b.prefScore - a.prefScore);
    const bestMatch = topCandidates[0];
    console.log(bestMatch.prefScore);
    res.json({
      match: bestMatch.student,
      compatibilityScore: bestMatch.compScore,
      preferenceMatchScore: bestMatch.prefScore,
      compatibilityPercent: Math.round(
        100-(bestMatch.compScore/64)*100
      )
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/confirm-room", async (req, res) => {
  const { student1Id, student2Id } = req.body;
  console.log(student2Id);
  try {
    const newRoom = await Room.create({
      roomNumber: Math.floor(Math.random() * 1000),
      students: [student1Id, student2Id]
    });
    await Student.findByIdAndUpdate(student1Id, {
      roomAssigned: true
    });
    await Student.findByIdAndUpdate(student2Id, {
      roomAssigned: true
    });
    res.json(newRoom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});