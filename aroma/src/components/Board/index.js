import React, { Component } from "react";
import Card from '../Card'
import { Container } from './styles';

class Board extends Component {
    
    render(){
        return(
            <Container>
                <header>
                    <h2>Lembretes</h2>
                </header>
                <ul className="lista-notas">
                    {this.props.notas.map((nota,index) => {
                        return (
                            <li key={index}>
                                <Card titulo={nota.titulo} texto={nota.texto}/>
                        
                            </li>
                        );
                    })}
                </ul>
            </Container>
  
        )   
    }      
}

export default Board;