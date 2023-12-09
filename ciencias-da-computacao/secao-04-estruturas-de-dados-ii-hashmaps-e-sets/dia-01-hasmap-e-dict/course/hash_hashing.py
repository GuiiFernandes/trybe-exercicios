class Employee:
    def __init__(self, id_num: int, name: str) -> None:
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self) -> None:
        self._buckets = [None] * 10

    def get_address(self, id_num: int) -> int:
        return id_num % 10

    def insert(self, employe: Employee) -> None:
        address = self.get_address(employe.id_num)
        self._buckets[address] = employe

    def get_value(self, id_num: int) -> str:
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num: int) -> bool:
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update(self, id_num: int, new_name: str) -> None:
        address = self.get_address(id_num)
        self._buckets[address].name = new_name


if __name__ == "__main__":
    employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
    employees = [Employee(id_num, name) for id_num, name in employees]
    hash_map = HashMap()
    for employee in employees:
        hash_map.insert(employee)
    print(hash_map.get_value(23))
    hash_map.update(10, "name30")
    print(hash_map.get_value(10))
