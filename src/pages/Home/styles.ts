import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;

    background: ${({ theme }) => theme.colors.purple};
    color: #ffffff;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 12rem 8rem;

    img {
      max-width: 32rem;
    }

    strong {
      font: 700 3.6rem 'Poppins', sans-serif;
      line-height: 4.2rem;
      margin-top: 1.6rem;
    }

    p {
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-top: 1.6rem;
      color: #ffffff;
    }
  }

  main {
    flex: 8;

    padding: 0 3.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(max-width: 861px){
    aside {
      display: none;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;
  max-width: 32rem;

  text-align: center;

  >img {
    align-self: center;
  }

  form {
    input {
      height: 5rem;
      border-radius: 8px;
      padding: 0 1.6rem;
      background: ${({ theme }) => theme.colors.cardBg};
      color: ${({ theme }) => theme.colors.light};
      border: 1px solid #a8a8b3;
    }

    button {
      margin-top: 1.6rem;
      color: #FEFEFE;
    }

    button, input {
      width: 100%;
    }
  }
`;

export const CreateRoom = styled.button`
  margin-top: 6.4rem;
  height: 5rem;
  border-radius: 8px;
  font-weight: 500;
  background: #ea4335;
  color: #fff;
  

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;

  transition: filter 0.2s ease;

  img {
    margin-right: .8rem;
  }

  &:hover{
    filter: brightness(0.9);
  }

  
  @media(max-width: 400px){
    font-size: 1.4rem;
  }
`;

export const Separator = styled.div`
  font-size: 1.4rem;
  color: #a8a8b3;

  margin: 3.2rem 0;
  display: flex;
  align-items: center;

  &::before{
    content: '';
    flex: 1;
    height: .1rem;
    background: #a8a8b3;
    margin-right: 1.6rem;
  }

  &::after{
    content: '';
    flex: 1;
    height: .1rem;
    background: #a8a8b3;
    margin-left: 1.6rem;
  }
`;
