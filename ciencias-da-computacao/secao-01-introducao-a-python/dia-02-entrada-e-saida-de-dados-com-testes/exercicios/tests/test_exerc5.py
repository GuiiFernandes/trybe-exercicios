from exerc5 import fizz_buzz


def test_fizz_buzz():
    "Para o número 10, deve retornar corretamente;"
    result = [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]
    assert fizz_buzz(15) == result
