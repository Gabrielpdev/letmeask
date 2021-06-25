import { useHistory } from 'react-router-dom'

import { database } from '../../services/firebase';

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

  async function handleJoinRoom(event: any){
    event.preventDefault();

    const { roomCode : { value: roomCode }} = event.target;

    if(roomCode.trim() === ''){
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()){
      alert("Room does not exists")
      return;
    }
    
    if(roomRef.val().endedAt) {
      alert("Room already closed.")
      return;
    }
    
    history.push(`/rooms/${roomCode}`)
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

          <form onSubmit={handleJoinRoom}>
            <input type="text" name="roomCode" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </MainContent>
      </main>
    </Container>
  );
}