import Livro from "./Livro";
import Usuario from "./Usuario";

export default class Biblioteca {
  // Arrays para armazenar os livros e usuários da biblioteca
  public livros: Livro[];
  public usuarios: Usuario[];

  constructor() {
    this.livros = [];
    this.usuarios = [];
  }

  // Método para registrar um novo usuário na biblioteca
  registrarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
    console.log(`Usuário ${usuario.nome} registrado na biblioteca`);
  }

  // Método para adicionar um novo livro à biblioteca
  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
  }

  // Método para listar todos os livros disponíveis na biblioteca
  listarLivrosDisponiveis(): void {
    // Filtra os livros que estão disponíveis
    const livrosDisponiveis = this.livros.filter((livro) => livro.disponivel);
    console.log("Livros disponíveis:");
    // Exibe os detalhes de cada livro disponível
    livrosDisponiveis.forEach((livro) => console.log(livro.detalhes()));
  }

  // Método para buscar um livro pelo título
  buscarLivroTitulo(titulo: string): Livro | undefined {
    // Retorna o livro que tem o título especificado, ou undefined se não encontrado
    return this.livros.find((livro) => livro.titulo === titulo);
  }

  // Método para emprestar um livro a um usuário
  emprestarLivro(titulo: string, nomeUsuario: string): void {
    // Buscar livro por título
    const livro = this.buscarLivroTitulo(titulo);
    // Buscar usuário por nome
    const usuario = this.usuarios.find((usuario) => usuario.nome === nomeUsuario);

    // Verificar se livro está disponível e usuário existe
    if (livro && livro.disponivel && usuario) {
      // Emprestar livro ao usuário
      usuario.emprestarLivro(livro);
    } else if (!livro) {
      // Exibe mensagem se livro não foi encontrado
      console.log(`Livro "${titulo}" não encontrado na biblioteca.`);
    } else if (!livro.disponivel) {
      // Exibe mensagem se livro não está disponível
      console.log(`Livro "${titulo}" não está disponível.`);
    } else if (!usuario) {
      // Exibe mensagem se usuário não for encontrado
      console.log(`Usuário "${nomeUsuario}" não encontrado na biblioteca.`);
    }
  }

  // Método para devolver um livro emprestado por um usuário
  devolverLivro(titulo: string, nomeUsuario: string): void {
    // Buscar usuário por nome
    const usuario = this.usuarios.find((usuario) => usuario.nome === nomeUsuario);

    // Verifica se o usuário foi encontrado
    if (usuario) {
      // Tenta devolver o livro e armazena o livro devolvido
      const livro = usuario.devolverLivro(titulo);
      if (livro) {
        // Adiciona o livro devolvido à lista de livros da biblioteca
        this.livros.push(livro);
      }
    } else {
      // Exibe mensagem se o usuário não foi encontrado
      console.log(`Usuário "${nomeUsuario}" não encontrado na biblioteca.`);
    }
  }
}


/*

### Explicação dos Comentários

1. **Importação de módulos**: Importa as classes `Livro` e `Usuario` para que 
possam ser usadas dentro da classe `Biblioteca`.

2. **Declaração de propriedades**:
   - `livros` e `usuarios`: São arrays que armazenam objetos de livros e usuários, respectivamente.

3. **Construtor**: Inicializa as propriedades `livros` e `usuarios` como arrays vazios.

4. **Método `registrarUsuario`**:
   - Adiciona um usuário ao array `usuarios`.
   - Exibe uma mensagem no console confirmando o registro do usuário.

5. **Método `adicionarLivro`**:
   - Adiciona um livro ao array `livros`.
   - Exibe uma mensagem no console confirmando a adição do livro.

6. **Método `listarLivrosDisponiveis`**:
   - Filtra os livros que estão disponíveis (não emprestados).
   - Exibe os detalhes de cada livro disponível no console.

7. **Método `buscarLivroPorTitulo`**:
   - Procura um livro pelo título no array `livros` e o retorna, ou retorna `undefined` se não encontrado.

8. **Método `emprestarLivro`**:
   - Procura o livro pelo título e o usuário pelo nome.
   - Verifica se o livro está disponível e se o usuário existe.
   - Se ambos os critérios forem atendidos, empresta o livro ao usuário.
   - Caso contrário, exibe mensagens apropriadas no console.

9. **Método `devolverLivro`**:
   - Procura o usuário pelo nome.
   - Se o usuário for encontrado, tenta devolver o livro.
   - Se o livro for devolvido com sucesso, adiciona-o de volta ao array `livros` da biblioteca.
   - Caso contrário, exibe uma mensagem no console.
   */

  
