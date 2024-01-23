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


function addBookToLibrary (userBookTitle, userBookAuthor, userBookPages, userBookRead) {
    const book = new Book(userBookTitle, userBookAuthor, userBookPages, userBookRead)
    myLibrary.push(book);
    console.log(myLibrary);
}

const book1 = new Book("Hobbit", "J.R.R Tolkien", "295", "not read yet")
book1.info();


const userBookTitle = prompt("What is the name of the book?");
const userBookAuthor = prompt("Who is the author?");
const userBookPages = prompt("How many pages?");
const userBookRead = prompt("Read or not read yet?")

addBookToLibrary(userBookTitle, userBookAuthor, userBookPages, userBookRead)