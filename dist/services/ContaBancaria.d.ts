declare class ContaBancaria {
    Agencia: string;
    NumeroConta: string;
    NomeBanco: string;
    constructor(agencia: string, numeroConta: string, nomeBanco: string);
}
declare class ContaPessoaFisica extends ContaBancaria {
    Cpf: string;
    constructor(cpf: string, agencia: string, numeroConta: string, nomeBanco: string);
}
declare class ContaJuridica extends ContaBancaria {
    Cnpf: string;
    constructor(cnpj: string, agencia: string, numeroConta: string, nomeBanco: string);
}
declare class Program {
    Main(): void;
}
