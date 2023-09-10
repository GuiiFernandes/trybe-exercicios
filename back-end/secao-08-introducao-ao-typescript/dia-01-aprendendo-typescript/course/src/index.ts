import * as Functions from './myFunctions';
import users from './data';

console.log(`Lista de pessoas usuárias do Github: ${Functions.getUserNames(users).join(', ')}`);

console.log(`Lista de pessoas usuárias do Github com mais de 20 repositórios: ${Functions.getUsersByQtdRepo(users, 20).join(', ')}.`);

console.log(`Essa é a conta mais ativa da lista? ${Functions.isMostActiveUser('João Paulo Aramuni', users) ? 'Sim' : 'Não'}.`);

