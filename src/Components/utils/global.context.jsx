import { createContext, useContext, useEffect, useReducer } from "react";

export const initialState = { theme: "", data: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTIST":
      return { ...state, data: action.payload };
    default:
      throw new Error("Acción no existente");
  }
};

const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch({ type: "GET_DENTIST", payload: data });
    }
    fetchData();
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobalStates = () => useContext(ContextGlobal);
