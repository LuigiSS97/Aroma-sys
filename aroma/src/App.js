import {Component} from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Forms from "./components/Forms";
import Board from "./components/Board";
import "./assest/App.css";
import FormsErp from "./components/FormsErp";


class App extends Component {
  
    constructor(props){
      super(props)
      this.state = {
        notas: []
      }

    }
    criarNota(titulo,texto) {
      const novaNota = {titulo,texto};
      const novoArray = [...this.state.notas, novaNota]
      const novoEstado = {notas:novoArray}
      this.setState(novoEstado)
    }
  render(){  
    return (
    <>
      <Header/>
      <div className="quadro-lembretes">
        <Forms criarNota={this.criarNota.bind(this)}/>
        <Board notas={this.state.notas}/>
      </div>
      <FormsErp/>
      
      <GlobalStyle/>
    </>
   
    );
  }
}


export default App;
