import { Congressista } from "../entities/Congressista";

interface ICongressista{
    firstName: string;
    lastName: string;
    email: string;
    imgUrl: string;
};

class CreateCongressistaService{

    constructor(){}

    execute({firstName, lastName, email, imgUrl}: ICongressista): Congressista{
        const congressista = new Congressista(firstName, lastName, email, imgUrl);

        return congressista;
    }
}


export { CreateCongressistaService };