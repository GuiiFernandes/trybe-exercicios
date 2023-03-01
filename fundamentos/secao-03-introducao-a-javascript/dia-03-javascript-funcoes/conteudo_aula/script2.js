let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addClient (clientName) {
  if (typeof(clientName) === 'string') {
    clientesTrybeBank.push(clientName);
    return `Cliente adicionado com sucesso.`;
  } else {
    return `Erro! Formato de nome inválido.`;
  }
}

console.log(addClient('Guilherme'));
console.log(addClient(352));
console.log(clientesTrybeBank);

function deleteClient (clientName) {
  if (typeof(clientName) === 'string') {
    clientesTrybeBank.splice(clientesTrybeBank.indexOf(clientName), 1);
    return `Cliente removido com sucesso!`;
  } else {
    return `Erro! Formato de nome inválido.`
  }
}

console.log(deleteClient('John'));
console.log(deleteClient(352));
console.log(clientesTrybeBank);