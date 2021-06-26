import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import { Container } from './styles';

type ThemeButtonProps = {
  breakOn600?: boolean
}

export function LogoutButton ({ breakOn600 }: ThemeButtonProps) {
  const { signOutWithGoogle } = useAuth();
  const history = useHistory();

  function handleLogout(){
    signOutWithGoogle()

    history.push('/');
  }

  return (
    <Container type="button" onClick={handleLogout} breakOn600={breakOn600}>
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
        <path d="M7 12h14l-3 -3m0 6l3 -3" />
      </svg>
    </Container>
  );
}