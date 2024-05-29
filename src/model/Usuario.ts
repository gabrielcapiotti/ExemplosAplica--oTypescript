import Livro from "./Livro";

export default class Usuario {
  nome: string;
  livrosEmprestados: Livro[];

  constructor(nome: string) {
    this.nome = nome;
    this.livrosEmprestados = [];
  }

  emprestarLivro(livro: Livro) {
    livro.disponivel = false;
    this.livrosEmprestados.push(livro);
    console.log(`Livro "${livro.titulo}" emprestado para ${this.nome}.`);
  }

  devolverLivro(titulo: string) {
    const index = this.livrosEmprestados.findIndex((livro) => livro.titulo === titulo);
    if (index !== -1) {
      const livro = this.livrosEmprestados.splice(index, 1)[0];
      livro.disponivel = true;
      console.log(`Livro "${livro.titulo}" devolvido por ${this.nome}.`);
      return livro;
    } else {
      console.log(`Livro "${titulo}" não encontrado entre os livros emprestados por ${this.nome}.`);
    }
  }
}
