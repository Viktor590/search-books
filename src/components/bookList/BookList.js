import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BooksServices from '../../services/BooksServices';

import './bookList.scss';

const BookList = (props) => {
  const [bookList, setBookList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [stopLoadMore, setStopLoadMore] = useState('')
  const [loadMore, setLoadMore] = useState('')
  const { totalItems, items } = props.book;
  const { getBook } = BooksServices();

  useEffect(() => {
    setLoadMore(props.correctSearch);
    setBookList(items);

  }, [items]);

  const View = (book) => {
    if (book !== undefined) {
      return (
        <>
          <h3 className='bookList__title'>
            По вашему запросу найдено {totalItems} книг
          </h3>
          <ul className="bookList">
            {
              book.map((el, index) => {
                let amount = el.saleInfo.listPrice &&
                  el.saleInfo.listPrice.amount;
                let currentPrice = el.saleInfo.listPrice &&
                  el.saleInfo.listPrice.currencyCode;
                let img = el.volumeInfo.imageLinks && el.volumeInfo.imageLinks.thumbnail;

                let correctImg = img !== undefined ? img : 'https://серебро.рф/img/placeholder.png';

                let resAmount = amount !== undefined ? amount.toFixed() : 'Цена неизвестна';

                return (
                  <li
                    key={index}
                    className="bookItem">
                    <Link to={`/singleBook/${el.id}`}>
                      <img
                        className="bookItem__img"
                        src={correctImg}
                        alt={el.volumeInfo.title} />
                      <div className="bookItem__content">
                        <h2 className="bookItem__content-title">
                          {el.volumeInfo.title}
                        </h2>
                        <p className="bookItem__content-price">
                          {resAmount}&nbsp;
                          {currentPrice}
                        </p>
                      </div>
                    </Link>
                  </li>
                )
              })
            }
          </ul >
        </>
      )
    }
    return (
      <h2 className='bookList__text'>
        Варианты книг по вашему запросу появятся здесь
      </h2>
    );
  }

  const onBooksList = (newBookList) => {
    setStopLoadMore(newBookList.length < 30 ? 'stop' : null)
    setBookList(bookList => [...bookList, ...newBookList])
  }

  const addItem = (currentIndex) => {
    setStartIndex(currentIndex);

    getBook(loadMore, currentIndex)
      .then(res => onBooksList(res.items))
  }

  return (
    <>
      {View(bookList)}
      <div
        className='btn__block'
        style={totalItems > 30 && stopLoadMore !== 'stop' ?
          { 'display': 'flex' } : { 'display': 'none' }}>
        <button
          className='bookList__btn'
          onClick={() => addItem(startIndex + 30)}>
          Смотреть еще
        </button>
      </div>
    </>
  )
}

export default BookList;