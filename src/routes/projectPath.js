import express from "express";
import { createProject,getAllProjects } from "../controllers/projectController.js";
const projectRouter = express.Router();
projectRouter.post('/createProject', createProject);
projectRouter.get("/getProjects",getAllProjects)

export default projectRouter;