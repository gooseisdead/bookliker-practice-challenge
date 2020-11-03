// document.addEventListener("DOMContentLoaded", function() {});

const bookList = document.querySelector("#list-panel")
const bookShelf = document.querySelector("#show-panel")

function renderBook(book) {
    bookList.innerHTML += `
    <li class="deets">"${book.title}"</li>`
    bookShelf.innerHTML += `
        <p class="bd">"${book.subtitle}"</p>
        <p class="bd">"${book.description}"</p>
        <p class="bd">"${book.author}"</p>
        <img src="${book.img_url}">
      `
}

function renderAllBooks(bookData) {
    bookData.forEach(renderBook)
}

function initialize () {
    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(bookData => {
        renderAllBooks(bookData)
    })
}

initialize() 