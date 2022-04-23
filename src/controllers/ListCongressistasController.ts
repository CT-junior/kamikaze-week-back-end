import { Request, Response } from "express";
import { ListCongressistaService } from "../services/ListCongressistasService";



class ListCongressistasController{
    async handle(req: Request, res: Response){
        const listCongressistasService = new ListCongressistaService();

        const congressistas = await listCongressistasService.execute();

        return res.status(200).json(congressistas);
    }
}


export { ListCongressistasController };