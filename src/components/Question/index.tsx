import { ReactNode } from 'react';
import { Container, UserInfo } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHightlighted?: boolean;
}

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHightlighted = false
}: QuestionProps) {
  return (
    <Container isAnswered={isAnswered} isHightlighted={isHightlighted}>
      <p>{content}</p>

      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>

        <div>
          {children}
        </div>
      </footer>
    </Container>
  );
}