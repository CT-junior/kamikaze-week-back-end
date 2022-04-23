import Router from "express";
import { CreateCongressistaController } from "../controllers/CreateCongressistaController";
import { authencticateCongressista } from "../middlewares/authenticateCongressista";

const congressistaRouter = Router();

const createCongressistaController = new CreateCongressistaController();

congressistaRouter.post("/congressista", authencticateCongressista, createCongressistaController.handle);

export { congressistaRouter };