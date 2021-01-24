import React, { Component } from 'react';
import { ThemeConsumer } from 'styled-components';
import { Container } from './styles';

class Forms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titulo: '',
      lembrete: ''
    }
  }
  handlerTitulo = event => {
    this.setState({
      titulo: event.target.value
    })
  }
  handlerLembrete = event => {
    this.setState({
      lembrete: event.target.value
    })
  }
  handlerSubmit = event => {
    alert(`${this.state.titulo} ${this.state.lembrete}`)
  }
  render(){
    return (
    
      <Container>
          <form className="form-cadastro " >
              <label>Lembretes e Afazeres</label>
              <input 
              type="text" 
              placeholder="Título" 
              className="form-cadastro_input"
              value={this.state.titulo}
              onChange={this.handlerTitulo}
              />
              <textarea 
              className="form-cadastro_input" 
              placeholder="Descreva o lembrete"
              value={this.state.lembrete}
              onChange={this.handlerLembrete}
              />  
              <button 
              onClick={this.handlerSubmit}
              className="form-cadastro_input form-cadastro_submit" 
              type="submit">Adicionar 
                           
              </button>
          </form>
      </Container>
      
    )
  }
}

export default Forms;
