/*
2 - Classe Cliente (Cliente)

Atributos:
nome (string)
idCliente (string)
produtosComprados (array de Produto) - Lista de produtos adquiridos pelo cliente.

Métodos:
comprar(produto: Produto, quantidade: number): Permite ao cliente comprar uma certa quantidade de um produto.
*/

import Produto from "./Produto";

export default class Cliente {
    nome:string;
    idCliente:string;
    produtosComprados: Produto[];
    constructor(
        nome:string,
        idCliente:string,
    ) 
    {
        this.nome=nome;
        this.idCliente=idCliente;
        this.produtosComprados=[];
    }
    comprar(produto:Produto, quantidade:number){
        if (produto.vender(quantidade)) {
            this.produtosComprados.push(produto);
        } else {
            console.log("Produto não disponível em quantidade desejada.");
            
        }
    }
}




