import Router from "express";
import { CreateCongressistaController } from "../controllers/CreateCongressistaController";


const congressistaRouter = Router();

const createCongressistaController = new CreateCongressistaController();

congressistaRouter.post("/congressista", createCongressistaController.handle);

export { congressistaRouter };