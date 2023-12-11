from conjunto_lista import Conjunto

if __name__ == "__main__":
    set = Conjunto()
    add_set = [0, 10, 100, 1000]
    for i in add_set:
        set.add(i)
    print(set)

    print(0 in set)
    print(1 in set)

    other_set = Conjunto()
    add_other = [1, 11, 100, 999]
    for i in add_other:
        other_set.add(i)
    print(set.union(other_set))

    print(set.intercession(other_set))

    print(set.difference(other_set))

    last_set = Conjunto()
    add_last = [1, 11]
    last_set.addList(add_last)

    print(last_set.issubset(other_set))
    print(other_set.issuperset(last_set))
