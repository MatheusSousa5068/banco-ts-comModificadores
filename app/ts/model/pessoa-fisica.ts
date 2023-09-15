class PessoaFisica extends Pessoa {
    readonly _cpf: string
    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(`${nome} - Física`, idade, dataNascimento);
        this._cpf = cpf
    }
}