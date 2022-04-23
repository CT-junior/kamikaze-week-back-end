import { Router } from "express";
import { FindUserTestController } from "../controllers/FindUserTestController";

const findUserRouter = Router();

const findUserTestController = new FindUserTestController();

findUserRouter.get("/teste", findUserTestController.handle);

export { findUserRouter }