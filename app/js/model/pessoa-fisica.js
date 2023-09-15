class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(`${nome} - Física`, idade, dataNascimento);
        this._cpf = cpf;
    }
}
