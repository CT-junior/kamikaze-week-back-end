import { Request, Response } from "express";
import { pool } from "../database";

class FindUserTestController{
    async handle(req: Request, res: Response) {
        const text = "SELECT * FROM congressistas WHERE id like $1;";
        const values = [
            'alex1234'
        ]
        
        try {
            const result = await pool.query(text, values);

            const congressista = result.rows[0];

            if(!congressista){
                throw new Error("congressista id doesn't exists");
            }
            
            return res.status(200).json(congressista);

        } catch (err) {
            throw new Error("query failed");
        }
    }
}

export { FindUserTestController };