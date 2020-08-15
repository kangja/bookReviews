import React, {Component} from 'react'
import { readOneBook } from "../services/books"

export default class BookDetails extends Component {
  state = {
    book: null,
  }

  componentDidMount() {
    this.fetchBook();
  }

  fetchBook = async () => {
    const book = await readOneBook(this.props.id);
    this.setState({ book });
  } 

  render() {
    const { book } = this.state;

    return (
      <>
        {book && (
          <>
            <img src={book.image} />
            <h3>Title: {book.title}</h3>
            <p>Author: {book.author}</p>
            <p>{book.summary}</p>
            <p>{book.page_number}</p>
            <p>{book.genre}</p>
            <p>{book.price}</p>
          </>
        )}
      </>
    )
  }
}