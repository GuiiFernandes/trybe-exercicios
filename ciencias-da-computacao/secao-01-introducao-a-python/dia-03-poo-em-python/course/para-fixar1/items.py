from Eletronico import Eletrodomestico


class Liquidificador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco):
        super().__init__(cor, potencia, tensao, preco, "Liquidificador")


class Ventilador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco):
        super().__init__(cor, potencia, tensao, preco, "Ventilador")
        self.__velocidade_maxima = 5


class Secador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco):
        super().__init__(cor, potencia, tensao, preco, "Secador")
        self.__velocidade_maxima = 3


class Batedeira(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco):
        super().__init__(cor, potencia, tensao, preco, "Batedeira")
        self.__velocidade_maxima = 4


class MaquinaDeLavar(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco):
        super().__init__(cor, potencia, tensao, preco, "Máquina de Lavar")
        self.__velocidade_maxima = 8
