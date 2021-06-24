import { useState } from 'react';
import { useParams } from 'react-router-dom'

import { database } from '../../services/firebase';

import { useAuth } from '../../contexts/auth';
import { useRoom } from '../../hooks/useRoom';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import logoImg from '../../assets/images/logo.svg'

import { Container, Header, Title, Form, QuestionList } from './styles';
import { Question } from '../../components/Question';

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { user } = useAuth();
  const { questions, title } = useRoom(roomId);

  const [newQuestion, setNewQuestion] = useState('');


  async function handleSendQuestion(event: any){
    event.preventDefault();

    if(newQuestion.trim() === ''){
      return;
    }

    if(!user){
      throw new Error("User not authenticated");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHightlighted: false,
      isAnswered: false
    }

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('')
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
            <Question key={question.id} {...question} />
          ))}
        </QuestionList>
      </main>
    </Container>
  );
}