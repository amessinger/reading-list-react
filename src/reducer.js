export default function reducer(state, action) {
  switch (action.type) {
    case 'books/booksSet':
      return {
        ...state,
        books: action.payload
      };
    default:
      throw new Error();
  }
}
