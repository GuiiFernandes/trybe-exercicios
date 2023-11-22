a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

head, *tail = (
    1,
    2,
    3,
)  # Quando um * está presente no desempacotamento, os valores são
# desempacotados em formato de lista.
print(head)  # saída: 1
print(tail)  # saída: [2, 3]

# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto à
# variável file
# escrita
# escrita
with open("arquivo.txt", "w") as file:
    LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
    file.writelines(LINES)

# leitura
with open("arquivo.txt", "r") as file:
    for line in file:
        print(line)  # não esqueça que a quebra de linha também é um caractere
        # da linha
