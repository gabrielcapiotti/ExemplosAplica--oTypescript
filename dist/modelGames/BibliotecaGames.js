"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BibliotecaGames {
    constructor() {
        // Inicializa os arrays vazios
        this.games = [];
        this.usuarios = [];
    }
    // Método para registrar um novo usuário na biblioteca
    registrarUsuario(usuario) {
        // Adiciona o usuário ao array de usuários
        this.usuarios.push(usuario);
        // Exibe uma mensagem de registro
        console.log(`Usuário ${usuario.nome} registrado na Biblioteca de Jogos.`);
    }
    // Método para adicionar um novo jogo à biblioteca
    adicionarGame(game) {
        // Adiciona o jogo ao array de jogos
        this.games.push(game);
        // Exibe uma mensagem de adição
        console.log(`Game "${game.titulo}" adicionado à biblioteca.`);
    }
    // Método para remover um jogo da biblioteca
    removerGame(game) {
        // Encontra o índice do jogo no array e o remove
        this.games.splice(this.games.indexOf(game), 1);
        // Exibe uma mensagem de remoção
        console.log(`Game "${game.titulo}" removido da biblioteca`);
    }
    // Método para buscar um jogo pelo título
    buscarGame(titulo) {
        // Retorna o jogo com o título especificado, ou undefined se não encontrado
        return this.games.find((game) => game.titulo === titulo);
    }
    // Método para listar todos os jogos disponíveis na biblioteca
    listarGames() {
        // Filtra os jogos que estão disponíveis
        const gamesDisponiveis = this.games.filter((game) => game.disponivel);
        // Exibe uma mensagem e os detalhes de cada jogo disponível
        console.log("Games disponíveis:");
        gamesDisponiveis.forEach((game) => console.log(game.detalhes()));
    }
    // Método para emprestar um jogo a um usuário
    emprestarGames(titulo, nomeUsuario) {
        // Busca o jogo pelo título
        const game = this.buscarGame(titulo);
        // Busca o usuário pelo nome
        const usuario = this.usuarios.find((usuario) => usuario.nome === nomeUsuario);
        // Verifica se o jogo está disponível e o usuário existe
        if (game && game.disponivel && usuario) {
            // Empresta o jogo ao usuário
            usuario.emprestarGame(game);
        }
        else if (!game) {
            // Exibe mensagem se o jogo não foi encontrado
            console.log(`Game "${titulo}" não foi encontrado na sua biblioteca de jogos.`);
        }
        else if (!game.disponivel) {
            // Exibe mensagem se o jogo não está disponível
            console.log(`Game "${titulo}" não está disponível para empréstimo.`);
        }
        else if (!usuario) {
            // Exibe mensagem se o usuário não foi encontrado
            console.log(`Usuário "${nomeUsuario}" não encontrado na lista de amigos.`);
        }
    }
    // Método para devolver um jogo emprestado por um usuário
    devolverGames(titulo, nomeUsuario) {
        // Busca o usuário pelo nome
        const usuario = this.usuarios.find((usuario) => usuario.nome === nomeUsuario);
        // Verifica se o usuário foi encontrado
        if (usuario) {
            // Tenta devolver o jogo e armazena o jogo devolvido
            const game = usuario.devolverGame(titulo);
            // Se o jogo foi devolvido, adiciona-o à lista de jogos da biblioteca
            if (game) {
                this.games.push(game);
            }
            else {
                // Exibe mensagem se o usuário não foi encontrado
                console.log(`Usuário "${nomeUsuario}" não encontrado na lista de amigos.`);
            }
        }
    }
}
exports.default = BibliotecaGames;
