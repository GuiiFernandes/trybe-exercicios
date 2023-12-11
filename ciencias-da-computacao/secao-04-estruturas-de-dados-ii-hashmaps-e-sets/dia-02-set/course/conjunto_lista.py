class Conjunto:
    def __init__(self):
        self.set = [False] * 1001

    def __len__(self):
        return len(self.set)

    def __str__(self):
        str_set = "{"
        for i in range(len(self.set)):
            if self.set[i]:
                str_set += f"{i}, "
        str_set = str_set[:-2]
        str_set += "}"
        return str_set

    def __contains__(self, value):
        return self.set[value] is True

    def addList(self, list):
        for i in list:
            self.add(i)

    def add(self, index):
        if index >= 0 and index < len(self.set):
            self.set[index] = True

    def union(self, other):
        union = Conjunto()
        len_biggest = len(self) if len(self) > len(other) else len(other)
        for i in range(len_biggest):
            if self.set[i] or other.set[i]:
                union.add(i)
        return union

    def intercession(self, other):
        intercession = Conjunto()
        len_smallest = len(self) if len(self) < len(other) else len(other)
        for i in range(len_smallest):
            if self.set[i] and other.set[i]:
                intercession.add(i)
        return intercession

    def difference(self, other):
        difference = Conjunto()
        for i in range(len(self)):
            if self.set[i] and not other.set[i]:
                difference.add(i)
        return difference

    def issubset(self, other):
        for i in range(len(self)):
            if self.set[i] and not other.set[i]:
                return False
        return True

    def issuperset(self, other):
        for i in range(len(other)):
            if other.set[i] and not self.set[i]:
                return False
        return True
