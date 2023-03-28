const sum = require('./script'); //Essa função pega o conteúdo do arquivo referenciado dentro do () e apĺica nele o teste descrito abaixo. (não precis)

// executa o test/ parâmetro com frase que diz o que o teste faz / arrow function que executa o teste.
// test('o que é o test', () => { });
test('Verifica se a soma de 1 e 2 é 3', () => {
  //expect nos diz qual a função que esperamos que seja executada / matchs são diferentes métodos para testar valores (existem vários), vamos usar o toBe, mas existem várias formas diferentes na documentação e devemos escolher a que melhor encaixa na nossa lógica.
  //expect(função.matcher(valor esperado de retorno));
  expect(sum(1, 2)).toBe(3);
});

