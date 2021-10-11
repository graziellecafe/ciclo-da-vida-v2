"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MundoCapitalista = void 0;
class Trabalhador {
    constructor(nome, valor, dia, mes, ano) {
        this.Nome = nome;
        this.Valor = valor;
        this.Dia = dia;
        this.Mes = mes;
        this.Ano = ano;
    }
}
class MundoCapitalista {
    constructor() {
        this.ListaDeTrabalhadores = new Array();
    }
    Trabalhar(nomeTrabalhador, dia, mes, ano) {
        const minSalario = 1;
        const maxSalario = 100;
        const ganhoDoDia = Math.ceil(Math.random() * (maxSalario - minSalario) + minSalario);
        const trabalhador = new Trabalhador(nomeTrabalhador, ganhoDoDia, dia, mes, ano);
        this.ListaDeTrabalhadores.push(trabalhador);
        return ganhoDoDia;
    }
    CalculaValorDaCompra() {
        const maxGastos = 50;
        const minGastos = 100;
        return Math.ceil(Math.random() * (maxGastos - minGastos) + minGastos);
    }
}
exports.MundoCapitalista = MundoCapitalista;
//# sourceMappingURL=MundoCapitalista.js.map