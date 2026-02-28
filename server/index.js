import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Student from "./models/Student.js";
import Room from "./models/Room.js";

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

app.get("/Comp", (req, res) => {
  res.json(" ");
  console.log("Compsss");
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


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});