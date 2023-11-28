# Exercício 3 Execute os algoritmos de ordenação por seleção e inserção, para
# as entradas de dados ordenadas, inversamente ordenadas e aleatórias. Em
# seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000,
# 1.000.000.

from random import shuffle
from Cronometro import Cronometro


def selection_sort(lista):
    for i in range(len(lista) - 1):
        min_i = i
        for search_i in range(i + 1, len(lista)):
            if lista[search_i] < lista[min_i]:
                min_i = search_i

        lista[i], lista[min_i] = lista[min_i], lista[i]

    return lista


def insertion_sort(lista):
    for i in range(1, len(lista)):
        key = lista[i]
        new_position = i - 1
        while new_position >= 0 and lista[new_position] > key:
            lista[new_position + 1] = lista[new_position]
            new_position -= 1

        lista[new_position + 1] = key

    return lista


for input in (100, 1000, 10000, 100000):
    ordenados = list(range(input))
    inversamente_ordenados = list(reversed(range(100)))
    aleatorios = ordenados[:]  # copia dos ordenados
    shuffle(aleatorios)  # embaralha eles

    with Cronometro(f"selection_sort(ordenados[{input}])"):
        selection_sort(ordenados)
    with Cronometro(f"selection_sort(inversamente_ordenados[{input}])"):
        selection_sort(inversamente_ordenados)
    with Cronometro(f"selection_sort(aleatorios[{input}])"):
        selection_sort(aleatorios)
    with Cronometro(f"insertion_sort(ordenados[{input}])"):
        insertion_sort(ordenados)
    with Cronometro(f"insertion_sort(inversamente_ordenados[{input}])"):
        insertion_sort(inversamente_ordenados)
    with Cronometro(f"insertion_sort(aleatorios[{input}])"):
        insertion_sort(aleatorios)

# Com 100 elementos:
# selection_sort(ordenados) demorou 0.00013340599980438128s
# selection_sort(inversamente_ordenados) demorou 0.00012788200001523364s
# selection_sort(aleatorios) demorou 0.00013147699974069837s
# insertion_sort(ordenados) demorou 6.32699993730057e-06s
# insertion_sort(inversamente_ordenados) demorou 5.690000762115233e-06s
# insertion_sort(aleatorios) demorou 5.698000677512027e-06s

# Com 1.000 elementos:
# selection_sort(ordenados) demorou 0.014308785999674s
# selection_sort(inversamente_ordenados) demorou 0.0001497510002081981s
# selection_sort(aleatorios) demorou 0.014681319998999243s
# insertion_sort(ordenados) demorou 7.370700041064993e-05s
# insertion_sort(inversamente_ordenados) demorou 6.880000000819564e-06s
# insertion_sort(aleatorios) demorou 7.183199886640068e-05s

# Com 10.000 elementos:
# selection_sort(ordenados) demorou 1.7477750800007925s
# selection_sort(inversamente_ordenados) demorou 0.0001800400004867697s
# selection_sort(aleatorios) demorou 1.7295196640006907s
# insertion_sort(ordenados) demorou 0.0009109299990086583s
# insertion_sort(inversamente_ordenados) demorou 8.101000275928527e-06s
# insertion_sort(aleatorios) demorou 0.0008621420001873048s

# Com 100.000 elementos:
