import json
import random


def retriever_pokemons_name():
    with open("pokemons.json", "r") as pokemons:
        pokemons = json.load(pokemons)["results"]
    return [{"name": pokemon["name"]} for pokemon in pokemons]


def get_random_pokemon(pokemons):
    return random.choice(pokemons)


def game(pokemon):
    errors = 0
    while errors < len(pokemon["name"]):
        guess = input("Quem é esse pokemon? ")
        if guess.lower() == pokemon["name"].lower():
            print(f"Parabéns, você acertou! O pokemon é {pokemon['name']}")
        else:
            errors += 1
            if errors == len(pokemon["name"]):
                print(f"Você errou, fim! O pokemon é {pokemon['name']}")
            else:
                print("Você errou, tente novamente!")
                print(pokemon["name"][0:errors])


def main():
    pokemons = retriever_pokemons_name()
    pokemon = get_random_pokemon(pokemons)
    game(pokemon)


if __name__ == "__main__":
    main()
