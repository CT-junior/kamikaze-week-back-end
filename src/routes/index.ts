import Router from "express";
import { congressistaRouter } from "./congressista.routes";
import { database } from "./database.routes";
import { hello } from "./teste.routes";

const router = Router();

router.use(congressistaRouter);

router.use(hello);

router.use(database);

export { router };