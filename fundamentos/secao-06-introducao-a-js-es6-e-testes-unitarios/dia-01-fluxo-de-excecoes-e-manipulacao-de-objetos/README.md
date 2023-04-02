# Dia 01 (Fluxo de exceções e manipulação de objetos)

Neste dia aprendi um pouco sobre fluxo de exceção, isto é, sobre como tratar os erros no seu código e na sua aplicação utilizando os métodos throw e try/catch da linguagem `JavaScript`.

No conteúdo da Aula, criamos 2 pequenos códigos que estão na pasta `conteudo_aula`.

Nos exércicios localizados nessa página coloquei em prática os conhecimentos adquiridos em aula e outros adquiridos por pesquisas na Web.

Os requisitos do exercício são:
### Parte II – Pedido de clientes
Imagine que você seja a pessoa responsável por cuidar de um sistema de entregas de uma loja virtual e que precise passar todas as informações para a pessoa que irá efetuar a entrega dos pedidos.
1. A função findPersonByName() recebe um nome por parâmetro e retorna a string: 'Destinatário: Ana Santos. Endereço: Rua dos Girassóis, 1011, Barra, Salvador - BA. CEP: 34567-890 '.
2. Caso a função findPersonByName() não encontre pessoas na lista de clientes, lance uma exceção com a mensagem 'Pessoa não encontrada, tente novamente'.
3. A função findPersonByPosition() recebe uma posição (do array) por parâmetro e retorna uma string com o nome e o e-mail da pessoa. Cliente: João da Silva. email: joao.silva@gmail.com.
4. Caso a função findPersonByPosition() não localize uma pessoa por posição, lance uma exceção com a mensagem 'Posição inválida, tente novamente'.
5. A função findPeopleByState recebe um estado por parâmetro e retorna um array contendo o nome das pessoas que moram naquele estado.
Caso a função findPeopleByState localize nenhuma pessoa no estado, lance uma exceção com a mensagem 'Ops, nenhuma pessoa mora nesse estado, tente outro'.

### Parte III – Trabalhando em uma autoescola
Suponha que você esteja trabalhando em uma autoescola e precise fazer o cadastro de uma nova pessoa que tem interesse em se tornar motorista. Para isso, o sistema que você vai desenvolver tem uma série de validações, que permitem ou não a pessoa a começar as aulas.
1. A função studentRegister() recebe dois parâmetros: name, nome da pessoa que quer começar a fazer as aulas; e age, idade da pessoa no momento do cadastro.
2. Caso a função não receba name ou idade (ou ambos), lance uma exceção com a mensagem 'Todas as informações são necessárias'.
3. Caso a função receba o nome e uma idade inferior a 18 anos, lance uma exceção com a mensagem 'Ops, infelizmente nesse momento você não pode fazer as aulas'
4. Caso a função receba o nome e uma idade igual ou superior a 18 anos, retorne a string: 'Nome, seja bem-vindo(a) à AuTrybe!'