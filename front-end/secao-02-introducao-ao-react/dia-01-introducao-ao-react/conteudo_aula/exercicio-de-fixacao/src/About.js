import { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h1>Guilherme Fernandes</h1>
        <p>
          Brasileiro, 30 anos, casado.<br/>
          Residente em Lavras-MG.<br/>
          Tecnólogo em Gestão Financeira pelo IFMG.<br/>
          Programador web pela UAITEC (2017).<br/>
          Experiência Comercial.<br/>
          Estudante em Desenvolvimento Web na Trybe e Udemy.
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>
          <li>JavaScript - ES6</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Jest</li>
        </ul>
      </div>
    );
  }
}

export default About;
