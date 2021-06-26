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

    position: relative;
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

  h2 {
    font-size :2.4rem;
    margin: 6.4rem 0 2.4rem;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.light};
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

  p {
    font-size: 1.4rem;
    color: #737380;
    margin-top: 1.6rem;
    
    a{
      color: #e559f9;
    }
  }
`;