import { pool } from "../database";

class ListCongressistaService{
    async execute(){

        const text = "SELECT * FROM congressistas";
        const values = [];

        const congressistas = await pool.query(text, values);

        return congressistas.rows;
    }
}

export { ListCongressistaService };