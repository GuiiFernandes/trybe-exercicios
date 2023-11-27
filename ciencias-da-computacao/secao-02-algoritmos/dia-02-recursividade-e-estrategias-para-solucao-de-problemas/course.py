# Exercício 1: Faça um algoritmo recursivo de soma. Esse algoritmo deve
# receber um número de parâmetro e deve somar todos os números antecessores a
# ele.
def sum(n: int) -> int:
    if n == 1:
        return 1
    else:
        return n + sum(n - 1)


print(sum(4))
