# Exercício 5:
# Realize esse exercício utilizando TDD: implemente os testes e depois a
# função 🧪
# Escreva um programa que retorne uma lista com os valores numéricos de 1 a N,
# mas com as seguintes exceções:
# Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;
# Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz” ao invés do
# número.


def fizz_buzz(n):
    result = []
    for i in range(1, n + 1):
        if not i % 3 and not i % 5:
            result.append("FizzBuzz")
        elif not i % 3:
            result.append("Fizz")
        elif not i % 5:
            result.append("Buzz")
        else:
            result.append(i)
    return result


if __name__ == "__main__":
    print(fizz_buzz(15))
