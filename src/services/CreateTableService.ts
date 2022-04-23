import { pool } from "../database";

class CreateTableService{
    async execute(){
        const result = await pool.query("CREATE TABLE teste_table(id INTEGER PRIMARY KEY, name TEXT);");
        return {message: "created"};
    }
}


export { CreateTableService };