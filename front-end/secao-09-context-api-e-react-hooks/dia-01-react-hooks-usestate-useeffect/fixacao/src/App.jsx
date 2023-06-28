import { useState } from 'react';
import './App.css';

function App() {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [studyModule, setStudyModule] = useState('Fundamentos');
  const [renderData, setRenderData] = useState(false);

  const modules = ['Fundamentos', 'Front-end', 'Back-end', 'Ciência da computação'];

  return (
    <main>
      <form
        onSubmit={ (event) => {
          event.preventDefault();
          setRenderData(true);
        } }
      >
        <h1>Dados pessoais</h1>
        <label htmlFor="fullName">
          Nome completo:
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={ fullName }
            onChange={ ({ target }) => setFullName(target.value) }
          />
        </label>
        <label htmlFor="age">
          Idade:
          <input
            id="age"
            name="age"
            type="number"
            value={ age }
            onChange={ ({ target }) => setAge(target.value) }
          />
        </label>
        <label htmlFor="city">
          Cidade:
          <input
            id="city"
            name="city"
            type="text"
            value={ city }
            onChange={ ({ target }) => setCity(target.value) }
          />
        </label>
        <div>
          {
            modules.map((module, index) => (
              <label htmlFor={ `module${index}` } key={ index }>
                <input
                  id={ `module${index}` }
                  name="module"
                  type="radio"
                  value={ module }
                  checked={ studyModule === module }
                  onChange={ ({ target }) => setStudyModule(target.value) }
                />
                { module }
              </label>
            ))
          }
        </div>
        <button
          disabled={ !(fullName && age && city) }
        >
          Enviar
        </button>
      </form>
      {
        renderData && (
          <div>
            <p>{ `Nome: ${fullName}` }</p>
            <p>{ `Idade: ${age}` }</p>
            <p>{ `Cidade: ${city}` }</p>
            <p>{ `Módulo: ${studyModule}` }</p>
          </div>
        )
      }
    </main>
  );
}

export default App;
