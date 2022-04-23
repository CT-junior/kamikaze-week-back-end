class Congressista{
    id: string;
    constructor(private firstName: string, private lastName: string, private imgUrl: string, private email: string){
        this.id = firstName + "." + lastName;
    }
}

export { Congressista };