import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT=5000;
app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB Connected");
//     app.listen(process.env.PORT || 5000, () =>
//       console.log("Server running")
//     );
//   })
//   .catch(err => console.log(err));


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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});