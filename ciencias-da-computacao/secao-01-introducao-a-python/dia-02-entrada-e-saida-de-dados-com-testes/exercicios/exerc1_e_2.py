import random


# Exercício 1:
# Faça um programa que receba um nome e imprima o mesmo na vertical em escada
# invertida.
def pyramid_name():
    name = input("Digite seu nome: ")
    for i in range(len(name) + 1):
        print(name[: len(name) if i == 0 else -i].upper())


# Exercício 2:
# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária
# tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas.
# O programa terá uma lista de palavras e escolherá uma aleatoriamente. O
# jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra
# deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
def scrambled_word():
    WORDS = [
        "cat",
        "elephant",
        "dog",
        "monkey",
        "duck",
        "chameleon",
        "bear",
        "moose",
        "rooster",
    ]
    MAX_ATTEMPTS = 3
    word = random.choice(WORDS)
    print("".join(random.sample(word, len(word))))
    while MAX_ATTEMPTS > 0:
        print(f"Você tem {MAX_ATTEMPTS} tentativas")
        guess = input("Digite uma palavra: ")
        if guess == word:
            print("Parabéns, você acertou!")
            break
        else:
            MAX_ATTEMPTS -= 1
            print(
                f"Você errou. Fim de jogo! A palavra é {word}"
            ) if MAX_ATTEMPTS == 0 else print("Você errou, tente novamente!")


scrambled_word()
