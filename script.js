const addBook = document.querySelector('.addBook')
const library = document.querySelector('.books') 

//let myLibrary = []

addBook.addEventListener('click', () => {
    let name = prompt('name?', '')
    let author = prompt('author?', '')
    let pages = validatePages()
    //let book = new Book(name, author, pages)
    //myLibrary.push(book)
    addBookToLibrary(name, author, pages);
}) 

/* function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
} */

function addBookToLibrary (name, author, pages) {
    let containerDiv = generateBookTemplate();
    const bookName = containerDiv.querySelector(':nth-child(1)')
    const bookAuthor = containerDiv.querySelector(':nth-child(2)')
    const bookPages = containerDiv.querySelector(':nth-child(3)')
    const btnRmv = containerDiv.querySelector('.remove')
    const btnStatus = containerDiv.querySelector('.readStatus')

    bookName.textContent = `Book Name: ${name}`
    bookAuthor.textContent = `Author Name: ${author}`
    bookPages.textContent = `Pages: ${pages}`
    btnRmv.textContent = 'Remove'
    btnStatus.textContent = 'Read'

    btnRmv.addEventListener('click', () => {
        containerDiv.remove()
    })
}

function generateBookTemplate() {
    let containerDiv = document.createElement('div');
    library.appendChild(containerDiv);
    containerDiv.classList.add('book');

    containerDiv.appendChild(document.createElement('div'));
    containerDiv.appendChild(document.createElement('div'));
    containerDiv.appendChild(document.createElement('div'));

    let buttons = document.createElement('div')
    containerDiv.appendChild(buttons).classList.add('buttons');
    buttons.appendChild(document.createElement('button')).classList.add('remove')
    buttons.appendChild(document.createElement('button')).classList.add('readStatus')

    return containerDiv;
}

function validatePages() {
    let pageNum = Number(prompt('pages?', ''));
    return (pageNum !== NaN) ? pageNum : prompt('please enter a valid number!', '');
}

/* when pressing add book we want to ask user for name and author then that 
name and authour are going to be added to our book library from which the div
is going to be generated with the book contents*/