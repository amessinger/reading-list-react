export function getBooksBySameAuthor(state, book) {
  return state.books.filter(b => b.id !== book.id && b.author === book.author);
}
