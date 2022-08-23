const addBook = document.querySelector('.addBook')
const library = document.querySelector('.books') 
const modal = document.getElementById('modal')
const closeModalButton = document.querySelector('[data-close-button]')
const overlay = document.getElementById('overlay')
const submitBtn = document.querySelector('.submit')
const form = document.getElementById('form')

let myLibrary = []

addBook.addEventListener('click', () => {
    openModal()
}) 

submitBtn.addEventListener('click', () => {
    let name = document.getElementById('name').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').checked
    let book = new Book(name, author, pages, read)
    myLibrary.push(book)
    addBookToLibrary(name, author, pages, read, book);
    closeModal(modal)
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
    let btnStatus = containerDiv.querySelector('.readStatus')

    bookName.textContent = `Book Name: ${name}`
    bookAuthor.textContent = `Author Name: ${author}`
    bookPages.textContent = `Pages: ${pages}`
    btnRmv.textContent = 'Remove'

    assignRead(read, btnStatus)
    btnStatus.addEventListener('click', () => {
        if (book.read === true) {
            btnStatus.classList.toggle('notRead');
            btnStatus.classList.toggle('read');
            btnStatus.textContent = 'Not Read'
            book.read = false
        } else {
            btnStatus.classList.toggle('read');
            btnStatus.classList.toggle('notRead');
            btnStatus.textContent = 'Read';
            book.read = true
        }
    });

    btnRmv.addEventListener('click', () => {
        containerDiv.remove()
        let index = myLibrary.indexOf(book)
        myLibrary.splice(index, 1)
    })
}

function assignRead(read, btn) {
    if (read === true) {
        btn.classList.toggle('read');
        btn.textContent = 'Read'
    } else {
        btn.classList.toggle('notRead');
        btn.textContent = 'Not Read';
    }
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


//fix the wrapping issue when text is too long
