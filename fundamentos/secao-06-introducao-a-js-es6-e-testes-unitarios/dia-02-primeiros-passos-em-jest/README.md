# Dia 02 (Primeiros passos em Jest)

Neste dia aprendi sobre o importante e transformador mundo dos testes unitários! Teste unitário é uma das maneiras de realizar testes. Ele tem como objetivo testar pequenas partes do código de forma isolada, como, por exemplo, uma função. Dessa maneira, simulamos as entradas e as saídas que a função deve ter.
Também vai aprendi o conceito de TDD ou Test Driven Development (Desenvolvimento Orientado a Testes), em que primeiro criamos o teste, definindo o comportamento que seu código deve ter, para depois criar o código de fato. Utilizamos o Jest, um framework de testes para JavaScript desenvolvido pelo Facebook e atualmente um dos mais usados por empresas pelo mundo.

No conteúdo da Aula, criamos alguns pequenos scripts `JavaScript` que estão na pasta `conteudo_aula`.

Nos exércicios localizados nessa página coloquei em prática os conhecimentos adquiridos em aula e outros adquiridos por pesquisas na Web.

Os requisitos do exercício são:
Você vai implementar vários testes em contextos diferentes, a fim de consolidar a mecânica e também a forma de pensar em testes.
### Exercício 1
Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema.
1. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array:
  1.1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;
  1.2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
  1.3. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.
  > function myRemove(arr, item) {
  >   let newArr = [];
  >   for (let index = 0; index < arr.length; index += 1) {
  >     if (item !== arr[index]) {
  >       newArr.push(arr[index]);
  >     }
  >   }
  >   return newArr;
  > }
  > 
  > // implemente seus testes aqui

### Exercício 2
Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema.
2. A função myFizzBuzz(num) recebe um número num como parâmetro. Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz". Caso num seja um número divisível apenas por 3, retorna "fizz". E caso num seja um número divisível apenas por 5, retorna "buzz". Se num for um número que não é divisível nem por 3 e nem por 5, a função retorna o próprio número num. Caso num não seja um número, a função retorna false.
  2.1. Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.
  2.2. Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.
  2.3. Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.
  2.4. Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.
  2.5. Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.
  > function myFizzBuzz(num) {
  >   if (typeof num !== 'number') return false;
  >   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  >   if (num % 3 === 0) return 'fizz';
  >   if (num % 5 === 0) return 'buzz';
  >   return num;
  > }
  > 
  > // implemente seus testes aqui

### Exercício 3
Considere o código abaixo para realizar o próximo exercício:
  > const mapString = (objectMap, string) => {
  >   const splitString = string.split('');
  >   const mappedArray = [];
  >   for (let index = 0; index < splitString.length; index += 1) {
  >     const character = splitString[index];
  >     const mappedValue = objectMap[character];
  >     
  >     if (mappedValue) {
  >       mappedArray.push(mappedValue);
  >     } else {
  >       mappedArray.push(character);
  >     }
  >   }
  >   return mappedArray.join('');
  > }
  > const encode = (string) => {
  >   const map = {
  >     a: 1,
  >     e: 2,
  >     i: 3,
  >     o: 4,
  >     u: 5,
  >   };
  >   return mapString(map, string);
  > }
  > const decode = (string) => {
  >   const map = {
  >     1: 'a',
  >     2: 'e',
  >     3: 'i',
  >     4: 'o',
  >     5: 'u',
  >   };
  >   return mapString(map, string);
  > }
3. Para as funções encode e decode, crie os seguintes testes em Jest:
  3.1. Teste se encode e decode são funções;
  3.2. Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
  3.3. Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
  3.4. Teste se as demais letras/números não são convertidos para cada caso;
  3.5. Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

### Exercício 4
A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
  > {
  >   tech: 'nomeTecnologia',
  >   name: name,
  > }
Implemente a função techList a partir dos testes abaixo. É importante nunca alterar os testes ou as variáveis já escritas no código.
  > const techList = require('./techList.js');
  > 
  > describe('Testa a função techList', () => {
  >   it('Testa se a função techList é definida', () => {
  >     expect(techList).toBeDefined();
  >   });
  >   it('Testa se techList é uma função', () => {
  >     expect(typeof techList).toBe('function');
  >   });
  >   it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
  >     expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
  >       {
  >         tech: 'CSS',
  >         name: 'Lucas'
  >       },
  >       {
  >         tech: 'HTML',
  >         name: 'Lucas'
  >       },
  >       {
  >         tech: 'JavaScript',
  >         name: 'Lucas'
  >       },
  >       {
  >         tech: 'Jest',
  >         name: 'Lucas'
  >       },
  >       {
  >         tech: 'React',
  >         name: 'Lucas'
  >       }
  >     ]);
  >   });
  >   it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
  >     expect(techList([], 'Lucas')).toBe('Vazio!');
  >   });
  > });

### Exercício 5
A função hydrate recebe uma string no formato “numero bebida”, e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:
  > // string recebida
  > '1 cerveja'
  > // retorno da função
  > '1 copo de água'
  > 
  > // string recebida
  > '1 cerveja, 2 shots e 1 catuaba'
  > // retorno da função
  > '4 copos de água'
  > 
  > // string recebida
  > '2 caipirinhas'
  > // retorno da função
  > '2 copos de água'
Implemente a função hydrate a partir dos testes abaixo. É importante nunca alterar os testes ou as variáveis já escritas no código.
  > const hydrate = require('./hydrate.js');
  > 
  > describe('Testa a função hydrate', () => {
  >   it('Testa se a função hydrate é definida', () => {
  >     expect(hydrate).toBeDefined();
  >   });
  >   it('Testa se hydrate é uma função', () => {
  >     expect(typeof hydrate).toBe('function');
  >   });
  >   it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
  >     expect(hydrate('1 cerveja')).toBe('1 copo de água');
  >     expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
  >     expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
  >     expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
  >     expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  >   });
  > });