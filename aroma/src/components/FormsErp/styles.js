import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
  display: flex;
  justify-items: center;
  flex-direction:column;
  h2{
    text-align: center;
    padding: 5px;
    border-bottom: 1.5px solid #DFCEAD;
  }
  form{
    display: flex;
    margin: 30px;
    flex-direction: column;
    align-items: flex-start;
  }
  .form-cliente, textarea {
    width: 50vh;
    border-radius: 10px;
    border: none;
    margin-bottom: 10px;
    padding: 10px 5px;
    font-size: 15px;
  }
  .form-preco{
    width: 50vh;
    border-radius: 10px;
    border: none;
    margin-bottom: 10px;
    padding: 15px 3px;
    font-size: 15px;
  }
  #quantidade-produto {
    border: none;
    margin: 10px 5px;
    width: 20vh;
    padding: 10px;
    border-radius: 7px;
    font-size: 15px;
  }
  .botao-finalizar {
    align-self: flex-start;
    width: 15vh;
    background-color: #D5E8C1;
    color: white;
    font-weight: bolder;
    font-size: 15px;
    padding: 10px 5px;
    border: none;
    border-radius: 10px;
  }
  .botao-finalizar:hover {
  background-color:#5F927E;
  transition: 0.5s;
}
`;
