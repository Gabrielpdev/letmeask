import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 6.4rem;
  height: 5rem;
  border-radius: 8px;
  font-weight: 500;
  background: #835AFD;
  color: #fff;
  
  padding: 0 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;

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
`;