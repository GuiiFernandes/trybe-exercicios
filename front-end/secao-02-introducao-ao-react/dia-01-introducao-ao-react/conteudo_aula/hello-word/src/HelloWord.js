import React, { Component } from "react";

const classe = 'hello-class';

function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

class HelloWorld extends Component {
  render () {
    return (
      <span className={classe}>Hello, {nomeCompleto('Gui', 'Fernandes')}!</span>
    )
  }
}

export default HelloWorld;
