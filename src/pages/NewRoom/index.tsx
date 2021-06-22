import { Link } from 'react-router-dom'

import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/auth';

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'

import { Container, MainContent } from './styles';

export function NewRoom() {
  // const { user } = useAuth();

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
          <h2>Criar um nova sala</h2>

          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>

          <p>Quer entrar em uma sala já existente? <Link to="/">clique aqui</Link></p>
        </MainContent>
      </main>
    </Container>
  );
}