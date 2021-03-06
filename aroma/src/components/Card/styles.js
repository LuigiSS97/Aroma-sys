import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
    background: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 40px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 40px solid rgba(230, 236, 240,0.7);
    cursor:grab;

    header{
      position: absolute;
      top: -30px;
      left: 15px;
      display: flex;
      justify-content: space-between;
      width: 80px;
    }
    
    p {
        font-weight: 500;
        line-height: 20px;
    }
    img{
      width: 24px;
      height:24px;
      border-radius: 2px;
      margin-top: 5px;
    }
`;
export const Label = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 2px;
    display: inline-block;
    background: #87D1B4;
`;