import { Component } from 'react';
import api from './services/api';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

class App extends Component {
  state = {
    input: '',
    cep: {},
  };

  handleChange = ({ target }) => {
    this.setState({
      input: target.value,
    });
  };

  handleSearch = async () => {
    const { input } = this.state;

    if (input === '') {
      alert("Preencha algun CEP")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      this.setState({
        cep: response.data,
        input: '',
      })
    } catch (e) {
      console.log(e);
      alert("Ops erro ao buscar aqui");
    }
  }

  render() {
    const { cep, input } = this.state;
    return (
      <div className="container">
        <h1 className="title">Buscador de CEP</h1>

        <div className="containerImput">
          <input
            type="text"
            placeholder="Digite seu cep..."
            value={input}
            onChange={this.handleChange}
          />
          <button className="buttonSearch" onClick={this.handleSearch}>
            <FiSearch size={25} color="#FFF" />
          </button>
        </div>


        {Object.keys(cep).length > 0 && (
          <main className='main'>
            <h2>CEP: {cep.cep}</h2>
            
            {/* <span>{cep.bairro}</span> */}
            <span>{cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
          </main>
        )}

      </div>
    );
  }
}

export default App;