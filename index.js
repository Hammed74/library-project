const theLibrary = [];
const bookName = document.querySelector(".book-entry");
const bookAuthor = document.querySelector(".author");
const bookPages = document.querySelector(".pages");
const submit = document.querySelector(".submit");
const list = document.querySelector(".book-list");
const newBookButton = document.querySelector(".new-book");
const form = document.querySelector(".form");
const removeButton = document.querySelector(".remove");

newBookButton.addEventListener("click", () => {
  form.style.display = "block";
});

function Book(title, author, pages) {
  (this.title = title), (this.author = author), (this.pages = pages);
}

function addBookToLibrary() {
  const bookTitle = bookName.value;
  const authorName = bookAuthor.value;
  const numPages = bookPages.value;
  const myBook = new Book(bookTitle, authorName, numPages);
  theLibrary.push(myBook);
  console.log(theLibrary);
}

submit.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary();
  form.style.display = "";
  bookName.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
});
