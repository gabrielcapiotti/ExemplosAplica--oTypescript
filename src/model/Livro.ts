export default class Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    disponivel: boolean;
  
    constructor(
      titulo: string, 
      autor: string, 
      anoPublicacao: number, 
      disponivel = true
    ) 
    {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
      this.disponivel = disponivel;
    }
  
    detalhes(): string {
      return `
      Título: ${this.titulo}, 
      Autor: ${this.autor}, 
      Ano: ${this.anoPublicacao}, 
      Disponível: ${this.disponivel}
      `;
    }
  }

