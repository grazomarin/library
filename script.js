const addBook = document.querySelector('.addBook')
const library = document.querySelector('.books') 

let myLibrary = []

addBook.addEventListener('click', () => {
    let name = prompt('name?', '')
    let author = prompt('author?', '')
    let book = new Book(name, author)
    myLibrary.push(book)
    addBookToLibrary(book.name, book.author)
}) 

function Book(name, author) {
    this.name = name;
    this.author = author;
}

function addBookToLibrary (name, author) {
    let containerDiv = generateBookTemplate();
    const bookName = containerDiv.querySelector(':nth-child(1)')
    const bookAuthor = containerDiv.querySelector(':nth-child(2)')
    bookName.textContent = `Book Name: ${name}`
    bookAuthor.textContent = `Book Name: ${author}`
}

function generateBookTemplate() {
    let containerDiv = document.createElement('div');
    library.appendChild(containerDiv);
    containerDiv.classList.add('book');

    let name = document.createElement('div')
    containerDiv.appendChild(name)

    let author = document.createElement('div')
    containerDiv.appendChild(author)

    return containerDiv;
}

/* when pressing add book we want to ask user for name and author then that 
name and authour are going to be added to our book library from which the div
is going to be generated with the book contents*/