import React, { Component } from 'react';
import { ThemeConsumer } from 'styled-components';
import { Container } from './styles';

class Forms extends Component {
  constructor(props) {
    super(props)
    this.titulo = "";
    this.texto= "";
    }
  
  _handlerTitulo(event) { 
    event.stopPropagation();
    this.titulo = event.target.value;
  }
  _handlerTexto(event) {
    event.stopPropagation();
    this.texto =  event.target.value;
  }
  _criarNota (event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }
 
  render() {
    return (
    
      <Container>
        
          <form className="form-cadastro " 
            onSubmit={this._criarNota.bind(this)} 
          >
              <label>Lembretes e Notas</label> 
              <input 
                type="text" 
                placeholder="Título" 
                className="form-cadastro_input"
                onChange={this._handlerTitulo.bind(this)}
              />
              <textarea 
                className="form-cadastro_input" 
                placeholder="Descreva o lembrete"
                onChange={this._handlerTexto.bind(this)}
              />  
              <button className="form-cadastro_input form-cadastro_submit"> 
                Adicionar      
              </button>
          </form>
      </Container>
      
    );
  }
}

export default Forms;
