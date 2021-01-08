import { createContext, useState } from 'react';

export const StoreContext = createContext(null);

export default function Store({ children }) {

  const [books, setBooks] = useState([]);

  const store = {
    books: [books, setBooks]
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
