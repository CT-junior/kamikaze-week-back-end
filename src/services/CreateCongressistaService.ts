import { pool } from "../database";
import { Congressista } from "../entities/Congressista";

interface ICongressista{
    clientId: string,
    nome: string,
    curso: string,
    periodo: string,
    telefone: string,
    email: string,
    imagemUrl: string
};

class CreateCongressistaService{

    constructor(){}

    async execute({clientId, nome, curso, periodo, telefone, email, imagemUrl}: ICongressista): Promise<Congressista>{
        const congressista = new Congressista(clientId, nome, curso, periodo, telefone, email, imagemUrl);

        const text1 = "SELECT * FROM congressistas WHERE email like $1";
        const values1 = [
            email
        ]
        
        const emailAlreadyExists = await pool.query(text1, values1);

        if(emailAlreadyExists.rowCount !== 0){
            throw new Error("email already exists");
        }

        const text2 = "SELECT * FROM congressistas WHERE id like $1";
        const values2 = [
            clientId
        ]
        
        const congressistaAlreadyExists = await pool.query(text2, values2);

        if(congressistaAlreadyExists.rowCount !== 0){
            throw new Error("clientId already exists");
        }
        
        const id = congressista.id;
        const text = "INSERT INTO congressistas (id, nome, curso, periodo, telefone, email, imgurl) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;";

        const values = [
            clientId,
            nome,
            curso,
            periodo,
            telefone,
            email,
            imagemUrl
        ];

        try{
            const result = await pool.query(text, values);
        } catch (err){
            throw new Error("query failed! - creating congressista");
        }

        return;
    }
}


export { CreateCongressistaService };