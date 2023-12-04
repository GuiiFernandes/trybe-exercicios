class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

    def __str__(self):
        return f"Node(value={self.value} next={self.next})"


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.tail_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        if self.__length < 1:
            self.tail_value = first_value
        else:
            self.head_value.prev = first_value
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        last_value = Node(value)
        last_value.prev = self.tail_value
        old_tail = self.tail_value
        old_tail.next = last_value
        self.tail_value = last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        mid = self.__length // 2
        if position > mid:
            current_value = self.tail_value
            while position < len(self):
                current_value = current_value.prev
                position += 1
        else:
            current_value = self.head_value
            while position > 1:
                current_value = current_value.next
                position -= 1

        insert_value = Node(value)
        insert_value.next = current_value.next
        insert_value.prev = current_value
        current_value.next.prev = insert_value
        current_value.next = insert_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            self.head_value.prev = None
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.tail_value.prev

        self.tail_value.prev = None
        self.tail_value = previous_to_be_removed
        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        mid = self.__length // 2
        if position > mid:
            current_value = self.tail_value
            while position < len(self):
                current_value = current_value.prev
                position += 1
        else:
            current_value = self.head_value
            while position > 1:
                current_value = current_value.next
                position -= 1

        value_to_be_removed = current_value.next
        current_value.next = value_to_be_removed.next
        value_to_be_removed.next.prev = current_value
        value_to_be_removed.prev = None
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        if self.__length > 0:
            mid = self.__length // 2
            if position > mid:
                value_to_be_returned = self.tail_value
                while position < len(self) and value_to_be_returned.prev:
                    value_to_be_returned = value_to_be_returned.prev
                    position += 1
            else:
                value_to_be_returned = self.head_value
                while position > 0 and value_to_be_returned.next:
                    value_to_be_returned = value_to_be_returned.next
                    position -= 1
            if value_to_be_returned:
                value_returned = value_to_be_returned
        return value_returned

    def is_empty(self):
        return not self.__length

    def printPrev(self):
        print(f"prev = {self.tail_value.prev}")


if __name__ == "__main__":
    linked_list = LinkedList()

    print(linked_list.is_empty())  # saída: True
    linked_list.insert_first(1)
    print(linked_list)
    # saída: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.insert_first(2)
    print(linked_list)
    # saída: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.insert_last(3)
    print(linked_list)
    linked_list.printPrev()
    # saída: LinkedList(len=3 value=Node(value=2 next=Node(value=1 next=Node(
    # value=3 next=None))))

    linked_list.insert_at(5, 1)
    print(linked_list)
    # saída: LinkedList(len=2 value=Node(value=1 next=Node(value=5 next=None)))
    linked_list.insert_at(10, 2)
    print(linked_list)

    linked_list.insert_at(20, 4)
    print(linked_list)

    linked_list.remove_first()
    print(linked_list)
    # saída: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.remove_last()
    print(linked_list)
    # saída: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.remove_at(2)
    print(linked_list)
    # saída: LinkedList(len=1 value=Node(value=5 next=None))

    linked_list.insert_at(6, 1)
    linked_list.insert_at(7, 2)
    linked_list.insert_at(8, 3)
    linked_list.insert_at(9, 4)
    print(linked_list)
    print(linked_list.get_element_at(0))
    print(linked_list.get_element_at(3))  # saída: Node(value=8 next=None)
    print(linked_list.get_element_at(6))
    print(linked_list.get_element_at(7))
