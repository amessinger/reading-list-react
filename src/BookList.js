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
  const { books: [bookList] } = useContext(StoreContext);
  const iconButtonStyle = {
    color: 'rgba(255, 255, 255, 0.54)'
  };

  if (!bookList?.length) {
    <div data-test="BookList">
      Loading Books
    </div>
  }

  return (
    <div data-test="BookList">
      <GridList>
        {bookList.map(book => (
          <GridListTile key={book.id}>
            <img src={book.cover} alt={`${book.title} cover`} />
            <Link to={`/books/${book.id}`}>{book.title}</Link>
            <GridListTileBar
              title={book.title}
              subtitle={<span>by {book.author}</span>}
              actionIcon={
                <IconButton aria-label={`More info about ${book.title}`} style={iconButtonStyle} component={Link} to={`/books/${book.id}`}>
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
