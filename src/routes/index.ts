import Router from "express";
import { congressistaRouter } from "./congressista.routes";
import { deleteCongressistaRouter } from "./deleteCongressista.routes";
import { findCongressistaRouter } from "./findCongressista.routes";
import { findUserRouter } from "./findUserTest.routes";
import { listCongressistaByPalestraRouter } from "./listCongressistaByPalestra.routes";
import { listCongressistasRouter } from "./listCongressistas.routes";
import { palestraRouter } from "./palestra.routes";
import { hello } from "./teste.routes";

const router = Router();

router.use(congressistaRouter);

router.use(findCongressistaRouter);

router.use(hello);

router.use(findUserRouter);

router.use(listCongressistasRouter);

router.use(palestraRouter);

router.use(listCongressistaByPalestraRouter);

router.use(deleteCongressistaRouter);

export { router };