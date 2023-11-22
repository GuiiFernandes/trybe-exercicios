# Ex1: Faça um programa que solicite o nome de uma pessoa usuária e
# imprima-o na vertical.
def vertical_name():
    name = input("Digite seu nome: ")

    for character in name:
        print(character.upper())


# Ex2: Escreva um programa que receba vários números naturais e calcule a soma
# desses valores. Caso algum valor da entrada seja inválido (por exemplo uma
# letra), uma mensagem deve ser exibida na saída de erros no seguinte formato:
# “Erro ao somar valores, {valor} é um valor inválido”. Ao final, você deve
# imprimir a soma dos valores válidos.Escreva um programa que receba vários
# números naturais e calcule a soma desses valores. Caso algum valor da
# entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida
# na saída de erros no seguinte formato: “Erro ao somar valores, {valor} é um
# valor inválido”. Ao final, você deve imprimir a soma dos valores válidos.
def sum_numbers():
    numbers = input("Digite uma sequência de números separados por espaço: ")
    num_list = numbers.split(" ")
    for n in num_list:
        if not n.isnumeric():
            return print(f"Erro ao somar valores, {n} é um valor inválido")
    print(sum([float(n) for n in num_list]))


# Ex 3: Dado um arquivo contendo estudantes e suas respectivas notas, escreva
# um programa que:
# lê todas essas informações;
# aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# escreva seus nomes em outro arquivo.
# Considere que a nota miníma para aprovação é 6.


def filter_students():
    with open("students.txt", "r") as students:
        for student in students:
            name, grade = student.split(" ")
            if float(grade) < 6:
                with open("students_failed.txt", "a") as failed:
                    failed.write(f"{name}\n")
