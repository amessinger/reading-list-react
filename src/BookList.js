import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  IconButton,
  GridList,
  GridListTile,
  GridListTileBar,
} from '@material-ui/core/';
import InfoIcon from '@material-ui/icons/Info';
import { StoreContext } from './store';

export default function BookList() {
  const { state } = useContext(StoreContext);
  const iconButtonStyle = {
    color: 'rgba(255, 255, 255, 0.54)'
  };

  if (!state.books?.length) {
    return (
      <div data-test="BookList">
        Loading Books
      </div>
    );
  }

  return (
    <div data-test="BookList">
      <GridList>
        {state.books.map(book => (
          <GridListTile key={book.id} component={Link} to={`/books/${book.id}`}>
            <img src={book.cover} alt={`${book.title} cover`} />
            <GridListTileBar
              title={book.title}
              subtitle={<span>by {book.author}</span>}
              actionIcon={
                <IconButton aria-label={`More info about ${book.title}`} style={iconButtonStyle}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
