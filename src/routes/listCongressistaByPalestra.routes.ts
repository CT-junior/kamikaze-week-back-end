import Router from "express";
import { ListCongressistasByPalestraController } from "../controllers/ListCongressistabyPalestraController";

const listCongressistaByPalestraRouter = Router();

const listCongressistasByPalestraController = new ListCongressistasByPalestraController();

listCongressistaByPalestraRouter.get("/palestra/:palestraId", listCongressistasByPalestraController.handle);

export { listCongressistaByPalestraRouter };