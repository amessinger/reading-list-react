import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import { Button, Grid } from '@material-ui/core/';
import { github } from './config';
import { StoreContext } from './store';
import { useLoadBooks } from './api';
import BookList from './BookList';
import BookDetail from './BookDetail';
import './App.css';

function App() {
  const currentRoute = useRouteMatch();
  const buttonLinkStyle = {
    textTransform: 'none'
  };
  useLoadBooks(StoreContext);

  return (
    <div className="App">
      <Switch>
        <Route path={'/books/:bookId'}>
          <BookDetail />
        </Route>
        <Route path="/books">
          <BookList />
        </Route>
        <Route path={currentRoute.path}>
          <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >
            <Grid item>
              <Button color="primary" variant="outlined" size="large" component={Link} to="/books">Book List</Button>
            </Grid>
            <Grid item>
              <Button color="primary" style={buttonLinkStyle} href={`https://github.com/${github.userName}/${github.repositoryName}`}>by @{github.userName}</Button>
            </Grid>
          </Grid>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
