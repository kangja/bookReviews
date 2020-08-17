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
          <div className="bookdetails-container">
            <img src={book.image} className="bookdetails-image" />
            <div className="details-container">
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Summary: {book.summary}</p>
            <p>Page Number: {book.page_number}</p>
            <p>Genre: {book.genre}</p>
            <p>Price: {book.price}</p>
            </div>
          </div>
        )}
        {/* <hr></hr> */}
      </>
    )
  }
}