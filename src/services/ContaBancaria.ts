export class ContaBancaria {
    public NumeroAgencia: string;
    public NumeroConta: string;
    public TipoDeConta: string;
    public SenhaDaConta: string;
    public SaldoDaConta: number; 
    
    constructor(numeroAgencia: string, numeroConta: string, tipoDeConta: string, senhaDaConta: string, saldoDaConta: number){
        this.NumeroAgencia = numeroAgencia; 
        this.NumeroConta = numeroConta; 
        this.TipoDeConta = tipoDeConta;
        this.SenhaDaConta = senhaDaConta; 
        this.SaldoDaConta = saldoDaConta; 
    }
}

export class ContaPessoaFisica extends ContaBancaria {
    public Cpf: string; 

    constructor(cpf: string, numeroAgencia: string, numeroConta: string, tipoDeConta: string, senhaDaConta: string, saldoDaConta: number){
        super(numeroAgencia, numeroConta, tipoDeConta, senhaDaConta, saldoDaConta);
        this.Cpf = cpf;
    }
}

export class ContaPessoaJuridica extends ContaBancaria { 
    public Cnpf: string;

    constructor (cnpj: string, numeroAgencia: string, numeroConta: string, tipoDeConta: string, senhaDaConta: string, saldoDaConta: number){
        super(numeroAgencia, numeroConta, tipoDeConta, senhaDaConta, saldoDaConta); 
        this.Cnpf = cnpj;
    }
}