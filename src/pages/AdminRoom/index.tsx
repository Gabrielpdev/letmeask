import { useHistory, useParams } from 'react-router-dom'
import { database } from '../../services/firebase';

// import { useAuth } from '../../contexts/auth';
import { useRoom } from '../../hooks/useRoom';
import { useTheme } from '../../contexts/theme';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import logoImg from '../../assets/images/logo.svg'
import logoDrk from '../../assets/images/logo-drk.svg'
import deleteImg from '../../assets/images/delete.svg'
import checkImg from '../../assets/images/check.svg'
import answerImg from '../../assets/images/answer.svg'

import { Container, Header, Title, QuestionList, IconButton } from './styles';
import { Question } from '../../components/Question';
import { ThemeButton } from '../../components/ThemeButton';
import { LogoutButton } from '../../components/LogoutButton ';

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const { theme } = useTheme();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  // const { user } = useAuth();
  const { questions, title } = useRoom(roomId);

  async function handleEndRoom(){
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })

    history.push('/')
  }

  async function handleCheckQuestionAsAnswered(questionId: string){
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHighlightQuestion(questionId: string){
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHightlighted: true
    })
  }

  async function handleDeleteQuestion(questionId: string){
    if(window.confirm("Tem certeza que você deseja remover essa pergunta ?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }
  
  return (
    <Container>
      <Header>
        <div>
          {theme.title === 'dark' ? (
            <img src={logoDrk} alt="Let-me-ask" />
          ) : (
            <img src={logoImg} alt="Let-me-ask" />
          )}
          <div>
            <RoomCode code={roomId}/>
            <Button 
              isOutlined 
              maxWidthOn445 
              onClick={handleEndRoom}
            >
              Encerrar sala
            </Button>
            <ThemeButton breakOn600 />
            <LogoutButton breakOn600 />
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
              {!question.isAnswered && (
                <>
                  <IconButton  type="button" onClick={() => handleCheckQuestionAsAnswered(question.id)}>
                    <img src={answerImg} alt="marcar como lida" />
                  </IconButton>
                  <IconButton  type="button" onClick={() => handleHighlightQuestion(question.id)}>
                    <img src={checkImg} alt="destacar pergunta" />
                  </IconButton>
                  <IconButton  type="button" onClick={() => handleDeleteQuestion(question.id)}>
                    <img src={deleteImg} alt="remover pergunta" />
                  </IconButton>
                </>
              )}
            </Question>
          ))}
        </QuestionList>
      </main>
    </Container>
  );
}