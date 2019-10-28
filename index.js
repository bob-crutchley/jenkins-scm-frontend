function sortByName(items) {
    items.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
    return items
}

function getBookElement(name, author, image) {
    let newBookElement = document.createElement("DIV")
    newBook.className = "book"
    let imageElement = document.createElement("IMG")
    image.src = image
    newBook.appendChild(imageElement)
    let bookNameElement = document.createElement("H2")
    bookName.innerHTML = name
    newBook.appendChild(bookNameElement)
    let bookAuthorElement = document.createElement("P")
    bookAuthor.innerHTML = "by " + author
    newBook.appendChild(bookAuthorElement)
    return newBookElement
}

axios.get("/api/books").then((response) => {
    let books = sortByName(response.data)
    let bookShelve = document.getElementById("bookshelve")
    books.forEach(book => {
        bookShelve.appendChild(getBookElement(book.Name, book.Author, book.Image))
    });
})
