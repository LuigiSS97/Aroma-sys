import React, { Component } from "react";
import { Container, Label } from './styles';

class Card extends Component {
  
  render(){
    return( 
      <Container>
        <section>
          <header>
              <Label color="#87D1B4"/>
              <h3>{this.props.titulo}</h3>
          </header>
          <p>{this.props.texto}</p>
        </section>
      </Container>
    )
  }
}

export default Card;
