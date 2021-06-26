import styled, {css} from 'styled-components';

interface ContainerProps {
  absolute?: boolean;
  breakOn600?: boolean;
}

export const Container = styled.button<ContainerProps>`
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;


  background: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.purple};
  border: 1px solid ${({ theme }) => theme.colors.purple};

  transition: filter 0.2s ease;

  padding: .5rem;

  max-width: 4rem;
  max-height: 4rem;

  svg {
    width: 3rem;
    height: 3rem;

    stroke: #fff;
  }

  &:hover{
    filter: brightness(0.9);
  }

  ${({ absolute }) => absolute ? (
    css`
      position: absolute;

      top: 1rem;
      right: 1rem;
    `
  ) : (
    css`
      @media(max-width: 500px){
        position: absolute;

        top: 2.5rem;
        left: 3rem;
    }
    `
  )}

  ${({ breakOn600 }) => breakOn600 ? (
    css`
      @media(max-width: 600px){
          position: absolute;

          top: 2.5rem;
          left: 3rem;
      }
    `
  ) : (
    css`
      @media(max-width: 500px){
        position: absolute;

        top: 2.5rem;
        left: 3rem;
    }
    `
  )}
`;