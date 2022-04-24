import { Router } from "express";
import { DeleteCongressistaController } from "../controllers/DeleteCongressistaController";

const deleteCongressistaRouter = Router();

const deleteCongressistaController = new DeleteCongressistaController();


deleteCongressistaRouter.delete("/congressista/:congressista", deleteCongressistaController.handle);

export { deleteCongressistaRouter };