import { pool } from "../database";

interface ISubscription{
    congressista: string;
    palestraId: string;
}

class SubscriptionCongressistaService{
    async execute({congressista, palestraId}: ISubscription){

        const text1 = "SELECT * FROM palestras WHERE id like $1";
        const values1 = [
            palestraId
        ]

        try {
            const result = await pool.query(text1, values1);
            
            if(result.rowCount === 0){
                throw new Error("palestra");
            }

        } catch (err) {
            if(err.message === "palestra"){
                throw new Error("paletra_id not found");
            }

            throw new Error("query failed - SELECT palestra");
        }

        const text = "INSERT INTO relations (id_congressista, id_palestra) VALUES ($1, $2)";
        const values = [
            congressista,
            palestraId
        ]

        try {
            const result = await pool.query(text, values);
            return {message: "OK"};
        } catch (error) {
            throw new Error("query failed - subscription");
        }
    }
}

export { SubscriptionCongressistaService };