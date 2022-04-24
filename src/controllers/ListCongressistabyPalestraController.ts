import { Request, Response } from "express";
import { ListCongressistasByPalestraService } from "../services/ListCongressistasByPalestraService";

class ListCongressistasByPalestraController{
    async handle(req: Request, res: Response){
        const palestraId = req.params.palestraId;

        const listCongressistasByPalestraService = new ListCongressistasByPalestraService();

        const result = await listCongressistasByPalestraService.execute(palestraId);

        return res.json(result).send();
    }
}


export { ListCongressistasByPalestraController };