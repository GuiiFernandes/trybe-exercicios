# Dia 05 (ES6 - Let, const, arrow function e template literals)

Neste dia aprendi sobre quando usar let e const, abreviação de função com arrow e sobre escrever strings contendo variáveis através da template literals na linguagem `JavaScript`. Todos esses rescursos vieram do ES6 (Ecma Script 6), que nada mais é que a mais atual padronização da linguagem `JavaScript` lançada em 2015.

Nos exércicios localizados nessa página coloquei em prática os conhecimentos adquiridos em aula e outros adquiridos por pesquisas na Web.

Os requisitos do exercício estão em seus respectivos arquivos, sendo:

### Parte I
script.js

### Parte II
functions.js

### Bônus
Crie duas funções JavaScript com as seguintes especificações:
Não se esqueça de usar template literals
1. Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
  1.1. O nome da função deverá ser substituaX.
  1.2. A função deverá receber um nome por parâmetro.
  1.3. Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!'.
  1.4. A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
  > Exemplo:
    > Parâmetro: ‘Bebeto’
    > Retorno: ‘Tryber Bebeto aqui!’
    > Spoiler: O método split() pode ser utilizado de diferentes maneiras, por exemplo para separar as palavras de um texto.
2. Função 2: Escreva uma função que receberá o retorno da Função 1 por parâmetro e retornará uma nova string.
  2.1. O nome da função deverá ser minhasSkills.
  2.2. A função deverá receber o retorno da Função 1 - substituaX por parâmetro.
  2.3. Declare dentro da função uma variável com o nome skills e do tipo const.
    2.3.1. A variável skills deverá ser um array que contenha três strings com tecnologias que você já estudou.
  2.4. Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
  > Exemplo de retorno:
    > Tryber Bebeto aqui!
    > Minhas três principais habilidades são:
    > JavaScript
    > HTML
    > CSS