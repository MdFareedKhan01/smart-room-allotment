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

let items=["fareed", "Rehan","faizan","faiqa"];

app.get("/", (req, res) => {
  res.json(items);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});