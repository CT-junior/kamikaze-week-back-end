import Router from "express";
import { FindCongressistaController } from "../controllers/FindCongressistaController";

const findCongressistaRouter = Router();

const findCongressistaController = new FindCongressistaController();

findCongressistaRouter.get("/congressista/:id", findCongressistaController.handle);

export { findCongressistaRouter };