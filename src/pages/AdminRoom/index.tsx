import { useParams } from 'react-router-dom'
import { database } from '../../services/firebase';

// import { useAuth } from '../../contexts/auth';
import { useRoom } from '../../hooks/useRoom';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import logoImg from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'

import { Container, Header, Title, QuestionList, Delete } from './styles';
import { Question } from '../../components/Question';

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  // const { user } = useAuth();
  const { questions, title } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string){
    if(window.confirm("Tem certeza que você deseja remover essa pergunta ?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }
  
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
            <Question key={question.id} {...question} >
              <Delete  type="button" onClick={() => handleDeleteQuestion(question.id)}>
                <img src={deleteImg} alt="removaer pergunta" />
              </Delete>
            </Question>
          ))}
        </QuestionList>
      </main>
    </Container>
  );
}