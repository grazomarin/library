const addBookElem = document.querySelector('.addBook');
const form = document.getElementById('form');
const overlay = document.getElementById('overlay');
const main = document.querySelector('.books');
const closeFormBtn = document.querySelector('.closeButton');
const submitBtn = document.querySelector('.submit');
const readCont = document.getElementById('read');
const readCheckbox = document.querySelector('.check');

const Library = (() => {
	const myLibrary = [];

	const addBook = (book) => {
		myLibrary.push(book);
	};

	const removeBook = (ID) => {
		myLibrary.find((book) => {
			if (book.ID === ID) myLibrary.splice(myLibrary.indexOf(book), 1);
		});
	};

	const changeReadStatus = (ID) => {
		myLibrary.find((book) => {
			if (book.ID === ID) book.read = !book.read;
		});
	};

	return {
		myLibrary,
		addBook,
		removeBook,
		changeReadStatus,
	};
})();

const bookFactory = (nameVal, authorVal, pagesVal, readVal) => {
	const container = document.createElement('div');
	const nameElem = document.createElement('div');
	const authorElem = document.createElement('div');
	const pagesElem = document.createElement('div');
	const buttonsCont = document.createElement('div');
	const removeBtn = document.createElement('button');
	const readBtn = document.createElement('button');

	// eslint-disable-next-line no-shadow
	const name = nameVal;
	const author = authorVal;
	const pages = pagesVal;
	let read = readVal;

	const ID = Math.random();

	const remove = () => {
		container.remove();
		Library.removeBook(ID);
	};

	const changeReadStatus = () => {
		read = !read;
		readBtn.classList = read ? 'read' : 'notRead';
		readBtn.textContent = read ? 'Read' : 'Not Read';
		Library.changeReadStatus(ID);
	};

	const initEventListeners = () => {
		removeBtn.addEventListener('click', remove);
		readBtn.addEventListener('click', changeReadStatus);
	};

	const showBook = () => {
		container.classList = 'book';
		buttonsCont.classList = 'buttons';
		readBtn.classList = read ? 'read' : 'notRead';

		nameElem.textContent = `Book Name: ${name}`;
		authorElem.textContent = `Author Name: ${author}`;
		pagesElem.textContent = `Pages: ${pages}`;
		removeBtn.textContent = 'Remove';
		readBtn.textContent = read ? 'Read' : 'Not Read';

		initEventListeners();

		buttonsCont.append(removeBtn, readBtn);
		container.append(nameElem, authorElem, pagesElem, buttonsCont);
		main.append(container);
	};

	return {
		name,
		author,
		pages,
		read,
		ID,
		showBook,
	};
};

function toggleReadStatus() {
	readCheckbox.classList.toggle('checked');
	readCheckbox.value = !readCheckbox.value;
}

submitBtn.addEventListener('click', () => {
	const nameVal = document.getElementById('name').value || 'Undefined';
	const authorVal = document.getElementById('author').value || 'Undefined';
	const pagesVal = document.getElementById('pages').value || 'Undefined';
	const readVal = readCheckbox.value;

	const book = bookFactory(nameVal, authorVal, pagesVal, readVal);
	book.showBook();
	Library.addBook(book);

	toggleModal();
});

closeFormBtn.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);
addBookElem.addEventListener('click', toggleModal);
readCont.addEventListener('click', toggleReadStatus);

function toggleModal() {
	form.classList.toggle('active');
	overlay.classList.toggle('active');
}

// fix the wrapping issue when text is too long
