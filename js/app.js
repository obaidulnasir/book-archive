const inputField = document.getElementById("input-field");
const searchButton = document.getElementById("search-button");
const bookContainer = document.getElementById("book-container");
const errorContainer = document.getElementById("error-container");

searchButton.addEventListener("click", function () {
  // book container clear
  document.getElementById("book-container").innerHTML = "";
  const inputValue = inputField.value;
  // error handling
  if (inputValue === "") {
    // const errorContainer = document.getElementById("error-container");
    const p = document.createElement("p");
    p.innerText = "search field cannot be empty";
    errorContainer.appendChild(p);
    return;
  }

  const url = `https://openlibrary.org/search.json?q=${inputValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // error handling
      if (data.numFound === 0) {
        // console.log("not found");
        const p = document.createElement("p");
        p.innerText = "We have no data about this book name";
        errorContainer.appendChild(p);
        
      } 
      else {
        errorContainer.innerHTML = "";
      }
      bookInfo(data.docs);
    });
});

const bookInfo = (bookData) => {
  bookData.forEach((item) => {
    console.log(item);
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.innerHTML = `
    <div class="shadow border rounded text-center p-4 m-2">
      <img src="https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg">
      <h4>${item.title}</h4>
      <h6>Author: ${item.author_name}</h6>
      <h6>Published: ${item.publish_year}</h6>
    </div>
    `;

    bookContainer.appendChild(div);
  });
};

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
