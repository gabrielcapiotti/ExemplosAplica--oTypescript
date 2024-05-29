/*
Exercício: Sistema de Gerenciamento de Loja de Eletrodomésticos
Você deve desenvolver um sistema básico de gerenciamento para uma loja de eletrodomésticos. Este sistema deve ser capaz de gerenciar produtos, clientes e vendas.

Requisitos:
1 - Classe Produto (Produto)

Atributos:
nome (string)
preco (number)
quantidade (number) - Quantidade disponível em estoque.

Métodos:
vender(quantidade: number): Vende uma determinada quantidade do produto, se disponível no estoque. Retorna true se a venda for bem-sucedida, false caso contrário.
repor(quantidade: number): Adiciona uma quantidade ao estoque do produto.

2 - Classe Cliente (Cliente)

Atributos:
nome (string)
idCliente (string)
produtosComprados (array de Produto) - Lista de produtos adquiridos pelo cliente.

Métodos:
comprar(produto: Produto, quantidade: number): Permite ao cliente comprar uma certa quantidade de um produto.

3 - Classe Loja (Loja)

Atributos:
produtos (array de Produto) - Lista de produtos disponíveis na loja.
clientes (array de Cliente) - Lista de clientes da loja.

Métodos:
adicionarProduto(produto: Produto): Adiciona um produto ao inventário da loja.
registrarCliente(cliente: Cliente): Registra um novo cliente na loja.
fazerVenda(idCliente: string, nomeProduto: string, quantidade: number): Realiza uma venda para um cliente específico.
*/

import Cliente from "./modelProduto/Cliente";
import Loja from "./modelProduto/Loja";
import Produto from "./modelProduto/Produto";

const loja=new Loja();

const computador=new Produto("Computador", 15000, 120);
const sofa=new Produto("Sofá", 3200, 10);
const xiaomi=new Produto("Xiaomi", 1200, 30);
const banheira=new Produto("Banheira", 5800, 5);

loja.adicionarProduto(computador);
loja.adicionarProduto(sofa);
loja.adicionarProduto(xiaomi);
loja.adicionarProduto(banheira);

const pandora = new Cliente("Pandora","251207");
const afrodite = new Cliente("Afrodite","659012");
const artemis = new Cliente("Artemis","870342");
const gaia = new Cliente("Gaia","981265");


loja.registrarCliente(pandora);
loja.registrarCliente(afrodite);
loja.registrarCliente(artemis);
loja.registrarCliente(gaia);

loja.vender("251207", "Banheira", 1); 
loja.vender("870342", "Computador", 2);         
loja.vender("659012", "Xiaomi", 5); 
loja.vender("981265", "Sofá", 1);

// Cenário onde o cliente tenta comprar mais do que a quantidade disponível
loja.vender("659012", "Banheira", 10); // tenta comprar 10 Banheiras (falha)

// Cenário onde o cliente tenta comprar um produto não existente
loja.vender("870342", "Livros", 1); // tenta comprar 1 livro (produto não encontrado)

// Cenário onde um cliente não registrado tenta comprar um produto
loja.vender("00000", "Sofá", 1); // Cliente não registrado tenta comprar 1 TV (cliente não encontrado)

// Passo 5: Verificar estados dos objetos após operações
console.log("Estado final dos produtos:");
console.log(loja.produtos);

console.log("Estado final dos clientes:");
console.log(loja.clientes);

// Verificar os produtos comprados por cada cliente
console.log("Produtos comprados por João:");
console.log(pandora.produtosComprados);

console.log("Produtos comprados por Maria:");
console.log(afrodite.produtosComprados);

console.log("Produtos comprados por Ana:");
console.log(gaia.produtosComprados);