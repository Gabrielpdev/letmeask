import styled, { css } from 'styled-components';
interface LikeProps {
  $Liked?: boolean;
}

export const Container = styled.div`
  main{
    max-width: 80rem;
    margin: 0 auto;
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

    >img {
      max-height: 4.5rem;
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
    color: #29292e;
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
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 1.6rem;
    border-radius: 8px;
    background: #fefefe;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 13rem;
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
        color: #29292e;
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
