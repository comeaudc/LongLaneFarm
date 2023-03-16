import { useState, createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [veggies, setVeggies] = useState([]);
  const [admin, setAdmin] = useState(false);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,

        veggies,
        setVeggies,

        admin,
        setAdmin,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
