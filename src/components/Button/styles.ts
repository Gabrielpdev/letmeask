import styled, {css} from 'styled-components';

interface ContainerProps {
  $isOutlined?: boolean;
  $maxWidthOn445?: boolean;
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
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.purple};
      border: 1px solid ${({ theme }) => theme.colors.purple};
    `
  ) : (
    css`
      background: ${({ theme }) => theme.colors.purple};
      color: #FEFEFE;
      border: 0;
  `
  )}

  @media(max-width: 500px){
    font-size: 1.4rem;

    padding: 0 1rem;
    height: 4rem;
  }

  @media(max-width: 445px){
    ${({ $maxWidthOn445 }) => $maxWidthOn445 && (
      css`
        width: 100%;
      `
    )}
  }
`;