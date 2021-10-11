import { Extrato } from "../entities/Extrato";
import { DadosBancarios } from "../entities/DadosBancarios";
import { TipoDeConta } from "../enums/TipoDeConta";
import { ContaBancaria, ContaPessoaFisica, ContaPessoaJuridica } from "./ContaBancaria";
import { Pessoa } from "../entities/Pessoa";

export class Banco {
    // Parâmetros
    private ContasPessoaFisica: Array<ContaPessoaFisica>;
    private ContasPessoaJuridica: Array<ContaPessoaJuridica>;

    // Construtor 
    constructor () {
        this.ContasPessoaFisica = new Array<ContaPessoaFisica>();
        this.ContasPessoaJuridica = new Array<ContaPessoaJuridica>();
    }

    // Métodos
    public CriarContaBancaria(cpf_cnpj: string, tipoDeConta: TipoDeConta, senhaDaConta: string): DadosBancarios {
        // criar um objeto do tipo ContaBancaria
        const numeroAgencia = (Math.round(Math.random() * 10000)).toString();
        const numeroConta = (Math.round(Math.random() * 1000000)).toString();

        if (tipoDeConta === TipoDeConta.PessoaFisica) {
            const conta = new ContaPessoaFisica(cpf_cnpj, numeroAgencia, numeroConta, tipoDeConta, senhaDaConta, 0);
            this.ContasPessoaFisica.push(conta);
        }
        else {
            const conta = new ContaPessoaJuridica(cpf_cnpj, numeroAgencia, numeroConta, tipoDeConta, senhaDaConta, 0);
            this.ContasPessoaJuridica.push(conta);
        }
        // criar um objeto dos DadosBancarios
        return new DadosBancarios({
            NumeroDaAgencia: numeroAgencia,
            NumeroDaConta: numeroConta,
            Senha: senhaDaConta,
            TipoDeConta: tipoDeConta,
        });
    }
}