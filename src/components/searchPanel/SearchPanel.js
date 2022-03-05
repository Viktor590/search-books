import React, { useState } from 'react';
import BooksService from './../../services/BooksServices';
import './searchPanel.scss';

const SearchPanel = () => {
  const { getBook } = BooksService();
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addData = (data) => {
    setData(data);
  }

  const searchBooks = (e) => {
    // console.log(inputValue);
    getBook(inputValue)
      .then(addData);

    setInputValue('')
    e.preventDefault()
  }
  console.log(data);

  return (
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
  )

}

export default SearchPanel;