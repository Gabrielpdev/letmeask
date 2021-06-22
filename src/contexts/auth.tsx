import React, {
  useContext, createContext, useState, useEffect
} from 'react';
import { firebase, auth } from '../services/firebase';

interface UserProps {
  id: string,
  name: string,
  avatar: string
}

interface AtuhContextProps {
  signInWithGoogle: () => Promise<void>;
  user: UserProps | undefined;
}

const AuthContext = createContext({} as AtuhContextProps);

export const AuthProvider: React.FC = ({ children }) => {

  const [ user, setUser ] = useState<UserProps | undefined>(undefined);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        const { displayName, photoURL, uid } = user;

        if(!displayName || !photoURL){
          throw new Error('Missing information from Google Account.')
        }
      
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])


  async function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    
    const result = await auth.signInWithPopup(provider)

    if(result.user){
      const { displayName, photoURL, uid } = result.user;

      if(!displayName || !photoURL){
        throw new Error('Missing information from Google Account.')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return (
    <AuthContext.Provider value={{ signInWithGoogle, user }} >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AtuhContextProps {
  const context = useContext(AuthContext);

  return context;
}