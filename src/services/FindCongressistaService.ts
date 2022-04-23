import { pool } from "../database";

class FindCongressistaService {
    async execute(clienteId: string){
        const text = "SELECT * FROM congressistas WHERE id like $1;";
        const values = [
            clienteId
        ]
        
        try {
            const result = await pool.query(text, values);

            const congressista = result.rows[0];

            if(!congressista){
                throw new Error("id");
            }

            return congressista;
            
        } catch (err) {
            if(err.message === "id"){
                throw new Error("congressista id doesn't exists");
            }
            throw new Error("query failed");
        }
        
    }
}


export { FindCongressistaService };