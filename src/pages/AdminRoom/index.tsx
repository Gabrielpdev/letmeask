import { useParams } from 'react-router-dom'

// import { useAuth } from '../../contexts/auth';
import { useRoom } from '../../hooks/useRoom';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import logoImg from '../../assets/images/logo.svg'

import { Container, Header, Title, QuestionList } from './styles';
import { Question } from '../../components/Question';

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  // const { user } = useAuth();
  const { questions, title } = useRoom(roomId);
  
  return (
    <Container>
      <Header>
        <div>
          <img src={logoImg} alt="" />
          <div>
            <RoomCode code={roomId}/>
            <Button isOutlined >Encerrar sala</Button>
          </div>
        </div>
      </Header>

      <main>
        <Title>
          <h1>{`Sala ${title}`}</h1>
          {questions.length > 0 && <span>{`${questions.length} perguntas`}</span>}
        </Title>
        
        <QuestionList>
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </QuestionList>
      </main>
    </Container>
  );
}