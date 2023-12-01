# Exercício 3
# Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a
# demanda de analisar um array de números inteiros que representam os produtos
# dessa empresa. Verifique quantos produtos formam boas combinações, ou seja,
# quando um produto é igual ao outro e seu índice é maior que o anterior. Esta
# combinação pode ser utilizada para modificar os produtos de uma página.
def shuffle(cards):
    shuffle_cards = []
    cards_part = len(cards) // 2
    for i in range(cards_part):
        # shuffle_cards.append(cards[i])
        # shuffle_cards.append(cards[cards_part + i])
        shuffle_cards.extend(cards[i::cards_part])
    return shuffle_cards


print(shuffle([2, 6, 4, 5]))
print(shuffle([1, 4, 4, 7, 6, 6]))
