# Exercício 4:
# Dado o seguinte arquivo no formato JSON, leia seu conteúdo e calcule a
# porcentagem de livros em cada categoria em relação ao número total de livros.
# O resultado deve ser escrito em um arquivo no formato CSV como o exemplo
# abaixo.

import json
import csv


def retrieve_books(file):
    with open(file, "r") as file:
        return json.load(file)


def count_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories, len(books)


def calculate_percentage(count_categories, total):
    return [
        [category, num_books / total]
        for category, num_books in count_categories.items()
    ]


def create_report(categories):
    with open("categories_report.csv", "w", encoding="utf-8") as file:
        writer = csv.writer(file)
        headers = ["categoria", "porcentagem"]
        writer.writerow(headers)
        writer.writerows(categories)


def main(file_name):
    books = retrieve_books(file_name)
    categories, total = count_categories(books)
    categories = calculate_percentage(categories, total)
    create_report(categories)


if __name__ == "__main__":
    file_name = input("Digite o nome do arquivo json (sem extensão): ")
    main(f"{file_name}.json")
