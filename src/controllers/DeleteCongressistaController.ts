import { Request, Response } from "express";
import { DeleteCongressistaService } from "../services/DeleteCongressistaService";

class DeleteCongressistaController{
    async handle(req: Request, res: Response){
        const {congressista} = req.params;

        const deletCongressistaService = new DeleteCongressistaService();

        await deletCongressistaService.execute(congressista);

        return res.status(200).send();
    }
}


export { DeleteCongressistaController };