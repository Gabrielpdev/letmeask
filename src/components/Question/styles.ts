import styled, { css } from 'styled-components';

interface ContainerProps {
  isAnswered: boolean;
  isHightlighted: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0, 0.04);

  padding: 2.4rem;

  ${({ isHightlighted }) => isHightlighted && (
    css`
      background: #f4f0ff;
      border: 1px solid #835AFD;

      ${UserInfo}{
        > span {
          color: #29292e;
        }
      }
    `
  )}

  ${({ isAnswered }) => isAnswered && (
    css`
      background: #dbdddd;
      border:0;
    `
  )}

  & + & {
    margin-top: 0.8rem;
  }

  p{
    color: #29292e;
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