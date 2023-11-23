from Eletronico import Eletrodomestico


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.items = []

    def comprar_item(self, item: Eletrodomestico):
        if item.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= item.preco
            self.items.append(item)

    def __str__(self):
        return f"""
        {self.nome} tem R$ {self.saldo_na_conta:.2f} na conta.
        E seus itens são:
        {[item for item in self.items]}
        """
