import GlobalStyle from "./styles/global"
import Header from "./components/Header"
import Forms from "./components/Forms"
import Board from "./components/Board"
import "./assest/App.css";


function App() {
  
    return (
    <>
      <Header/>
      <div className="quadro-lembretes">
        <Forms/>
        <Board/>
      </div>
      <GlobalStyle/>
    </>
  );
}


export default App;
