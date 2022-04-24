import { pool } from "../database";

class DeleteCongressistaService{

    async execute(congressista: string){
        const text = "DELETE FROM congressistas WHERE id like $1";
        const values = [
            congressista
        ];

        try {
            const res = await pool.query(text, values);

            return;

        } catch (error) {
            throw new Error("query failed - delete");   
        }
    }
}


export { DeleteCongressistaService };