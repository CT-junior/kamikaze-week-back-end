import { Response, Request } from "express";
import { SubscriptionCongressistaService } from "../services/SubscriptionCongressistaService";


class SubscriptionCongressistaController{
    async handle(req: Request, res: Response){

        const {congressista, palestraId} = req.body;

        const subscriptionCongressistaService = new SubscriptionCongressistaService();
        
        await subscriptionCongressistaService.execute({congressista, palestraId});

        return res.status(200).send();
    }
}


export { SubscriptionCongressistaController };