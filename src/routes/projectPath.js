import express from "express";
import { createProject } from "../controllers/projectController.js";
const projectRouter = express.Router();
projectRouter.post('/createProject', createProject);

export default projectRouter;