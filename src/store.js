import { createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  books: []
};

export const StoreContext = createContext(null);

export default function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = {
    state,
    dispatch
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
