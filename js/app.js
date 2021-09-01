// const inputField = document.getElementById("input-field");
// const inputValue = inputField.value;
// const searchButton = document.getElementById("search-button");

const searchItem = () => {
  const inputField = document.getElementById("input-field");
  const inputValue = inputField.value;
  const url = `http://openlibrary.org/search.json?q=${inputValue}`;
  fetch(url)
  .then(res => res.json())
  .then(data => getBookInfo(data.docs))
};


const getBookInfo = (bookData) => {
    for (const book of bookData){
        console.log(book.title);
    }
}