import { Request, Response } from "express";
import { FindCongressistaService } from "../services/FindCongressistaService";

class FindCongressistaController {

    async handle(req: Request, res: Response){
        const id = req.params.id;
        
        const findCongressistaService = new FindCongressistaService();

        const result = await findCongressistaService.execute(id);

        return res.json(result);
    }
}


export { FindCongressistaController };