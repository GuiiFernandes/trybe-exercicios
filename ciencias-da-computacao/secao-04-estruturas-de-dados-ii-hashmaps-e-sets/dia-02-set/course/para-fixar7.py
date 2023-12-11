from conjunto_lista import Conjunto

if __name__ == "__main__":
    # Exercício 7
    # Sua trajetória no curso foi um sucesso e agora você está trabalhando
    # para a Trybe! Em um determinado módulo, os estudantes precisam entregar
    # dois trabalhos para seguir adiante. Cada vez que um dos trabalhos é
    # entregue, o nome da pessoa fica registrado. Precisamos saber como está o
    # andamento da entrega das listas. Para isso, você tem acesso aos nomes
    # das pessoas da turma, bem como ao log de quem já entregou qual lista.

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]

    lista1_set = Conjunto()
    lista2_set = Conjunto()
    estudantes_set = Conjunto()

    lista1_set.addList(lista1_entregues)
    lista2_set.addList(lista2_entregues)
    estudantes_set.addList(estudantes)

    # 1. Quem ainda não entregou a lista1?
    print(estudantes_set.difference(lista1_set))

    # 2. Quem já entregou as duas listas?
    print(lista1_set.intercession(lista2_set))

    # 3. Quem já entregou qualquer uma das duas listas?
    print(lista1_set.union(lista2_set))

    # 4. Quem ainda não entregou nenhuma das duas listas?
    print(estudantes_set.difference(lista1_set.union(lista2_set)))
