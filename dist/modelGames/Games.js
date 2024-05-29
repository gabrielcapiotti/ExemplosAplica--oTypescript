"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Games {
    constructor(titulo, diretor, anoPublicacao, disponivel = true) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = disponivel;
    }
    detalhes() {
        return `
        titulo:${this.titulo},
        diretor:${this.diretor},
        anoPublicacao:${this.anoPublicacao},
        disponivel:${this.disponivel},
        `;
    }
}
exports.default = Games;
