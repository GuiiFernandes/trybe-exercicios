def rotLeft(array: list, nums_rotation: int):
    nums = array[:nums_rotation]
    array = array[nums_rotation:]
    array.extend(nums)
    return array


print(rotLeft([1, 2, 3, 4, 5], 2))
