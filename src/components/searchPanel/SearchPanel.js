import React, { useState } from 'react';
import BookList from '../bookList/BookList';
import BooksService from './../../services/BooksServices';
import './searchPanel.scss';

const SearchPanel = () => {
  const { getBook } = BooksService();
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [correctSearch, setCorrectSearch] = useState('')

  const addData = (data) => {
    setData(data);
  }

  const searchBooks = (e) => {
    getBook(inputValue)
      .then(addData);

    setCorrectSearch(inputValue)
    setInputValue('')
    e.preventDefault()
  }

  console.log();

  return (
    <>
      <form className='searchPanel'>
        <input
          className='searchPanel__input'
          type="text"
          placeholder='Введите название книги'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)} />
        <button
          className='searchPanel__btn'
          onClick={searchBooks}>Поиск</button>
      </form>
      <BookList
        book={data}
        correctSearch={correctSearch} />
    </>
  )

}

export default SearchPanel;