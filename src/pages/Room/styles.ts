import styled, { css } from 'styled-components';
interface LikeProps {
  $Liked?: boolean;
}

export const Container = styled.div`
  background: ${({theme}) => theme.colors.background };

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

    >div{
      display: flex;
      gap: 0.8rem;
    }
  }

  @media(max-width: 500px){
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

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 1.6rem;
    border-radius: 8px;
    background: ${({theme}) => theme.colors.cardBg };
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 13rem;
    color: ${({theme}) => theme.colors.light };
  }

  >div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin-top: 1.6rem;

    >div {
      display: flex;
      align-items: center;

      img {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
      }

      > span {
        margin-left: .8rem;
        color: ${({theme}) => theme.colors.title };
        font-weight: 500;
        font-size: 1.4rem;
      }
    }

    > span {
      font-size: 1,4rem;
      color: #737380;
      font-weight: 500;

      button {
        background: none;
        border: 0 ;
        color: #835afd;
        text-decoration: underline;
        font-size: 1.4rem;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }

  @media(max-width: 500px){
    >div >div > span {
      font-size: 1.2rem;
    }
  }
`;

export const QuestionList = styled.div`
  margin-top: 6rem;
`;

export const Like = styled.button<LikeProps>`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;

  transition: filter 0.2s ease;

  ${({ $Liked }) => $Liked ? (
    css`
    color: #835afd;

      svg path {
        stroke: #835afd;
      }
    `
  ) : (
    css`
      color: #737380;
  `
  )}

  &:hover{
    filter: brightness(0.7);
  }
`;
