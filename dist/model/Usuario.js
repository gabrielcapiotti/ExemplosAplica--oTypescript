"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(nome) {
        this.nome = nome;
        this.livrosEmprestados = [];
    }
    emprestarLivro(livro) {
        livro.disponivel = false;
        this.livrosEmprestados.push(livro);
        console.log(`Livro "${livro.titulo}" emprestado para ${this.nome}.`);
    }
    devolverLivro(titulo) {
        const index = this.livrosEmprestados.findIndex((livro) => livro.titulo === titulo);
        if (index !== -1) {
            const livro = this.livrosEmprestados.splice(index, 1)[0];
            livro.disponivel = true;
            console.log(`Livro "${livro.titulo}" devolvido por ${this.nome}.`);
            return livro;
        }
        else {
            console.log(`Livro "${titulo}" não encontrado entre os livros emprestados por ${this.nome}.`);
        }
    }
}
exports.default = Usuario;
