export function setBooks(dispatch, books) {
  dispatch({ type: 'books/booksSet', payload: books });
}
