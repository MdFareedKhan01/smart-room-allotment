import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

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


let items=["fareed","Rehan","faiqa","farhan"];


app.get("/", async (req, res) => {
  try {
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const questions = [
  { id: "q1", text: "I see myself as someone who is talkative.", trait: "E", reverse: false },
  { id: "q2", text: "I see myself as someone who worries a lot.", trait: "N", reverse: false },
  { id: "q3", text: "I see myself as someone who does a thorough job.", trait: "C", reverse: false },
  { id: "q4", text: "I see myself as someone who is original, comes up with new ideas.", trait: "O", reverse: false },
  { id: "q5", text: "I see myself as someone who is generally trusting.", trait: "A", reverse: false },
  { id: "q6", text: "I see myself as someone who tends to be quiet.", trait: "E", reverse: true },
  { id: "q7", text: "I see myself as someone who tends to be lazy.", trait: "C", reverse: true },
  { id: "q8", text: "I see myself as someone who is relaxed, handles stress well.", trait: "N", reverse: true },
  { id: "q9", text: "I see myself as someone who has an active imagination.", trait: "O", reverse: false },
  { id: "q10", text: "I see myself as someone who tends to find fault with others.", trait: "A", reverse: true }
];

app.get("/Personality", (req, res) => {
  res.json(questions);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});