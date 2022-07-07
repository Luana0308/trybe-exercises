import * as userController from "../controllers/users.controllers";
import { Router } from "express";

const userRouter = Router();

userRouter.use('/users', userController.getAll)

export default userRouter;
