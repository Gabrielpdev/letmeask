import { useEffect, useState } from "react";

import { database } from "../services/firebase";

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHightlighted: boolean;
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
}

export function useRoom(roomId: string){
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
        }
      });

      setQuestions(parsedQuestions)
      setTitle(databaseRoom.title)
    })
  },[roomId])
  

  return { questions, title }
}