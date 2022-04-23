import { NextFunction, Request, Response } from "express";
import { pool } from "../database";

async function verifyCongressistaId(req: Request, res: Response, next: NextFunction){

    const { congressista } = req.body;

    const text = "SELECT * FROM congressistas WHERE id like $1";
    const values = [
        congressista
    ]
    
    const congressistaIdlAlreadyExists = await pool.query(text, values);

    if(congressistaIdlAlreadyExists.rowCount === 0){
        throw new Error("congressista id not found");
    }

    return next();
}

export { verifyCongressistaId };