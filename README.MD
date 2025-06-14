# Data Structures & Algorithms In JavaScript

**Big O (ou "Notação Big O") é uma maneira de descrever o quão rápido ou lento um algoritmo é, dependendo do tamanho da entrada (quantidade de dados).**

<table>
  <thead>
    <tr>
      <th>Big O</th>
      <th>Significado</th>
      <th>Exemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>O(1)</td>
      <td>Tempo constante (super rápido)</td>
      <td>Acessar o primeiro item de um array</td>
    </tr>
    <tr>
      <td>O(n)</td>
      <td>Tempo linear</td>
      <td>Tempo cresce conforme o número de itens 📈</td>
    </tr>
    <tr>
      <td>O(n²)</td>
      <td>Tempo quadrático (bem mais lento)</td>
      <td>Dois loops aninhados</td>
    </tr>
    <tr>
      <td>O(log n)</td>
      <td>Logarítmico (muito eficiente)</td>
      <td>Busca binária</td>
    </tr>
  </tbody>
</table>

## What is Linked List

``Uma lista encadeada é uma estrutura de dados linear onde cada elemento (chamado de nó) aponta para o próximo, formando uma sequência. É muito usada quando precisamos inserir ou remover elementos com frequência e eficiência.``

Estrutura de um Nó:
Cada nó contém duas partes:

Dado – o valor armazenado.

Próximo – uma referência (ou ponteiro) para o próximo nó.

[ dado | próximo ] → [ dado | próximo ] → [ dado | próximo ] → None


- **1 Single LinkedList**

      a. Push (Challenge)

      b. Pop (Chellenge)

      c. Unshuft (Chellenge)

      d. Shift (Chellenge)

      e. GetFist (Chellenge)

      f. GetLast (Chellenge)

      g. Set (Chellenge)
      
      h. Insert (Chellenge)

      i. Size (Chellenge)

      j. Clear (Chellenge)

- **2  Doubly LinkedList**

[ dado | prev | next ] <-> [ dado | prev | next ] <-> [ dado | prev | next ] -> None

**``dado (data)
próximo (next) → aponta para o próximo nó
anterior (prev) → aponta para o nó anterior``**

      a. Push  (Chellenge)

      b. Pop (Chellenge)

      c. Unshift (Chellenge)

      d. Shift (Chellenge)

-  **3 Reverse LinkedList**

## Stack & Queues

- 1. Stack

a. push(chellenge)

b. pop()

c. top()

- 2 Queue

 a. enqueue (Chellenge) 
 b. dequeue()

- 3. Intervi Questions

a. Min Stack

b. Valid Parenthesis

c. Reverse String Using Stack

### O que é Stack? (Pilha)

Definição:
Stack (Pilha) é uma estrutura de dados onde o último elemento que entra é o primeiro que sai — isso é chamado de LIFO (Last In, First Out).

Exemplo prático:

Empilhar pratos: o último prato colocado é o primeiro que você pega.

Operações principais:

push(elemento): adiciona um elemento ao topo.

pop(): remove o elemento do topo.

peek() ou top(): vê qual é o elemento no topo, sem remover.

Uso no mundo real:
✅ Função "desfazer" em editores de texto.
✅ Pilha de chamadas (call stack) em linguagens de programação.

## Hash Tables

Data  Structure  use to  Stoore ``keu-value`` pairs.

Javascript -> Objects;
Python -> Dictionarries;
Go -> Maps;

###  Uma Hash Table:

Armazena pares chave → valor

Usa uma função chamada hash para transformar uma chave em um índice

Permite buscas muito rápidas (complexidade O(1), idealmente)

```javascript
const hashTable = {
  nome: "Gleidson",
  idade: 25,
  cidade: "Belém"
};

console.log(hashTable["nome"]); // "Gleidson"
```
### O que é uma Hash Function?
Uma função hash:

É uma função que recebe uma chave (por exemplo, uma string como "nome")

E retorna um índice numérico fixo, que indica onde armazenar esse valor no array interno da Hash Table.

Ela é o coração da estrutura, pois define onde os dados serão guardados na memória.