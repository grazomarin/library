const addBook = document.querySelector('.addBook')
const library = document.querySelector('.books') 
const modal = document.getElementById('modal')
const closeModalButton = document.querySelector('[data-close-button]')
const overlay = document.getElementById('overlay')
const submitBtn = document.querySelector('.submit')

let myLibrary = []

addBook.addEventListener('click', () => {
    openModal()
    submitBtn.addEventListener('click', () => {
        let name = document.getElementById('name').value
        let author = document.getElementById('author').value
        let pages = document.getElementById('pages').value
        let read = document.getElementById('read').value
        let book = new Book(name, author, pages, read)
        myLibrary.push(book)
        addBookToLibrary(name, author, pages, read, book);
        closeModal(modal)
        clearForm()
    })
}) 

closeModalButton.addEventListener('click', () => {
    closeModal(modal);
})

overlay.addEventListener('click', () => {
    closeModal(modal);
})


function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary (name, author, pages, read, book) {
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
        let index = myLibrary.indexOf(book)
        myLibrary.splice(index, 1)
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

function openModal () {
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal (modal) {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function clearForm(name, author, pages, read) {
    name.value = undefined;
    author.value = undefined;
    pages.value = undefined;
    read.value = off;
}


//fix the wrapping issue when text is too long
// make read status work
// the array is for future implementation of the database