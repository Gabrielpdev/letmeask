import styled from 'styled-components';

export const Container = styled.button`
  height: 4rem;
  border-radius:8px;
  overflow: hidden;

  background: ${({theme}) => theme.colors.background };
  border: 1px solid ${({theme}) => theme.colors.purple };
  cursor: pointer;

  display: flex;

  div {
    background: ${({theme}) => theme.colors.purple };
    padding: 0 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1.6rem 0 1.2rem;
    width: 23rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.title };
  }

  @media(max-width: 445px){
    width: 100%;
  }
`;