import styled from 'styled-components';

export const Container = styled.div`
    
 .form-cadastro {
  flex-grow: 2;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  z-index: 1;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 12px 40px;
}
.form-cadastro_input {
  margin-top: 8px;
  padding: 4px;
  border: black;
  border-radius: 10px;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
}

.form-cadastro_submit {
  align-self: flex-end;
  width: 100%;
  background-color: #D5E8C1;
  color: white;
  font-weight: bolder;
  font-size: 15px;
}
.form-cadastro_submit:hover {
  background-color:#5F927E;
  transition: 0.5s;
}
#corpo-lembrete {
  padding: 30px 5px;
}
#titulo-lembrete{
  padding: 10px 5px;
}


`;
