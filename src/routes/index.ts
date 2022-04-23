import Router from "express";
import { pool } from "../database";
import { congressistaRouter } from "./congressista.routes";
import { hello } from "./teste.routes";

const router = Router();

router.use(congressistaRouter);

router.use(hello);

export { router };