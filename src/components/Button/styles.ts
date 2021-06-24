import styled, {css} from 'styled-components';

interface ContainerProps {
  $isOutlined?: boolean;
}

export const Container = styled.button<ContainerProps>`
  height: 5rem;
  border-radius: 8px;
  font-weight: 500;

  
  padding: 0 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: filter 0.2s ease;

  img {
    margin-right: .8rem;
  }

  &:hover{
    filter: brightness(0.9);
  }

  &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ $isOutlined }) => $isOutlined ? (
    css`
      background: #fff;
      color: #835AFD;
      border: 1px solid #835AFD;
    `
  ) : (
    css`
      background: #835AFD;
      color: #fff;
      border: 0;
  `
  )}
`;