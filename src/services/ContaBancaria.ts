export class ContaBancaria {
    public TipoDeConta: string;
    public NumeroDaAgencia: string;
    public NumeroDaConta: string;
    public SenhaDaConta: string; 
    public SaldoDaConta: string;

    constructor(tipoDeConta: string, numeroDaAgencia: string, numeroDaConta: string, senhaDaConta: string, saldoDaConta: string){
        this.TipoDeConta = tipoDeConta; 
        this.NumeroDaAgencia = numeroDaAgencia;
        this.NumeroDaConta = numeroDaConta;
        this.SenhaDaConta = senhaDaConta; 
        this.SaldoDaConta = saldoDaConta; 
    }
}

export class ContaPessoaFisica extends ContaBancaria {
    public Cpf: string;

    constructor(cpf: string, tipoDeConta: string, numeroDaAgencia: string, numeroDaConta: string, senhaDaConta: string, saldoDaConta: string){
        super(tipoDeConta, numeroDaAgencia, numeroDaConta, senhaDaConta, saldoDaConta);
        this.Cpf = cpf;
    }
}

export class ContaPessoaJuridica extends ContaBancaria {
    public Cnpj: string; 

    constructor(cnpj: string, tipoDeConta: string, numeroDaAgencia: string, numeroDaConta: string, senhaDaConta: string, saldoDaConta: string){
        super(tipoDeConta, numeroDaAgencia, numeroDaConta, senhaDaConta, saldoDaConta);
        this.Cnpj = cnpj;
    }
}