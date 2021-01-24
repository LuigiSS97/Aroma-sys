import React from 'react';
import Card from '../Card'
import { Container } from './styles';

function Board() {
  return(
    <Container>
        <header>
            <h2>Lembretes</h2>
        </header>
        <ul>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ul>
    </Container>

)        
}

export default Board;