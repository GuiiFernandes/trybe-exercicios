# Exercício 1
# Em um software monitor, o qual verifica a resiliência de outro software,
# precisamos saber o tempo máximo que um software permaneceu sem
# instabilidades. Para isto, a cada hora é feito uma requisição ao sistema
# para verificamos se está tudo bem. Supondo um array que contenha os estados
# coletados por nosso software, calcule quanto tempo máximo que o servidor
# permaneceu sem instabilidades.


def count_max_stability(data):
    max = 0
    hours = 0
    for value in data:
        if value == 1:
            hours += 1
        else:
            hours = 0
        if hours > max:
            max = hours
    return max
    # Complexidade O(n) - Linear
