import { Router } from "express";
import { CreateTableController } from "../controllers/CreateTableController";

const createdatabase = Router();

const createTableController = new CreateTableController();

createdatabase.get("/createdb", createTableController.handle);

export { createdatabase }