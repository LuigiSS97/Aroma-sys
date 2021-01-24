import React from 'react';

import { Container, Label } from './styles';

function Card() {
  return( 
    <Container>
       <header>
           <Label color="#87D1B4"/>
           <p>Título</p>
       </header>
       <p>Corpo do lembrete</p>
    </Container>
)
}

export default Card;
