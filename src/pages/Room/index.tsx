import { useState } from 'react';
import { useParams } from 'react-router-dom'

import { database } from '../../services/firebase';
// import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/auth';

// import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import logoImg from '../../assets/images/logo.svg'

import { Container, Header, Title, Form } from './styles';

type RoomParams = {
  id: string
}

export function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;

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
          <RoomCode code={roomId}/>
        </div>
      </Header>

      <main>
        <Title>
          <h1>Sala react</h1>
          <span>4 perguntas</span>
        </Title>

        <Form onSubmit={handleSendQuestion}>
          <textarea onChange={e => setNewQuestion(e.target.value)} value={newQuestion} placeholder="O que você quer perguntar ?" />
          
          <div>
          { user ? (
            <div>
              <img src={user.avatar} alt={user.name} />
              <span>{user.name}</span>
            </div>
            ) : (
            <span>Para enviar uma pergunta, <button>faça seu login</button></span>
          )}
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </Form>
      </main>
    </Container>
  );
}