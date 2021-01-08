import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from './store';

export default function BookDetail() {
  const { books: [bookList] } = useContext(StoreContext);
  const { bookId } = useParams();
  const book = bookList.find(book => book.id === bookId);

  if (!book) {
    return (
      <div data-test="BookDetail">
        Loading Book
      </div>
    );
  }
  return (
    <div data-test="BookDetail">
      {book.description}
    </div>
  );
}
