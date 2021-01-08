import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import { StoreContext } from './store';
import { useLoadDataType } from './api';
import BookList from './BookList';

function App() {
  const currentRoute = useRouteMatch();
  useLoadDataType('books', StoreContext);

  return (
    <div className="App">
      <Switch>
        <Route path='/books'>
          <BookList />
        </Route>
        <Route path={currentRoute.path}>
          <Link to="/books">Book List</Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
