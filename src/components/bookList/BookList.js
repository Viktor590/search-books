import React from 'react';
import './bookList.scss';

const BookList = (props) => {

  const { totalItems, items } = props.book;

  const View = ({ book }) => {
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

                if (amount !== undefined &&
                  currentPrice !== undefined) {
                  return (
                    <li
                      key={index}
                      className="bookItem">
                      <img
                        className="bookItem__img"
                        src={el.volumeInfo.imageLinks.thumbnail}
                        alt={el.volumeInfo.title} />
                      <div className="bookItem__content">
                        <h2 className="bookItem__content-title">
                          {el.volumeInfo.title}
                        </h2>
                        <p className="bookItem__content-price">
                          {amount.toFixed()} {currentPrice}
                        </p>
                      </div>
                    </li>
                  )
                }
                return null
              })
            }
          </ul >
        </>
      )
    }

    return null;
  }
  return (
    <View book={items} />
  )
}

export default BookList;