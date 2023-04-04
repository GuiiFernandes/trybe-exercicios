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

## Bônus - Game Actions Simulator
### Parte I
Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status e, ao final, retornam os resultados da rodada.
Para os próximos exercícios, copie o código abaixo.
  > const mage = {
  >   healthPoints: 130,
  >   intelligence: 45,
  >   mana: 125,
  >   damage: undefined,
  > };
  > 
  > const warrior = {
  >   healthPoints: 200,
  >   strength: 30,
  >   weaponDmg: 2,
  >   damage: undefined,
  > };
  > 
  > const dragon = {
  >   healthPoints: 350,
  >   strength: 50,
  >   damage: undefined,
  > };
  > 
  > const battleMembers = { mage, warrior, dragon };
1. Crie uma função que retorne o dano do dragão.
2. O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
3. Crie uma função que retorne o dano causado pelo warrior.
4. O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
5. Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
6. O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
7. A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.
### Parte II
Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo, e cada ação é por definição uma HOF, pois, nesse caso, são funções que recebem como parâmetro outra função.
Copie o código abaixo e inicie sua implementação:
  > const gameActions = {
  >   // Crie as HOFs neste objeto.
  > };
1. Crie a primeira HOF que compõe o objeto gameActions.
  1.1. Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior.
2. Crie a segunda HOF que compõe o objeto gameActions.
  2.1. Ela será a função que simula o turno do personagem mage. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor das chaves damagee mana do mage.
3. Crie a terceira HOF que compõe o objeto gameActions.
  3.1. Ela será a função que simula o turno do monstro dragon. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disso, ela também deve atualizar o valor da chave damage do monstro.
4. Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.