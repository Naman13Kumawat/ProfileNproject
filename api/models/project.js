import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
  },
  notes: {
    type: String,
  },
  userID:{
    type: String,
  }
});

export default mongoose.model("Project" , ProjectSchema);
