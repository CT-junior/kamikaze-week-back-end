import { Request, Response } from "express";
import { CreateCongressistaService } from "../services/CreateCongressistaService";

class CreateCongressistaController{

    async handle(req: Request, res: Response) {
        const {clientid, nome, curso, periodo, telefone, email, imagemUrl} = req.body;

        if(!periodo){
            throw new Error("periodo is undefined");
        }
        const congressistaRequest = {
            clientid,
            nome,
            curso,
            periodo,
            telefone,
            email,
            imagemUrl
        }

        const createCongressistaService = new CreateCongressistaService();

        const congressista = await createCongressistaService.execute(congressistaRequest);
        return res.status(201).json(congressista);
    }
}


export { CreateCongressistaController };