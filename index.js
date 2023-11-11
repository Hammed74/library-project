const theLibrary = []
const bookEntry = document.querySelector(".book-entry")
const submit = document.querySelector(".submit")
const list = document.querySelector(".book-list")
const newBookButton = document.querySelector(".new-book")
const form = document.querySelector(".form")
const removeButton = document.querySelector(".remove")

let formShowing = false
newBookButton.addEventListener("click", () => {
    form.style.display = "block"
    formShowing = true
})

submit.addEventListener("click", (event) => {
    event.preventDefault()
    let bookName = bookEntry.value
    addBookToLibrary(bookName);
    const bookItemContainer = document.createElement("div")
    bookItemContainer.classList.add("book-item-container")
    const bookItem = document.createElement("li")
    const removeButton = document.createElement("div")
    removeButton.classList.add("remove")
    removeButton.textContent = "x"
    bookItem.textContent = theLibrary[theLibrary.length-1]
    list.appendChild(bookItemContainer)
    bookItemContainer.appendChild(bookItem)
    bookItemContainer.appendChild(removeButton)
    form.style.display = "";
    bookEntry.value = ""
    console.log(theLibrary);
})

removeButton.addEventListener("click", () => {
    bookItemContainer.remove()
})
function MakeBook(){

}

function addBookToLibrary(book){
theLibrary.push(book);
}
