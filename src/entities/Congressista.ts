class Congressista{
    id: string;
    constructor(
        private clientId,
        private nome,
        private curso,
        private periodo,
        private telefone,
        private email,
        private imagemUrl)
        {}
}

export { Congressista };