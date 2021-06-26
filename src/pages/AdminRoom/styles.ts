import styled from 'styled-components';

export const Container = styled.div`
  main{
    max-width: 80rem;
    margin: 0 auto;

    padding: 0 3rem;
  }
`;

export const Header = styled.div`
  padding: 2.4rem;
  border-bottom: 1px solid #e2e2e2;

  >div {
    max-width: 112rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 1rem;

    >img {
      max-height: 4.5rem;
    }

    >div {
      display: flex;
      flex-wrap: wrap;
      gap: 1.6rem;

      > button {
        height: 4rem;
      }
    }
  }

  @media(max-width: 716px){
    >div {
      flex-direction: column;
    }
  }
`;

export const Title = styled.div`
  margin: 3.2rem;
  display: flex;
  align-items:center;

  h1 {
    font-family: 'Popins', sans-serif;
    font-size: 2.4rem;
    color: ${({theme}) => theme.colors.title };
  }

  span {
    margin-left: 1.6rem;
    background: #e559f9;
    border-radius: 9999px;
    padding: .8rem 1.6rem;
    color: #ffffff;
    font-weight: 500;
    font-size: 1.4rem;
  }
  
  @media(max-width: 445px){
    margin: 3.2rem 0;

    h1{
      font-size: 2rem;
    }

    span{
      font-size: 1.2rem;
    }
  }
`;

export const QuestionList = styled.div`
  margin-top: 6rem;
`;

export const IconButton = styled.button`

`;