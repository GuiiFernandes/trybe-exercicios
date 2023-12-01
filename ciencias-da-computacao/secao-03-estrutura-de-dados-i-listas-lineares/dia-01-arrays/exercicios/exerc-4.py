# Exercício 4
# Você têm dois arrays de números inteiros que representam:
# I - instantes de entrada e saídas em uma biblioteca II - um número que
# represente um instante a ser buscado.
# Retorne quantas pessoas estudantes estão na biblioteca naquele instante.
# Considere que todo estudante entrou e saiu da biblioteca.
def seach_students_on(entries, exits, hour):
    # students_on = 0
    # for i in range(len(entries)):
    #     if entries[i] <= hour <= exits[i]:
    #         students_on += 1
    # return students_on
    return sum(entry <= hour <= exit for entry, exit in zip(entries, exits))
    # Complexidade O(n) - Linear


print(seach_students_on([3, 8, 9, 12], [10, 13, 14, 15], 11))
