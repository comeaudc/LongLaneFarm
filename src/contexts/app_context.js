import { useState, createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [veggies, setVeggies] = useState([]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,

        veggies,
        setVeggies,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
