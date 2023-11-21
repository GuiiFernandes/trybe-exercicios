# Exercício 1: Dada uma lista, descubra o menor elemento.
def smaller(num_list):
    return min(num_list)


# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com n asteriscos de base.
def triangle_asterisks(n: int) -> None:
    for row in range(1, n + 1):
        print("*" * row)


# Exercício 3: Crie uma função que receba um número inteiro N
# e retorne o somatório de todos os números de 1 até N.
def sum_n(n: int) -> int:
    return sum(range(1, n + 1))


# def sum_n(n: int) -> int:
#     total_sum = 1
#     if n == 0:
#         return 0
#     for i in range(2, n + 1):
#         total_sum += i
#     return total_sum


# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de
# descontos:
#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos,
# o tipo de combustível (codificado da seguinte forma:
# A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente,
# sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do
# litro do álcool é R$ 1,90.


def calculate(supply):
    price = {"A": 1.9, "G": 2.5}
    discount_table = {"A": [0.97, 0.95], "G": [0.96, 0.94]}
    if supply[1] < 20:
        discount = discount_table[supply[0]][0]
    else:
        discount = discount_table[supply[0]][1]
    return price[supply[0]] * supply[1] * discount
