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


function addBookToLibrary (book) {
    myLibrary.push(book);
    console.log(myLibrary);
}



function displayBooks() {
    myLibrary.forEach(book => console.table(book))
}






const book1 = new Book("Hobbit", "J.R.R Tolkien", "295", "not read yet")
const book2 = new Book("GarasuNoKamen", "Miuchi Suzue", "670", "read")
const book3 = new Book("Inferno", "Dan Brown", "364", "read")

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayBooks();




// Uncomment this if you want the user to input the books
// const userBookTitle = prompt("What is the name of the book?");
// const userBookAuthor = prompt("Who is the author?");
// const userBookPages = prompt("How many pages?");
// const userBookRead = prompt("Read or not read yet?")

// displayBooks(addBookToLibrary(userBookTitle, userBookAuthor, userBookPages, userBookRead))


// And change the addBookToLibrary to below
// function addBookToLibrary (userBookTitle, userBookAuthor, userBookPages, userBookRead) {
//     const book = new Book(userBookTitle, userBookAuthor, userBookPages, userBookRead)
//     myLibrary.push(book);
//     console.log(myLibrary);
// }