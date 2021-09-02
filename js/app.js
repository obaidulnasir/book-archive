const inputField = document.getElementById("input-field");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click" , function(){
  const inputValue = inputField.value;
  const url = `http://openlibrary.org/search.json?q=${inputValue}`
  fetch(url)
  .then(res => res.json())
  .then(data => bookInfo(data.docs))
})

const bookInfo = (bookData) => {
  // console.log(bookData)
  bookData.forEach(item => {
    
  });
}

// const searchItem = () => {
//   const inputField = document.getElementById("input-field");
//   const inputValue = inputField.value;
//   const url = `http://openlibrary.org/search.json?q=${inputValue}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => getBookInfo(data.docs));
// };

// const getBookInfo = (bookData) => {
//   for (const book of bookData) {
//     console.log(book.title);
//   }
// };
