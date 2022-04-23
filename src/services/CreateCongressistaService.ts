import { pool } from "../database";
import { Congressista } from "../entities/Congressista";

interface ICongressista{
    firstName: string;
    lastName: string;
    email: string;
    imgUrl: string;
};

class CreateCongressistaService{

    constructor(){}

    async execute({firstName, lastName, email, imgUrl}: ICongressista): Promise<Congressista>{
        const congressista = new Congressista(firstName, lastName, email, imgUrl);
        
        const id =congressista.id;
        const text = "INSERT INTO congressistas (id, firstName, lastName, email, imgUrl) VALUES ($1, $2, $3, $4, $5) RETURNING *;";

        const values = [
            congressista.id,
            firstName,
            lastName,
            email,
            imgUrl
        ];

        try{
            const result = await pool.query(text, values);
            console.log(result.rows[0]);
        } catch (err){
            console.log(err.stack);
            throw new Error("query failed!");
        }

        return congressista;
    }
}


export { CreateCongressistaService };