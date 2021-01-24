import styled from 'styled-components';

export const Container = styled.div`
   padding:0 15px;
  height: 100%;
  flex: 50 0 320px;

  ul {
    list-style-type: none;
    display: grid;
    flex-grow: 3;
    grid-template-columns: auto auto auto auto;
    padding-left: 24px;
    padding-top: 24px;
    grid-gap: .2rem;
  }
  h2 {
    border-bottom: 1.5px solid #DFCEAD;
  }
`;
