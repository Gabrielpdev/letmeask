import styled, { css } from 'styled-components';

interface ContainerProps {
  isAnswered: boolean;
  isHightlighted: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${({theme}) => theme.colors.cardBg };
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0, 0.04);

  padding: 2.4rem;

  ${({ isHightlighted }) => isHightlighted && (
    css`
      background: ${({theme}) => theme.colors.cardBgHighlighten };;
      border: 1px solid #835AFD;
      box-shadow: 0px 0px 25px #835AFD;

      ${UserInfo}{
        > span {
          color: ${({theme}) => theme.colors.title };
        }
      }
    `
  )}

  ${({ isAnswered }) => isAnswered && (
    css`
      background: ${({theme}) => theme.colors.cardBg };
      border:0;
      opacity: 0.4;
    `
  )}

  & + & {
    margin-top: 0.8rem;
  }

  p{
    color: ${({theme}) => theme.colors.title };
    margin-bottom: 1rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.4rem;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
  }

  > span {
    margin-left: .8rem;
    color: #737380;
    font-size: 1.4rem;
  }
`;