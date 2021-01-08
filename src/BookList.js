import { useContext } from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { StoreContext } from './store';
import BookDetail from './BookDetail';

export default function BookList() {
  const { books: [bookList] } = useContext(StoreContext);
  const currentRoute = useRouteMatch();

  if (!bookList?.length) {
    <div data-test="BookList">
      Loading Books
    </div>
  }

  return (
    <div data-test="BookList">
      {bookList.map(book => <Link to={`${currentRoute.url}/${book.id}`} key={book.id}>{book.title}</Link>)}
      <Switch>
        <Route path={`${currentRoute.path}/:bookId`}>
          <BookDetail />
        </Route>
        <Route path={currentRoute.path}>
          <p>Please select a book</p>
        </Route>
      </Switch>
    </div>
  );
}
