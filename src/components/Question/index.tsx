import { Container, UserInfo } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }

}

export function Question({content, author}: QuestionProps) {
  return (
    <Container>
      <p>{content}</p>

      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>

        <div>

        </div>
      </footer>
    </Container>
  );
}