import { useHistory } from 'react-router-dom'

import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/auth';

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIcon from '../../assets/images/google-icon.svg'

import { Container, MainContent, Separator, CreateRoom } from './styles';

export function Home() {
  const history  = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom(){
    if(!user){
      await signInWithGoogle(); 
    }

    history.push('/rooms/new')
  }

  return (
    <Container>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A</strong>
        <p>Tire duvidas de sua audiência em tempo real.</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="Let-me-ask" />
          <CreateRoom onClick={handleCreateRoom} type="button">
            <img src={googleIcon} alt="Logo do goole" />
            Crie sua sala com o Google
          </CreateRoom>

          <Separator> ou entre com o Google</Separator>

          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </MainContent>
      </main>
    </Container>
  );
}