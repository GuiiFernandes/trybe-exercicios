# Exercício 4 Compare o tempo de execução do algoritmo merge_sort e
# bubble_sort para uma entrada de 10.000 valores aleatórios. Explique através
# de análise de complexidade o que ocorre.

from random import shuffle
from Cronometro import Cronometro


ordenados = list(range(10000))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles


def merge_sort(lista, start=0, end=None):
    if end is None:
        end = len(lista)
    if (end - start) > 1:
        mid = (start + end) // 2
        merge_sort(lista, start, mid)
        merge_sort(lista, mid, end)
        merge(lista, start, mid, end)


def merge(lista, start, mid, end):
    left = lista[start:mid]
    right = lista[mid:end]

    li, ri = 0, 0

    for i in range(start, end):
        if li >= len(left):
            lista[i] = right[ri]
            ri += 1
        elif ri >= len(right):
            lista[i] = left[li]
            li += 1
        elif left[li] < right[ri]:
            lista[i] = left[li]
            li += 1
        else:
            lista[i] = right[ri]
            ri += 1


def bubble_sort(lista):
    n = len(lista)
    for i in range(n - 1):
        for item in range(0, n - 1 - i):
            if lista[item] > lista[item + 1]:
                lista[item], lista[item + 1] = lista[item + 1], lista[item]

    return lista


with Cronometro("merge_sort(aleatorios)"):
    merge_sort(aleatorios)

with Cronometro("bubble_sort(aleatorios)"):
    bubble_sort(aleatorios)

# Com 10.000 elementos:
# merge_sort(aleatorios) demorou 0.014295061999291647s
# bubble_sort(aleatorios) demorou 1.9227559949995339s
# Isso ocorre porque o bubble sort tem complexidade O(n²) e o merge sort tem
# complexidade O(n log n) em cenários médios por usar o dividir e conquistar.
