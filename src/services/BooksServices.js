const BooksServices = () => {
  const API_BASE = 'https://www.googleapis.com/books/v1/volumes?q=';
  const API_KEY = 'AIzaSyDRvE_mm-lURNAAWMBP60IK2Rb5QS4NgpY';


  const getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Что-то пошло не так`)
    }

    return await res.json();
  }

  const getBook = async (value) => {
    const res = await getResource(`${API_BASE}${value}&maxResults=30&key=${API_KEY}`)
    return res
  }
  return { getBook }
}
export default BooksServices;