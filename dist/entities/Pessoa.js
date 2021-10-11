"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
const FaseDeCrescimento_1 = require("../enums/FaseDeCrescimento");
class Pessoa {
    constructor(nome, idade) {
        this.Nome = nome;
        this.Idade = idade;
        this.Carteira = 0;
    }
    static Nascimento(nome, idade) {
        return new Pessoa(nome, idade);
    }
    ObterNome() {
        return this.Nome;
    }
    DefinirNome(nome) {
        this.Nome = nome;
    }
    ObterIdade() {
        return this.Idade;
    }
    DefinirIdade(idade) {
        this.Idade = idade;
    }
    DefinirSaldoCarteira(dinheiro) {
        this.Carteira = this.Carteira + dinheiro;
    }
    ObterSaldoCarteira() {
        return this.Carteira;
    }
    ObterFaseDeCrescimento() {
        if (this.Idade >= 0 && this.Idade < 1) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Bebe;
        }
        if (this.Idade >= 1 && this.Idade < 10) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Crianca;
        }
        if (this.Idade >= 10 && this.Idade < 18) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Adolescente;
        }
        if (this.Idade >= 18 && this.Idade < 50) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Adulto;
        }
        if (this.Idade >= 50 && this.Idade < 100) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Idoso;
        }
        return FaseDeCrescimento_1.FaseDeCrescimento.Default;
    }
    Envelhecer(anosDeVida) {
        this.Idade = this.Idade + anosDeVida;
    }
    Emprestimo() {
        const valorEmprestimo = 200;
        this.Carteira = this.Carteira + valorEmprestimo;
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map