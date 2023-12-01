# Exercício 3
# Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a
# demanda de analisar um array de números inteiros que representam os produtos
# dessa empresa. Verifique quantos produtos formam boas combinações, ou seja,
# quando um produto é igual ao outro e seu índice é maior que o anterior. Esta
# combinação pode ser utilizada para modificar os produtos de uma página.
def combination(products):
    combinations = 0
    for i in range(len(products)):
        for j in range(i + 1, len(products)):
            if products[i] == products[j]:
                combinations += 1

    return combinations
    # Complexidade O(n²) - Quadrática


print(combination([1, 3, 1, 1, 2, 3, 2, 3]))
print(combination([1, 1, 2, 3]))
