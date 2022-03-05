import React from 'react';
import { Link } from 'react-router-dom';

import './error.scss';
const Error = () => {
  return (
    <div className='error'>
      <h2 className='error__title'>
        404
      </h2>
      <h3 className='error__dscr'>
        Извините, страница не найдена
      </h3>
      <Link className='error__link' to="/">На главную</Link>
    </div>
  )
}
export default Error;