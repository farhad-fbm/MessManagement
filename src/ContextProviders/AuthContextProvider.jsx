
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '../firebase/firebase.init';
import { createContext, useState } from 'react';

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleAuth = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch()
  }

  const handleLogout = () => {
    signOut(auth)
      .then(setUser())
      .catch()
  }
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user, handleGoogleAuth, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

//____________________________________
import { PropTypes } from 'prop-types';
AuthContextProvider.propTypes = {
  children: PropTypes.element
}