import { useContext, useEffect } from 'react';
import { dataUrl } from './config';
import { setBooks } from './actions';

export function useLoadBooks(context) {
  const { dispatch } = useContext(context);

  useEffect(() => {
    fetch(dataUrl)
      .then(response => response.json())
      .then(({ books }) => {
        setBooks(dispatch, books);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
