def search_error(array):
    start = 0
    end = len(array) - 1

    # while start <= end:
    #     mid = (start + end) // 2
    #     if not array[mid] and array[mid - 1]:
    #         return mid
    #     elif array[mid] and not array[mid + 1]:
    #         return mid + 1
    #     elif array[mid] and array[mid + 1]:
    #         start = mid + 1
    #     else:
    #         end = mid - 1

    while end >= start:
        mid = (start + end) // 2
        if array[mid] is False:
            end = mid - 1
        else:
            start = mid + 1

    return start


print(search_error([True, True, True, True, False, False, False]))
print(search_error([True, True, False, False, False, False, False]))
