// 1. Crie union types que representem: a. Os estados físicos da matéria como strings: líquido, sólido ou gasoso. b. O documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex.: “123.567.890-12” ou 123456789012. c. Sistemas operacionais: Linux, MacOS ou Windows.

const physicalStat: 'líquido' | 'sólido' | 'gasoso' = 'gasoso';
const cpf: string | number = 12345678900;
const oS: 'Windows' | 'Linux' | 'Mac OS' = 'Linux';

// 2. Crie type aliases para: a. Representar um ou mais nomes de pessoas em uma variável que guarda reservas de restaurante. b. Um objeto que represente um endereço.
type Names = string[] | string;
type Address = {
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
};