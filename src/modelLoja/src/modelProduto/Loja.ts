/*
3 - Classe Loja (Loja)

Atributos:
produtos (array de Produto) - Lista de produtos disponíveis na loja.
clientes (array de Cliente) - Lista de clientes da loja.

Métodos:
adicionarProduto(produto: Produto): Adiciona um produto ao inventário da loja.
registrarCliente(cliente: Cliente): Registra um novo cliente na loja.
fazerVenda(idCliente: string, nomeProduto: string, quantidade: number): Realiza uma venda para um cliente específico.
*/


import Produto from './Produto';
import Cliente from './Cliente';

export default class Loja {
    produtos: Produto[];
    clientes: Cliente[];

    constructor() {
        this.produtos = [];
        this.clientes = [];
    }
    adicionarProduto(produto: Produto){
        this.produtos.push(produto);
    }
    registrarCliente(cliente: Cliente){
        this.clientes.push(cliente);
    }
    vender(idCliente:string, nomeProduto: string, quantidade:number){
        const cliente = this.clientes.find(c=> c.idCliente===idCliente);
        const produto = this.produtos.find(p=>p.nome===nomeProduto);
        if (cliente&&produto) {
            cliente.comprar(produto, quantidade);
            console.log("Venda concluída!");
        } else {
            console.log("Cliente ou produto não encontrado.");
        }
    }
}





 