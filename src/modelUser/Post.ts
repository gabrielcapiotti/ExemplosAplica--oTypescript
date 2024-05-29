import { PostType } from "../types/PostType";
import { v4 as uuid } from "uuid";

export default class Post {
    private id: string;       // ID único para o post
    protected authorId: string; // ID do autor do post
    public title: string;     // Título do post
    public content?: string;  // Conteúdo do post, opcional

    constructor(data: PostType) { // Construtor recebe um objeto do tipo PostType
        this.id = uuid();          // Gera um ID único para o post
        this.authorId = data.authorId; // Inicializa o ID do autor
        this.title = data.title;       // Inicializa o título do post
        this.content = data.content;   // Inicializa o conteúdo do post, se fornecido
    
    }

    public getPost(){
        return {
            id: this.id,
            authorId: this.authorId,
            title: this.title,
            content: this.content
        }
    }
}