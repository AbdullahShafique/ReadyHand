import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(false);
  const [userType, setUserType] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userType,
        setUserType,
        login: () => {
          setUser(true);
        },
        signup: () => {
          setUser(true);
        },
        logout: () => {
          setUser(false);
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
