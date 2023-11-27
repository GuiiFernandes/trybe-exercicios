# Exercício 1: Qual é a Ordem de Complexidade (complexidade de tempo) do
# algoritmo abaixo? E a complexidade de espaço?
def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result


# tempo 0(n) / espaço 0(1)


# Exercício 2: Meça o tempo de execução do algoritmo acima e, mudando o
# tamanho das entradas, veja como, se você aumenta a entrada em n vezes, o
# tempo de execução aumenta em n² vezes!
def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f"Array 1: {number1}")
        for number2 in array2:
            print(f"Array 2: {number2}")
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


n = 1000
meu_array = list(range(1, n + 1))

multiply_arrays(meu_array, meu_array)
# time python3 course.py
# 10000 iterações! 0,2s
