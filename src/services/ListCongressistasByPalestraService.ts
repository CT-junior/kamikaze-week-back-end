import { pool } from "../database";

class ListCongressistasByPalestraService{
    async execute(palestraId: string){
        const text1 = "SELECT * FROM palestras WHERE id like $1";
        const values1 = [
            palestraId
        ]

        try {
            const res = await pool.query(text1, values1);

            if(res.rowCount === 0){
                throw new Error("palestra");
            }

        } catch (err) {
            if(err.message === "palestra"){
                throw new Error("palestraId doesn't exists");
            }
            throw new Error("query failed - verify palestraId");
        }


        const text = "SELECT id_congressista FROM relations WHERE id_palestra like $1"
        const values = [
            palestraId
        ]

        try {
            const res = await pool.query(text, values);

            return res.rows;
        } catch (err) {
            console.log(err.stack);
            throw new Error("query failed - get realations");
        } 

    }
}


export { ListCongressistasByPalestraService };