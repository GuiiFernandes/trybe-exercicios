interface Logger {
  log(message: string): void;
}

interface Database {
  logger: Logger;

  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`log1: ${message}`);
  }
}

class ConsoleLogger2 implements Logger {
  log(message: string): void {
    console.log(`log2: ${message}`);
  }
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  save(key: string, value: string): void {
    this.logger.log(`Dados salvos: "${key}: ${value}"`);
  }
}

const console1 = new ConsoleLogger();
const console2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(console1);
const db2 = new ExampleDatabase(console2);
const db3 = new ExampleDatabase();

db1.save('afirmação', 'toBeInTheDocument não é teste');
db1.save('chave 1', 'valor 1');
db2.save('chave 2', 'valor 2');
db3.save('chave 3', 'valor 3');