import styled, {css} from 'styled-components';

interface ContainerProps {
  breakOn600?: boolean;
}

export const Container = styled.button<ContainerProps>`
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;


  background: transparent ;
  border: 0;

  transition: filter 0.2s ease;

  padding: .5rem;

  max-width: 4rem;
  max-height: 4rem;

  svg {
    width: 3rem;
    height: 3rem;

    stroke: ${({ theme }) => theme.colors.purple};;
  }

  &:hover{
    filter: brightness(0.9);
  }

  ${({breakOn600}) => breakOn600 ? (
    css`
      @media(max-width: 600px){
        position: absolute;

        top: 2.5rem;
        right: 3rem;
      }
    `
  ) : (
    css`
      @media(max-width: 500px){
        position: absolute;

        top: 2.5rem;
        right: 3rem;
      }
    `
  )}
`;