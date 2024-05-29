/*
Exercício: Sistema de Gerenciamento de Loja de Eletrodomésticos
Você deve desenvolver um sistema básico de gerenciamento para uma loja de eletrodomésticos. Este sistema deve ser capaz de gerenciar produtos, clientes e vendas.
*/
/*
Requisitos:
1 - Classe Produto (Produto)

Atributos:
nome (string)
preco (number)
quantidade (number) - Quantidade disponível em estoque.

Métodos:
vender(quantidade: number): Vende uma determinada quantidade do produto, se disponível no estoque. Retorna true se a venda for bem-sucedida, false caso contrário.
repor(quantidade: number): Adiciona uma quantidade ao estoque do produto.
*/

export default class Produto {
    nome:string;
    preco:number;
    quantidade:number;
    constructor(
        nome:string,
        preco:number,
        quantidade:number,
    ) 
    {
        this.nome=nome;
        this.preco=preco;
        this.quantidade=quantidade;
    }
    vender(quantidade:number){
        if (this.quantidade>=quantidade) {
            this.quantidade-=quantidade;
            return true;
        } else {
            return false
        }
    }
    repor(quantidade:number){
        this.quantidade+=quantidade;
    }
}
