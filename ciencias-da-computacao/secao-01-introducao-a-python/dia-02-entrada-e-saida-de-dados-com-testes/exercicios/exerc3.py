# Exercício 3:
# Modifique o exercício anterior para que as palavras sejam lidas de um
# arquivo. Considere que o arquivo terá cada palavra em uma linha.
import random


def get_words(file_name="words.txt"):
    if not file_name.endswith(".txt"):
        file_name += ".txt"
    with open(file_name, "r") as file:
        words = file.read().splitlines()
    return words


def get_random_word(file_name):
    words = get_words(file_name)
    word = random.choice(words)
    scrambled_word = "".join(random.sample(word, len(word)))
    return word, scrambled_word


def play_game(word):
    MAX_ATTEMPTS = 3
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


def main(file_name):
    word, scrambled_word = get_random_word(file_name)
    print(scrambled_word)
    play_game(word)


if __name__ == "__main__":
    file_name = input("Digite o nome do arquivo de palavras: ")
    main(file_name)
