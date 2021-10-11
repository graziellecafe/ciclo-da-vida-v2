"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcaoSocial = void 0;
class Doacao {
    constructor(nome, valor) {
        this.NomeDoador = nome;
        this.Valor = valor;
    }
}
class AcaoSocial {
    constructor() {
        this.ListaDeDoacoes = new Array();
    }
    ReceberDoacao(nomeDoador, valorDoado) {
        const doacaoRecebida = new Doacao(nomeDoador, valorDoado);
        this.ListaDeDoacoes.push(doacaoRecebida);
    }
}
exports.AcaoSocial = AcaoSocial;
//# sourceMappingURL=AcaoSocial.js.map