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

```marckdow
 [ dado | próximo ] → [ dado | próximo ] → [ dado | próximo ] → None
```

10 → 5 → 3 → 7 → 15 → 20 → null



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

```csharp
null ← 10 ⇄ 5 ⇄ 3 ⇄ 7 ⇄ 15 ⇄ 20 → null
```
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

```css
Topo → [20]
        [15]
        [7]
        [3]
        [5]
Base →  [10]
```

a. push(chellenge)

b. pop()

c. top()

- 2 Queue

```scss
[10] → [5] → [15] → [3] → [7] → [20]
     (início)                  (fim)
```

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

```js
{
  "root": 10,
  "leftOf10": 5,
  "rightOf10": 15,
  "leftOf5": 3,
  "rightOf5": 7,
  "rightOf15": 20
}
```

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

## O que é “Tree” (ou “árvore”).
Tree é uma estrutura de dados hierárquica, como uma árvore de verdade de cabeça pra baixo:

Começa com um nó raiz (root)

E se ramifica em outros nós (nodes ou “filhos”)

```markdow
        10         ← raiz (root)
       /  \
      5    15      ← filhos (children)
     / \     \
    3   7     20   ← netos (subníveis)
```
Cada nó pode ter:

Um valor,

Um pai (parent) — exceto a raiz,

E filhos (children).

### **Onde usamos "tree" na prática?**

Árvores binárias (cada nó tem até 2 filhos)

Muito usada em algoritmos, busca e ordenação.

-  DOM (Document Object Model) em HTML/JavaScript é uma árvore!

- A tag <html> é a raiz, e dentro temos <body>, <div>, etc.

- Sistemas de arquivos (pastas e arquivos) também são árvores.

- Banco de dados usa árvores para organizar índices.

- Compiladores e expressões matemáticas (ex: árvore de expressão).

### O que é Recursion (Recursão)?
Recursão é quando uma função chama a si mesma para resolver um problema em partes menores.

**🌀 Exemplo clássico: Fibonacci**

```javascript
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}
```
```python-rpl
           fib(5)
         /       \
     fib(4)     fib(3)
    /    \      /    \
 fib(3) fib(2) fib(2) fib(1)
...
```

## Quando usar recursão:
Árvores (percurso em profundidade)

Grafos (busca DFS)

Problemas de divisão e conquista (Merge Sort, Quick Sort)

Backtracking (como resolver sudoku, labirintos, etc.)

```
Suponha esta árvore binária:
        A
      /   \
     B     C
    / \   / \
   D   E F   G
```

### Breadth-First Search (BFS) — Busca em largura
Visita nível por nível da árvore, da esquerda pra direita.

Usa fila (queue).

Ordem de visita:
A → B → C → D → E → F → G

### PreOrder (DFS) — Raiz → Esquerda → Direita
Visita a raiz primeiro, depois o lado esquerdo, depois o direito.

Usa recursão ou pilha (stack).

Ordem de visita:
A → B → D → E → C → F → G

###  PostOrder (DFS) — Esquerda → Direita → Raiz
Visita as folhas primeiro, depois o nó pai.

Muito usado para deletar árvores, porque visita os filhos antes dos pais.

Ordem de visita:
D → E → B → F → G → C → A

## O que é um Grafo 

Um grafo é uma estrutura de dados usada para representar relações entre objetos. Ele é formado por:

 - Vértices (ou nós): Os elementos ou pontos do grafo.

 - Arestas: As conexões entre os vértices.

Um grafo é um conjunto de vértices conectados por arestas, usado para modelar conexões ou relações entre elementos.

### Tipos de garfos

| English                | Português                   | Description                                           |
| ---------------------- | --------------------------- | ----------------------------------------------------- |
| **Undirected Graph**   | Grafo não direcionado       | The edges have no direction (A-B is same as B-A).     |
| **Directed Graph**     | Grafo direcionado (Digrafo) | The edges have direction (A→B is different from B→A). |
| **Weighted Graph**     | Grafo ponderado             | Each edge has a weight or cost (like distance, time). |
| **Unweighted Graph**   | Grafo não ponderado         | Edges do not have weights.                            |
| **Cyclic Graph**       | Grafo cíclico               | Contains at least one cycle.                          |
| **Acyclic Graph**      | Grafo acíclico              | Contains no cycles.                                   |
| **Connected Graph**    | Grafo conexo                | There is a path between every pair of vertices.       |
| **Disconnected Graph** | Grafo desconexo             | Some vertices cannot be reached from others.          |

###  Aplicações de Grafos

Grafos são usados em várias áreas, como:

 - Redes sociais (Ex: quem segue quem)

 - Mapas e GPS (Rotas entre cidades ou locais)

 - Redes de computadores

 - Sistemas de recomendação

 - Algoritmos de busca (BFS, DFS, Dijkstra, etc.)

```less
ex:

A --- B
|     |
C --- D

Vértices: A, B, C, D

Arestas: A–B, A–C, B–D, C–D
```

##  Algoritmos de ordenação e de busca


O que são algoritmos de ordenação?
Algoritmos de ordenação são técnicas para reorganizar elementos em uma ordem específica — geralmente crescente ou decrescente.

São úteis para buscas rápidas, visualizações organizadas e otimizações em grandes volumes de dados.

### Bubble Sort (Ordenação por bolha)
Complexidade:

Pior caso: O(n²)

Melhor caso (array já ordenado): O(n)

###  Merge Sort (Ordenação por mesclagem)
Complexidade:

Sempre O(n log n)

### Quick Sort (Ordenação rápida)
Complexidade:

Pior caso: O(n²)

Médio caso: O(n log n)

###  Insertion sort