import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { StoreContext } from './store';

export default function BookDetail() {
  const { books: [bookList] } = useContext(StoreContext);
  const { bookId } = useParams();
  const book = bookList.find(book => book.id === bookId);
  const cardMediaStyle = {
    height: 0,
    paddingTop: '56.25%',
  };

  if (!book) {
    return (
      <div data-test="BookDetail">
        Loading Book
      </div>
    );
  }
  return (
    <Card data-test="BookDetail">
      <CardHeader
        title={book.title}
        subheader={`by ${book.author}`}
        action={<Button variant="outlined" component={Link} to='/books'>Back</Button>}
      />
      <CardMedia
        style={cardMediaStyle}
        image={book.cover}
        title={`${book.title} cover`}
      />
      <CardContent>{book.description}</CardContent>
      <List dense={true}>
        <ListItem>
          <ListItemText primary="Publisher" secondary={book.publisher} />
        </ListItem>
        <ListItem>
          <ListItemText primary="ISBN" secondary={book.isbn} />
        </ListItem>
      </List>
    </Card>
  );
}
