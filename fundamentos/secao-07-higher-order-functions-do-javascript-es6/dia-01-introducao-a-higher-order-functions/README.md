# Dia 01 (Introdução a Higher Order Functions)

Neste dia aprendi os conceitos e as aplicações das chamadas Higher Order Functions, ou HOFs, que são funções que recebem outra função como argumento ou que retornam uma função. Existem diversos tipos de HOFs, e podemos criar nossas próprias HOFs. Aprendi como utilizar algumas dessas funções nativas para a manipulação de arrays como o `forEach`, `find`, `some` e `every`.

No conteúdo da Aula, criamos 3 pequenos códigos que estão na pasta `conteudo_aula`.

Nos exércicios localizados nessa página coloquei em prática os conhecimentos adquiridos em aula e outros adquiridos por pesquisas na Web.

Os requisitos do exercício são:
## Parte I
### Novas pessoas encontradas
Os requisitos assim como a resolução estão no arquivo com o nome do exercício.

### Sorteador de loteria
Os requisitos assim como a resolução estão no arquivo com o nome do exercício.

### Corretor automático de exame
Crie uma HOF que receberá três parâmetros:
1. O primeiro será um array de respostas corretas (soluções);
2. O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
3. O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
  3.1. Uma resposta correta adiciona 1 ponto à pontuação final;
  3.2. A ausência de uma resposta não altera a pontuação (quando for “N.A”);
  3.3. Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante.

## Parte II
### Organizando uma biblioteca
Os requisitos assim como a resolução estão no arquivo com o nome do exercício.