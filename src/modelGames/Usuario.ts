import Games from "./Games"; // Importa a classe Games do módulo Games.ts

export default class Usuario {
  // Declaração das propriedades da classe
  nome: string; // Nome do usuário
  id: number; // Identificação do usuário
  gamesEmprestados: Games[]; // Lista de games emprestados pelo usuário

  // Construtor da classe, inicializa as propriedades nome, id e a lista de gamesEmprestados como vazia
  constructor(nome: string, id: number) {
    this.nome = nome;
    this.id = id;
    this.gamesEmprestados = [];
  }

  // Método para emprestar um game
  emprestarGame(game: Games): void {
    game.disponivel = false; // Define a disponibilidade do game como falsa, indicando que está emprestado
    this.gamesEmprestados.push(game); // Adiciona o game à lista de games emprestados pelo usuário
    console.log(`Game "${game.titulo}" emprestado para ${this.nome}`); // Imprime uma mensagem indicando que o game foi emprestado
  }

  // Método para devolver um game
  devolverGame(titulo: string): Games | undefined {
    // Procura o índice do game na lista de games emprestados pelo título
    const index = this.gamesEmprestados.findIndex((game) => game.titulo === titulo);
    
    // Verifica se o game foi encontrado na lista de games emprestados
    if (index !== -1) {
      // Remove o game da lista de games emprestados e guarda na variável game
      const game = this.gamesEmprestados.splice(index, 1)[0];
      game.disponivel = true; // Define a disponibilidade do game como verdadeira, indicando que está disponível novamente
      console.log(`Game "${game.titulo}" foi devolvido por ${this.nome}.`); // Imprime uma mensagem indicando que o game foi devolvido
      return game; // Retorna o game que foi devolvido
    } else {
      // Imprime uma mensagem indicando que o game não foi encontrado na lista de games emprestados
      console.log(`Game "${titulo}" não encontrado entre os jogos emprestados por ${this.nome}`);
      return undefined; // Retorna undefined indicando que o game não foi encontrado
    }
  }
}


/*
### Explicação Detalhada:

1. **Importação da Classe `Games`**:
   - `import Games from "./Games";`: Importa a classe `Games` do arquivo `Games.ts` para que possa ser usada dentro da classe `Usuario`.

2. **Declaração da Classe `Usuario`**:
   - `export default class Usuario { ... }`: Define a classe `Usuario` e a exporta como padrão para que possa ser importada em outros módulos.

3. **Propriedades da Classe `Usuario`**:
   - `nome: string;`: Propriedade para armazenar o nome do usuário.
   - `id: number;`: Propriedade para armazenar a identificação do usuário.
   - `gamesEmprestados: Games[];`: Propriedade para armazenar a lista de games emprestados pelo usuário.

4. **Construtor da Classe**:
   - `constructor(nome: string, id: number) { ... }`: Define o construtor da classe, que inicializa `nome`, `id` e `gamesEmprestados` (como uma lista vazia).

5. **Método `emprestarGame`**:
   - `emprestarGame(game: Games): void { ... }`: Método para emprestar um game ao usuário.
   - `game.disponivel = false;`: Define a propriedade `disponivel` do game como `false`, indicando que o game foi emprestado.
   - `this.gamesEmprestados.push(game);`: Adiciona o game à lista de games emprestados pelo usuário.
   - `console.log(...);`: Imprime uma mensagem indicando que o game foi emprestado.

6. **Método `devolverGame`**:
   - `devolverGame(titulo: string): Games | undefined { ... }`: Método para devolver um game emprestado pelo usuário.
   - `const index = this.gamesEmprestados.findIndex(...);`: Procura o índice do game na lista de games emprestados pelo título.
   - `if (index !== -1) { ... } else { ... }`: Verifica se o game foi encontrado na lista de games emprestados.
   - `const game = this.gamesEmprestados.splice(index, 1)[0];`: Remove o game da lista de games emprestados e guarda na variável `game`.
   - `game.disponivel = true;`: Define a propriedade `disponivel` do game como `true`, indicando que o game foi devolvido e está disponível.
   - `console.log(...);`: Imprime uma mensagem indicando que o game foi devolvido.
   - `return game;`: Retorna o game que foi devolvido.
   - `console.log(...);`: Imprime uma mensagem indicando que o game não foi encontrado na lista de games emprestados (se aplicável).
   - `return undefined;`: Retorna `undefined` indicando que o game não foi encontrado (se aplicável).

Essa estrutura garante que cada ação (emprestar e devolver games) seja corretamente registrada e atualizada na lista de games emprestados pelo usuário.
*/

