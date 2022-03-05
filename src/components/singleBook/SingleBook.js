import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BooksServices from '../../services/BooksServices';
import Spinner from './../spinner/Spinner';
import './singleBook.scss';


const SingleBook = () => {

  let { bookId } = useParams();
  const [books, setBooks] = useState(null)
  const { getBookId } = BooksServices()

  useEffect(() => {

    getBookId(bookId)
      .then(res => setBooks(res))
  }, [bookId]);

  const View = ({ book }) => {
    return (
      <div className='singleBook'>
        <Link to="/" className='singleBook__link'>Вернуться назад</Link>
        <div className="singleBook__content-top">
          <img className='singleBook__content-img' src={book.volumeInfo.imageLinks.small} alt={book.volumeInfo.title} />
          <div className="singleBook__content-dscr">
            <h2 className="singleBook__dscr-title">
              {book.volumeInfo.title}
            </h2>
            <p className="singleBook__dscr-author">
              {book.volumeInfo.authors}
            </p>
            <p className="singleBook__dscr-publisher">
              {book.volumeInfo.publisher}
            </p>
          </div>
        </div>
        <a href={book.volumeInfo.previewLink} className='singleBook__link-more'>
          Читать
        </a>
        <h4 className='singleBook__bottom-dscr' >
          {book.volumeInfo.description}
        </h4>

      </div>
    )
  }

  const ren = books !== null ? <View book={books} /> : <Spinner />

  return (
    { ...ren }
  )
}

export default SingleBook;