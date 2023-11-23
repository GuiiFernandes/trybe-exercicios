# Realize esse exercício utilizando TDD: implemente os testes e depois a
# função 🧪
# Faça uma função que valide um e-mail, lançando uma exceção quando o valor
# for inválido. Endereços de e-mail válidos devem seguir as seguintes regras:
# Devem seguir o formato nomeusuario@nomewebsite.extensao;
# O nome de usuário deve conter somente letras, dígitos, traços e underscores;
# O nome de usuário deve iniciar com uma letra;
# O nome do website deve conter somente letras e dígitos;
# O tamanho máximo da extensão é de 3 caracteres.
from email_validator import validate_email, EmailNotValidError


def email_format_verify(email):
    if not email[0].isalpha():
        raise EmailNotValidError("Username should start with a letter")
    validate_email(email)


def validate1(email):
    index = 0
    if not email[index].isalpha():
        raise ValueError("Username should start with a letter")

    # validate username
    while email[index] != "@" and index < len(email):
        letter = email[index]
        if (
            not letter.isalpha()
            and not letter.isdigit()
            and letter
            not in (
                "_",
                "-",
            )
        ):
            raise ValueError(
                "Username should contain only letters, " "digits, dashes or underscores"
            )
        index += 1
    index += 1  # @
    # validate website
    while email[index] != "." and index < len(email):
        letter = email[index]
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError("Website should contain only letters, and digits")
        index += 1

    index += 1  # .
    # validate extension
    counter = 0
    while index < len(email):
        counter += 1
        index += 1
    if counter > 3:
        raise ValueError("Extension maximum length is 3")
    return None


def validate2(email: str):
    email_list = email.split("@")
    if len(email_list) != 2:
        raise ValueError("Email should contain only one @")
    username, website = email_list
    if not username[0].isalpha():
        raise ValueError("Username should start with a letter")
    for letter in username:
        if (
            not letter.isalpha()
            and not letter.isdigit()
            and letter
            not in (
                "_",
                "-",
            )
        ):
            raise ValueError(
                "Username should contain only letters, " "digits, dashes or underscores"
            )
    website_list = website.split(".")
    if len(website_list) != 2:
        raise ValueError("Website should contain only one .")
    website, extension = website_list
    if len(extension) > 3:
        raise ValueError("Extension maximum length is 3")


if __name__ == "__main__":
    email = input("Digite um email: ")
    # email_format_verify(email)
    validate2(email)
    print("Email válido!")
