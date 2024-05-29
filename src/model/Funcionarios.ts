import Usuario from "./Usuario";
import Livro from "./Livro";
import Biblioteca from "./Biblioteca";

class Funcionario extends Usuario {
  cargo: string;

  constructor(cargo: string, nome: string, id: number) {
    super(nome);
    this.cargo = cargo;
  }

  // Método para adicionar um livro à biblioteca
  adicionarLivro(livro: Livro, biblioteca: Biblioteca): void {
    biblioteca.adicionarLivro(livro);
    console.log(`Funcionário ${this.nome} adicionou o livro "${livro.titulo}" à biblioteca.`);
  }

  // Método para remover um livro da biblioteca
  removerLivro(titulo: string, biblioteca: Biblioteca): void {
    const livro = biblioteca.buscarLivroTitulo(titulo);
    if (livro) {
      biblioteca.livros = biblioteca.livros.filter((l) => l !== livro);
      console.log(`Funcionário ${this.nome} removeu o livro "${titulo}" da biblioteca.`);
    } else {
      console.log(`Livro "${titulo}" não encontrado na biblioteca.`);
    }
  }
}

export default Funcionario;
