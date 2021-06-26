import { Link, useHistory } from 'react-router-dom'

import { Button } from '../../components/Button';
import { useTheme } from '../../contexts/theme';
import { useAuth } from '../../contexts/auth';
import { ThemeButton } from '../../components/ThemeButton';

import { database } from '../../services/firebase';

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import logoDrk from '../../assets/images/logo-drk.svg'

import { Container, MainContent } from './styles';

export function NewRoom() {
  const { theme } = useTheme();
  const history = useHistory();
  const { user } = useAuth();

  async function handleCreateRoom(event: any){
    event.preventDefault();
    const {
      newRoom: { value: newRoom },
    } = event.target;

    if(newRoom.trim() === ''){
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <Container>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A</strong>
        <p>Tire duvidas de sua audiência em tempo real.</p>
      </aside>
      <main>
        <ThemeButton absolute />
        <MainContent>
        {theme.title === 'dark' ? (
            <img src={logoDrk} alt="Let-me-ask" />
          ) : (
            <img src={logoImg} alt="Let-me-ask" />
          )}
          <h2>Criar um nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input type="text" name="newRoom" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>

          <p>Quer entrar em uma sala já existente? <Link to="/">clique aqui</Link></p>
        </MainContent>
      </main>
    </Container>
  );
}