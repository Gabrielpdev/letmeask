import { useParams } from 'react-router-dom'

// import { Button } from '../../components/Button';
// import { useAuth } from '../../contexts/auth';

// import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import logoImg from '../../assets/images/logo.svg'

import { Container, Header, Title, Form } from './styles';

type RoomParams = {
  id: string
}

export function Room() {
  const params = useParams<RoomParams>();

  return (
    <Container>
      <Header>
        <div>
          <img src={logoImg} alt="" />
          <RoomCode code={params.id}/>
        </div>
      </Header>

      <main>
        <Title>
          <h1>Sala react</h1>
          <span>4 perguntas</span>
        </Title>

        <Form>
          <textarea name="" placeholder="O que você quer perguntar ?" />
          
          <div>
            <span>Para enviar uma pergunta <button>faça seu login</button></span>
            <Button type="submit" >Enviar pergunta</Button>
          </div>
        </Form>
      </main>
    </Container>
  );
}