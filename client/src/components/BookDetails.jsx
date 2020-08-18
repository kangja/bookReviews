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
            <p className="bookdetails-title">Title: <span classname="bookdetails-title">{book.title}</span></p>
              <p className="bookdetails-author-ptag">by <span className="bookdetails-author">{book.author}</span></p>
              
              <p className="bookdetails-summary">Summary:<br></br><br></br><span className="bookdetails-summary2">{book.summary}</span></p>

            <p className="bookdetails-pages">Pages: {book.page_number}</p>
            <p>Genre: <span className="bookdetails-genre">{book.genre}</span></p>
            <p className="bookdetails-price">Price: {book.price}</p>
            </div>
          </div>
        )}
        <hr></hr>
      </>
    )
  }
}