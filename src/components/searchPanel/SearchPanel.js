import React from 'react';
import './searchPanel.scss';

const SearchPanel = () => {

  return (

    <form className='searchPanel'>
      <input
        className='searchPanel__input'
        type="text"
        placeholder='Введите название книги' />
      <button
        className='searchPanel__btn'>Поиск</button>
    </form>
  )

}

export default SearchPanel;