"use strict";
class ContaBancaria {
    constructor(agencia, numeroConta, nomeBanco) {
        this.Agencia = agencia;
        this.NumeroConta = numeroConta;
        this.NomeBanco = nomeBanco;
    }
}
class ContaPessoaFisica extends ContaBancaria {
    constructor(cpf, agencia, numeroConta, nomeBanco) {
        super(agencia, numeroConta, nomeBanco);
        this.Cpf = cpf;
    }
}
class ContaJuridica extends ContaBancaria {
    constructor(cnpj, agencia, numeroConta, nomeBanco) {
        super(agencia, numeroConta, nomeBanco);
        this.Cnpf = cnpj;
    }
}
class Program {
    Main() {
        var contaPessoaFisica = new ContaPessoaFisica('154.846.487-87', '1308', '00089674-52', 'Caixa Econômica Federal');
        console.log({ contaPessoaFisica });
    }
}
new Program().Main();
//# sourceMappingURL=ContaBancaria.js.map