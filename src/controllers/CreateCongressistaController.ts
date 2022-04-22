import { Request, Response } from "express";
import { CreateCongressistaService } from "../services/CreateCongressistaService";

class CreateCongressistaController{

    handle(req: Request, res: Response): Response{
        const {firstName, lastName, imgUrl, email} = req.body;

        const congressistaRequest = {
            firstName,
            lastName,
            imgUrl,
            email
        }

        const createCongressistaService = new CreateCongressistaService();

        const congressista = createCongressistaService.execute(congressistaRequest);
        return res.status(201).json(congressista);
    }
}


export { CreateCongressistaController };