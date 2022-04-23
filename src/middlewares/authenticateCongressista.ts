import { NextFunction, Request, Response } from "express";

function authencticateCongressista(req: Request, res: Response, next: NextFunction){
    const {nome, email, telefone, periodo} = req.body;

    if(!nome){
        return res.status(500).json({error: "nome is undefined"});
    }

    if(!email){
        return res.status(500).json({error: "email is undefined"});
    }

    if(!telefone){
        return res.status(500).json({error: "telefone is undefined"});
    }

    if(!periodo){
        return res.status(500).json({error: "periodo is undefined"});
    }

    return next();
}

export { authencticateCongressista };