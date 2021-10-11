import { FaseDeCrescimento } from "../enums/FaseDeCrescimento";
export declare class Pessoa {
    private Nome;
    private Idade;
    private Carteira;
    private constructor();
    static Nascimento(nome: string, idade: number): Pessoa;
    ObterNome(): string;
    DefinirNome(nome: string): void;
    ObterIdade(): number;
    DefinirIdade(idade: number): void;
    DefinirSaldoCarteira(dinheiro: number): void;
    ObterSaldoCarteira(): number;
    ObterFaseDeCrescimento(): FaseDeCrescimento;
    Envelhecer(anosDeVida: number): void;
    Emprestimo(): void;
}
