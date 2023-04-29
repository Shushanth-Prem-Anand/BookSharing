// Selecting elements from the HTML DOM
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const bookList = document.querySelector("#book-list");

// Adding event listener to the search button
searchBtn.addEventListener("click", searchBooks);

// Function to search for books
function searchBooks() {
  // Get the value of the search input
  const searchValue = searchInput.value;

  // Clear the book list
  bookList.innerHTML = "";

  // Make an API call to search for books
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      // Loop through the results and create a book card for each book
      data.items.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const bookImage = document.createElement("img");
        bookImage.src = book.volumeInfo.imageLinks.thumbnail;
        bookImage.alt = book.volumeInfo.title;

        const bookTitle = document.createElement("h2");
        bookTitle.textContent = book.volumeInfo.title;

        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = book.volumeInfo.authors.join(", ");

        const bookPrice = document.createElement("p");
        bookPrice.textContent = `$${book.saleInfo.retailPrice.amount}`;

        bookCard.appendChild(bookImage);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPrice);

        bookList.appendChild(bookCard);
      });
    })
    .catch((error) => console.log(error));
}
