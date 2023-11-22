# Exercício 1:
# Faça um programa que receba um nome e imprima o mesmo na vertical em escada
# invertida.
def pyramid_name():
    name = input("Digite seu nome: ")
    for i in range(len(name) + 1):
        print(name[: len(name) if i == 0 else -i].upper())
