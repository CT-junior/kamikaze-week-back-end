import Router from "express";
import { pool } from "../database";
import { congressistaRouter } from "./congressista.routes";
import { createdatabase } from "./createdatabase.routes";
import { hello } from "./teste.routes";

const router = Router();

router.use(congressistaRouter);

router.use(hello);

router.use(createdatabase);

export { router };