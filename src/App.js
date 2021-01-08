import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import { Button, Grid } from '@material-ui/core/';
import { StoreContext } from './store';
import { useLoadDataType } from './api';
import BookList from './BookList';

function App() {
  const currentRoute = useRouteMatch();
  useLoadDataType('books', StoreContext);

  return (
    <div className="App">
      <Switch>
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
              <Button color="primary" variant="contained" component={Link} to="/books">Book List</Button>
            </Grid>
          </Grid>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
