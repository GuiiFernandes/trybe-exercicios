# Exercício 1:
# Crie um algoritmo não recursivo para contar quantos números pares existem em
# uma sequência numérica (1 a n).
def count_pair_iterative(n: int) -> int:
    count = 0
    for i in range(1, n + 1):
        if i % 2 == 0:
            count += 1
    return count


# Exercício 2:
# Transforme o algoritmo criado acima em recursivo.
def count_pair_recursive(n: int) -> int:
    if n == 1:
        return 0
    if n % 2 == 0:
        return 1 + count_pair_recursive(n - 1)
    return count_pair_recursive(n - 1)


# Exercício 3:
# Crie um algoritmo recursivo que encontre, em uma lista, o maior número
# inteiro.
def biggest(numbers: list) -> int:
    if len(numbers) == 1:
        return numbers[0]
    return max(numbers[-1], biggest(numbers[:-1]))


# Exercício 4:
# Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc)
# de dois inteiros.
def mdc(a: int, b: int) -> int:
    if b == 0:
        return a
    return mdc(b, a % b)
