import { Request, Response } from "express";
import { pool } from "../database";
import { CreateTableService } from "../services/CreateTableService";

class CreateTableController{
    handle(req: Request, res: Response): Response | any{
        const createTableService = new CreateTableService();
        return createTableService.execute();
    }
}

export { CreateTableController };