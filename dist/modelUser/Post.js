"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Post {
    constructor(data) {
        this.id = (0, uuid_1.v4)(); // Gera um ID único para o post
        this.authorId = data.authorId; // Inicializa o ID do autor
        this.title = data.title; // Inicializa o título do post
        this.content = data.content; // Inicializa o conteúdo do post, se fornecido
    }
    getPost() {
        return {
            id: this.id,
            authorId: this.authorId,
            title: this.title,
            content: this.content
        };
    }
}
exports.default = Post;
