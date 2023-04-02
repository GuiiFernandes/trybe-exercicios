# Dia 01 (Primeiros Passos)

Neste dia aprendi sobre o que são, como declarar e quais os tipos de variáveis, operadores aritméticos e condicionais e estruturas condicionais da linguagem `JavaScript`.

No conteúdo da Aula, criamos 6 pequenos scripts `JavaScript` que estão na pasta `Para-Fixar`.

Nos exércicios localizados nessa página coloquei em prática os conhecimentos adquiridos em aula e outros adquiridos por pesquisas na Web.

Os requisitos do exercício são:

1. Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
  * Adição (a + b)
  * Subtração (a - b)
  * Multiplicação (a * b)
  * Divisão (a / b)
  * Módulo (a % b)
2. Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.
3. Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.
4. Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.
5. Utilize if/else para escrever um código que defina três variaveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
  * Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
  * Um ângulo será considerado inválido se não tiver um valor positivo.
6. Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
  * Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
  * Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).
  * Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
  * Exemplo: bishop (bispo) -> diagonals (diagonais)

7. Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:
  * Porcentagem >= 90 -> A
  * Porcentagem >= 80 -> B
  * Porcentagem >= 70 -> C
  * Porcentagem >= 60 -> D
  * Porcentagem >= 50 -> E
  * Porcentagem < 50 -> F
  * O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
8. Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
  * Bônus: use somente um if.
9. Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.
  * Bônus: use somente um if.
10. Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.
  * Atente para o fato de que um imposto de 20% incide sobre o custo do produto.
  * Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.
  * O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.
  * valorCustoTotal = valorCusto + impostoSobreOCusto;
  * lucro = valorVenda - valorCustoTotal (lucro de um produto);
11. Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
  *A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
    * INSS (Instituto Nacional do Seguro Social)
      * Salário bruto até R$ 1.556,94: alíquota de 8%
      * Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
      * Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
      * Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
    * IR (Imposto de Renda)
      * Até R$ 1.903,98: isento de imposto de renda
      * De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
      * De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
      * De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
      * Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00, terá como primeiro desconto referente à contribuição do INSS. O cálculo será:
  * O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
  * Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
  * Para pegar o valor do IR, temos um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
    * R$ 2.670,00: salário com INSS já deduzido;
    * 7.5%: alíquota de imposto de renda, que representa um desconto de R$ 200,25.
    * R$ 142,80 parcela a se deduzir do imposto de renda.
  * Fazendo a conta para obtermos o valor do imposto de renda temos: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45
  * O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

O resultado do exércios estão armazenados no arquivo script.js na pasta deste README.md.