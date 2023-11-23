from Pessoa import Pessoa
from items import Liquidificador, Ventilador, Secador, Batedeira
from items import MaquinaDeLavar

pessoa = Pessoa("João", 1000)
liquidificador = Liquidificador("preto", 100, 220, 100)
ventilador = Ventilador("branco", 200, 220, 200)
secador = Secador("vermelho", 300, 220, 80)
batedeira = Batedeira("verde", 400, 220, 150)
maquina_de_lavar = MaquinaDeLavar("azul", 500, 220, 1000)


pessoa.comprar_item(liquidificador)
pessoa.comprar_item(ventilador)
pessoa.comprar_item(secador)
pessoa.comprar_item(batedeira)
pessoa.comprar_item(maquina_de_lavar)

print(pessoa)
