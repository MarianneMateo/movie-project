import React, { createContext, useState } from 'react';

const UserContext = createContext();

const initialUser = {
	id: 1,
	name: 'Marianne',
	favoriteMovies: [1, 2, 3],
};

const UserProvider = ({children}) => {

  const [user, setUser] = useState(initialUser);

  const data = {user, login, logout}

  const login = () => {
    setUser(initialUser);
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider }
export default UserContext;