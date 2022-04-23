import { Router } from "express";
import { SubscriptionCongressistaController } from "../controllers/SubscriptionCongressistaController";
import { verifyCongressistaId } from "../middlewares/verifyCongressistaId";
import { verifyIfUserAlreadyIsSubscriver } from "../middlewares/verifyIfUserAlreadyIsSubscriver";


const palestraRouter = Router();

const subscriptionCongressistaController = new SubscriptionCongressistaController();

palestraRouter.post("/palestra", verifyCongressistaId, verifyIfUserAlreadyIsSubscriver, subscriptionCongressistaController.handle);

export { palestraRouter };