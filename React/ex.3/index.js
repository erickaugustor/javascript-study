/* class Pessoa {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return `Pessoa: ${this.name}`;
  }
} */

import Pessoa from './pessoa';

const pessoa = new Pessoa('Erick');
console.log(pessoa.toString());
