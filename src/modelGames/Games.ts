export default class Games {
    titulo:string;
    diretor:string;
    anoPublicacao:number;
    disponivel: boolean;
    constructor(
        titulo:string,
        diretor:string,
        anoPublicacao:number,
        disponivel=true,
    ) 
    {
        this.titulo=titulo;
        this.diretor=diretor;
        this.anoPublicacao=anoPublicacao;
        this.disponivel=disponivel;
    }
    detalhes():string {
        return `
        titulo:${this.titulo},
        diretor:${this.diretor},
        anoPublicacao:${this.anoPublicacao},
        disponivel:${this.disponivel},
        `;
    }
}


