import { useState, createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [veggies, setVeggies] = useState([]);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState({});

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,

        veggies,
        setVeggies,

        error,
        setError,

        selected,
        setSelected
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
