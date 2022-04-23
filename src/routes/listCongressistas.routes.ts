import { Router } from "express";
import { ListCongressistasController } from "../controllers/ListCongressistasController";

const listCongressistasRouter = Router();

const listCongressistasController = new ListCongressistasController();

listCongressistasRouter.get("/congressista", listCongressistasController.handle);

export { listCongressistasRouter };