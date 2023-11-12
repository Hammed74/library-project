const theLibrary = [];
const bookName = document.querySelector(".book-entry");
const bookAuthor = document.querySelector(".author");
const bookPages = document.querySelector(".pages");
const submit = document.querySelector(".submit");
const list = document.querySelector(".book-list");
const newBookButton = document.querySelector(".new-book");
const form = document.querySelector(".form");

newBookButton.addEventListener("click", () => {});

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {
  const readStatus = document.querySelector(
    'input[name="read-status"]:checked'
  );
  const bookTitle = bookName.value;
  const authorName = bookAuthor.value;
  const numPages = bookPages.value;
  const bookRead = readStatus.value;
  const myBook = new Book(bookTitle, authorName, numPages, bookRead);
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
  displayBook();
});

function displayBook() {
  const bookItemContainer = document.createElement("div");
  bookItemContainer.classList.add("book-item-container");
  const bookItem = document.createElement("li");
  const removeButton = document.createElement("div");
  const statusButton = document.createElement("div");
  bookItem.textContent = theLibrary[theLibrary.length - 1].title;
  const dataAttribute = theLibrary.length - 1;
  bookItem.setAttribute("data", `${dataAttribute}`);
  removeButton.setAttribute("data", `${dataAttribute}`);
  removeButton.classList.add("remove");
  statusButton.classList.add("read-toggle");
  removeButton.textContent = "DELETE";
  if (theLibrary[dataAttribute].read == "yes") {
    statusButton.textContent = "READ";
    statusButton.style.backgroundColor = "";
  } else {
    statusButton.textContent = "NOT YET READ";
    statusButton.style.backgroundColor = "#ff9900";
  }
  const authorContainer = document.createElement("div");
  const pagesContainer = document.createElement("div");
  const authorOfBook = document.createElement("p");
  authorOfBook.textContent = theLibrary[theLibrary.length - 1].author;
  const numOfPages = document.createElement("p");
  numOfPages.textContent =
    theLibrary[theLibrary.length - 1].pages + " " + "Pages";
  authorContainer.classList.add("author-text-container");
  pagesContainer.classList.add("pages-text-container");
  authorContainer.appendChild(authorOfBook);
  pagesContainer.appendChild(numOfPages);
  list.appendChild(bookItemContainer);
  bookItemContainer.appendChild(bookItem);
  bookItemContainer.appendChild(authorContainer);
  bookItemContainer.appendChild(pagesContainer);
  bookItemContainer.appendChild(removeButton);
  bookItemContainer.appendChild(statusButton);

  removeButton.addEventListener("click", () => {
    const elementToRemove = document.querySelector(`[data="${dataAttribute}"]`);
    if (elementToRemove) elementToRemove.parentElement.remove();
    delete theLibrary[dataAttribute];
    console.log(theLibrary);
  });

  statusButton.addEventListener("click", () => {
    if (theLibrary[dataAttribute].read == "yes") {
      theLibrary[dataAttribute].read = "no";
      statusButton.textContent = " NOT YET READ";
      statusButton.style.backgroundColor = "#ff9900";
    } else if (theLibrary[dataAttribute].read == "no") {
      theLibrary[dataAttribute].read = "yes";
      statusButton.textContent = "READ";
      statusButton.style.backgroundColor = "";
    }
    console.log(theLibrary);
  });
}

function defaultBooks(defaultTitle, defaultAuthor, defaultPages, defaultReadStatus) {
  const myBook = new Book(defaultTitle, defaultAuthor, defaultPages, defaultReadStatus);
  theLibrary.push(myBook);
  console.log(theLibrary);
  displayBook();
}

defaultBooks("Atomic Habits", "James Clear", 320, "yes");
defaultBooks("The Great Gatsby", "F.Scott Fitzgerald", 208, "no");

console.log(window.innerWidth);
