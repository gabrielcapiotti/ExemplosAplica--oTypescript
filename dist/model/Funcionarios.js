"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("./Usuario"));
class Funcionario extends Usuario_1.default {
    constructor(cargo, nome, id) {
        super(nome);
        this.cargo = cargo;
    }
    // Método para adicionar um livro à biblioteca
    adicionarLivro(livro, biblioteca) {
        biblioteca.adicionarLivro(livro);
        console.log(`Funcionário ${this.nome} adicionou o livro "${livro.titulo}" à biblioteca.`);
    }
    // Método para remover um livro da biblioteca
    removerLivro(titulo, biblioteca) {
        const livro = biblioteca.buscarLivroTitulo(titulo);
        if (livro) {
            biblioteca.livros = biblioteca.livros.filter((l) => l !== livro);
            console.log(`Funcionário ${this.nome} removeu o livro "${titulo}" da biblioteca.`);
        }
        else {
            console.log(`Livro "${titulo}" não encontrado na biblioteca.`);
        }
    }
}
exports.default = Funcionario;
