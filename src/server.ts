import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
    if(err instanceof Error){
        return res.status(400).json({error: err.message});
    }
    return res.status(500).json({
        status: "error",
        message: "internal server error"
    });
});

app.listen(PORT, ()=>{
    console.log("Server is running!!!");
});