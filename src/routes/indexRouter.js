
import express from 'express';
import contactRouter from "./contactPaths.js";
import userRouter from './userPaths.js';
const mainRouter = express.Router();

mainRouter.use('/contact', contactRouter);
mainRouter.use('/user', userRouter);
export default mainRouter;