import { NextFunction, Request, Response } from "express";
import { pool } from "../database";


async function verifyIfUserAlreadyIsSubscriver(req: Request, res: Response, next: NextFunction){
    const {congressista, palestraId} = req.body;

    const text = "SELECT * FROM relations WHERE id_congressista like $1 and id_palestra like $2";
    const values = [
        congressista,
        palestraId
    ]

    try {
        const result = await pool.query(text, values);

        if(result.rowCount !== 0){
            throw new Error("subscription");
        }

    } catch (err) {
        if(err.message === "subscription"){
            throw new Error("congressista already has a subscription");
        }
        throw new Error("query failed - check palestra_id and congressista");
        
    }
    

    return next();
}


export { verifyIfUserAlreadyIsSubscriver };