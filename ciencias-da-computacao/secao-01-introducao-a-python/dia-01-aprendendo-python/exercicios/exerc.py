import math


# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def biggest(a, b):
    if a > b:
        return a
    return b


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def media(num_list):
    return sum(num_list) / len(num_list)


# def mean(numbers):
#     total = 0
#     for number in numbers:
#         total += number
#     return total / len(numbers)


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n
def square(num):
    for row in range(num):
        print("*" * num)


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n
def biggest_name(names):
    return max(names, key=len)


# def find_biggest_name(names):
#     biggest_name = names[0]
#     for name in names:
#         if len(name) > len(biggest_name):
#             biggest_name = name
#     return biggest_name


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada
# 3 metros quadrados e que a tinta é vendida em latas de 18 litros,
# que custam R$ 80,00. Crie uma função que retorne dois valores
# em uma tupla contendo a quantidade de latas de tinta a serem compradas e o
# preço total a partir do tamanho de uma parede (em m²).
def painting_cost(area):
    ROOF_PER_LITER = 3
    QUANTITY_PER_CAN = 18
    CAN_PRICE = 80
    quantity_can = math.ceil(area / ROOF_PER_LITER / QUANTITY_PER_CAN)
    total_price = quantity_can * CAN_PRICE
    return quantity_can, total_price


# Exercício 6: Crie uma função que receba os três lado de um triângulo e
# informe qual o tipo de triângulo formado ou "não é triangulo",
# caso não seja possível formar um triângulo.
def triangle_type(a, b, c):
    if a + b < c or a + c < b or b + c < a:
        return "Não é um triângulo"
    elif a == b == c:
        return "Triângulo Equilátero"
    elif a == b or b == c or a == c:
        return "Triângulo Isósceles"
    else:
        return "Triângulo Escaleno"
