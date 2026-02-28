import mongoose from "mongoose";

const preferenceSchema = new mongoose.Schema({
  food: {
    type: String,
    default: ""
  },
  time: {
    type: String,
    default: ""
  },
  room: {
    type: String,
    default: ""
  },
  study: {
    type: String,
    default: ""
  },
  social: {
    type: String,
    default: ""
  }
}, { _id: false });

const studentSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  personalityScores: {
    type: [Number],
    default: []
  },

  personalityType: {
    type: String,
    default: ""
  },

  preferences: {
    type: preferenceSchema,
    default: () => ({})
  }

}, { timestamps: true });

export default mongoose.model("Student", studentSchema);