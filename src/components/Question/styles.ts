import styled from 'styled-components';

export const Container = styled.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0, 0.04);

  padding: 2.4rem;

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