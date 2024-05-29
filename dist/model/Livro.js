"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    constructor(titulo, autor, anoPublicacao, disponivel = true) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = disponivel;
    }
    detalhes() {
        return `
      Título: ${this.titulo}, 
      Autor: ${this.autor}, 
      Ano: ${this.anoPublicacao}, 
      Disponível: ${this.disponivel}
      `;
    }
}
exports.default = Livro;
