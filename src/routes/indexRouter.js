
import express from 'express';
import contactRouter from "./contactPaths.js";
import userRouter from './userPaths.js';
import projectRouter from './projectPath.js';
const mainRouter = express.Router();

mainRouter.use('/contact', contactRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/project', projectRouter);
export default mainRouter;