# Exercício 5: Consulte a forma de se criar um dicionário chamado de dict
# comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu
# dobro.

values = {a: a * 2 for a in range(3, 21)}
print(values)

# Exercício 6: Dada uma string, construa um dicionário com a contagem de cada
# caractere da palavra. Utilize o pseudocódigo e o exemplo abaixo para se
# nortear.
str = "bbbbaaaacccaaaaaaddddddddccccccc"
count_char = {char: str.count(char) for char in str}
print(count_char)

# Exercício 7: Utilize o dicionário criado no exercício 5. Para as chaves
# ímpares, não queremos mais mapear para o seu dobro, mas sim para o seu
# triplo. Consulte o método keys() e atualize o seu dicionário para a nova
# regra.
values2 = {key: (value if key % 2 == 0 else key * 3) for key, value in values.items()}
print(values2)
