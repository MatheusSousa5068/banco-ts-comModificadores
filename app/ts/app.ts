let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);


// Atividade - Modificadores de acesso
const pessoa: Pessoa = new Pessoa('matheus', 18, new Date('2005-01-29'))
const pessoaJuridica: PessoaJuridica = new PessoaJuridica('gustavo', 20, new Date('2003-05-20'), '22-22-22')
const pessoaFisica: PessoaFisica = new PessoaFisica('diogo', 25, new Date('1998-02-20'), "123.456.789-00");

console.log("Pessoa:");
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Data de Nascimento:", pessoa.dataNascimento);

console.log("\nPessoa Física:");
console.log("Nome:", pessoaFisica.nome);
console.log("Idade:", pessoaFisica.idade);
console.log("Data de Nascimento:", pessoaFisica.dataNascimento);

console.log("\nPessoa Jurídica:");
console.log("Nome:", pessoaJuridica.nome);
console.log("Idade:", pessoaJuridica.idade);
console.log("Data de Nascimento:", pessoaJuridica.dataNascimento);




