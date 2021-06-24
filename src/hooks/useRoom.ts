import { useEffect, useState } from "react";
import { useAuth } from "../contexts/auth";

import { database } from "../services/firebase";

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHightlighted: boolean;
  likes: Record<string, {
    authorId: string;
  }>;
}>


type QuestionType = {
  id: string
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHightlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
}

export function useRoom(roomId: string){
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  
  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHightlighted: value.isHightlighted,
          isAnswered: value.isAnswered,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([ key, like]) => user?.id === like.authorId )?.[0]
        }
      });

      setQuestions(parsedQuestions)
      setTitle(databaseRoom.title)
    })

    return () => {
      roomRef.off('value');
    }

  },[roomId, user?.id])
  

  return { questions, title }
}