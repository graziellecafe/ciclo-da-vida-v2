// import { DadosBancarios } from "../entities/DadosBancarios";
// import { ContaBancaria, ContaPessoaFisica } from "./ContaBancaria";

// export class Banco extends ContaPessoaFisica{
//     // parametros
//     private NumeroConta: string;
//     private NumeroAgencia: string;

//     // construtor 
//     constructor(cpf: string, agencia: string, numeroConta: string, tipoDeConta: string, senha: string, saldoDaConta: number, numeroAgencia: string){
//         super(cpf, agencia, numeroConta, tipoDeConta, senha, saldoDaConta)
//         this.NumeroConta = numeroConta;
//         this.NumeroAgencia = numeroAgencia;
//     }

//     // métodos
//     public static CriarContaBancaria(cpf: string, tipoDeConta: string, nomeDaPessoa: string, senha: string): DadosBancarios{
//         return 
//     }

//     public SacarDinheiro(): void {

//     }

//     public DepositarDinheiro(): void {

//     }

//     public ExtratoBancario(): void {
        
//     }
// }

// // export class DadosBancarios {
// //     public NumeroDaAgencia: string;
// //     public NumeroDaConta: string;
// //     public Senha: string;
// //     public TipoDeConta: TipoDeConta;

// //     constructor(init?: Partial<DadosBancarios>) {
// //         Object.assign(this, init);
// //     }
// // }


// Ele deve receber como parâmetro o tipo da conta a ser criada, CPF da pessoa, nome da pessoa, senha da conta. O número da conta e o número da agência deve ser gerado dentro deste método de criar conta. O retorno deste método deve ser um objeto do tipo DadosBancários: 