const newBook = document.getElementById("newBook");
const addBook = document.getElementById("addBook")
const dialog = document.getElementById("dialog");
const displayBook = document.getElementById("displayBook");
const main = document.getElementById("main");
const bookAttribute = document.get
const myLibrary = [];




function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return "The" + " "+ this.title + " " + "by" + " " +  this.author + 
        "," + " " + this.pages + " " + "pages" + "," + " " + this.read + "."
    };
}

Book.prototype.info = function() {
    return "The" + " "+ this.title + " " + "by" + " " +  this.author + 
    "," + " " + this.pages + " " + "pages" + "," + " " + this.read + "." 
}; 

Book.prototype.createRemoveBtn = function(bookDiv) {

    console.log(bookDiv);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "REMOVE BOOK";

    console.log(this)

    removeBtn.addEventListener('click', () => {

        console.log(this);
        console.log(bookDiv);
        this.removeBook(bookDiv);
    });

    bookDiv.appendChild(removeBtn);

    console.log(bookDiv)

   
}

Book.prototype.removeBook = function(bookDiv) {

    console.log(bookDiv);
    console.log(this);

    myLibrary.splice(this, 1);

    console.log(this);

    bookDiv.remove();
};



newBook.addEventListener('click', showModal);
addBook.addEventListener('click', function(event) {

    let input = passUserInput(event);
    let bookCreated = addBookToLibrary(input);
    let bookDiv = linkHtmlWithBookObject(bookCreated);

    bookCreated.createRemoveBtn(bookDiv);

});

addBook.addEventListener('click', closeModal)



function showModal(){
    dialog.showModal();
}



function passUserInput(event) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("readOrNotRead").value;

    event.preventDefault();

    console.log(title)

    return [title, author, pages, read];
} 



function addBookToLibrary (array) {
        let book = new Book(array[0], array[1], array[2], array[3]);

        console.log(book);

        myLibrary.push(book);  

        return book;
}

function linkHtmlWithBookObject(book) {
    let bookDiv = document.createElement("div");
    bookDiv.id = book.title;
    bookDiv.setAttribute("data-bookNo", book.title);
    bookDiv.textContent = book.info();
    main.appendChild(bookDiv);

console.log(main)

    return bookDiv;
}

function closeModal() {
    dialog.close();
}