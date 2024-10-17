// import { array } from "i/lib/util";
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    projectTitle: {
      type: String,
    },
    videos: {
      type: Array,
      required: false,
    },
    documents: {
      type: Array,
      required: false,
    },
    images: {
      type: Array,
    },
    projectContent: {
      type: String,
    },
    projectRep: {
      type: String,
    },
    projectLink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", courseSchema);
