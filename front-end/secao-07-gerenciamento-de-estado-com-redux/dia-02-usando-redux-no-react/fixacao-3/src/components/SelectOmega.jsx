import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from './Card';
import MutantOptions from './MutantOptions';
import { selectMutant, showMutant } from '../redux/actions';

class SelectOmega extends React.Component {
  render() {
    const { dispatch, show } = this.props;
    if (show) return <Card />;
    return (
      <div className="form-mutant">
        <div className="mutant-input">
          <h2>Selecione o mutante nível Ômega</h2>
          <div>
            <select onChange={ ({ target: { value } }) => dispatch(selectMutant(value)) }>
              <MutantOptions />
            </select>
            <div>
              <button
                type="button"
                onClick={ () => dispatch(showMutant(true)) }
              >
                Selecionar
              </button>
            </div>
          </div>
          <p className="intro">
            Nível Ômega: Habilidade super desenvolvida que alcançou um nível
            insuperável na classificação da habilidade.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ show, mutant }) => ({
  // Implemente aqui de modo que a aplicação tenha acesso à chave `show` do estado global
  show,
  mutant,
});

SelectOmega.propTypes = {
  dispatch: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(SelectOmega);
