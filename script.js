const newBook = document.getElementById("newBook");
const addBook = document.getElementById("addBook");
const closeDialog = document.getElementById("closeDialog"); 
const dialog = document.getElementById("dialog");
const displayBook = document.getElementById("displayBook");
const main = document.getElementById("main");
const table = document.getElementById("table");
const bookAttribute = document.get
const myLibrary = [];




function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return "The" + " "+ this.title + " " + "by" + " " +  this.author + 
    "," + " " + this.pages + " " + "pages" + "."  
}; 

Book.prototype.createRemoveBtn = function(booktr) {

    console.log(booktr);

    let removeBtntd = document.createElement("td");
    let removeBtn = document.createElement("button");

    booktr.appendChild(removeBtntd);
    removeBtntd.appendChild(removeBtn);

    removeBtn.textContent = "REMOVE BOOK";
    removeBtntd.classList.add('removeBtn');

    console.log(this)

    removeBtn.addEventListener('click', () => {

        console.log(this);
        console.log(booktr);
        this.removeBook(booktr);
    });

    console.log(booktr)

   
}

Book.prototype.removeBook = function(booktr) {

    console.log(booktr);
    console.log(this);

    myLibrary.splice(this, 1);

    console.log(this);

    booktr.remove();
};

Book.prototype.createReadBtn = function(booktr) {

    let readBtntd = document.createElement("td");
    let readBtn = document.createElement("button");

    readBtn.textContent = this.read;
    readBtntd.classList.add('readBtn');

    booktr.appendChild(readBtntd);
    readBtntd.appendChild(readBtn);


    readBtn.addEventListener('click', () => {
        readBtn.textContent = (readBtn.textContent == "NOT READ YET") ? "READ" : "NOT READ YET";
        });

}





newBook.addEventListener('click', showModal);
addBook.addEventListener('click', closeModal)
addBook.addEventListener('click', function(event) {

    let input = passUserInput(event);
    let bookCreated = addBookToLibrary(input);
    let booktr = linkHtmlWithBookObject(bookCreated);

    bookCreated.createRemoveBtn(booktr);
    bookCreated.createReadBtn(booktr);

});



closeDialog.addEventListener('click', closeModal)



function showModal(){
    dialog.showModal();
}



function passUserInput(event) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    // const read = document.getElementById("readOrNotRead").value;
    const read = document.querySelector('input[name="readOrNotRead"]:checked').value;

    console.log(read)

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
    let booktr = document.createElement("tr");
    let booktd = document.createElement("td");
    booktd.id = book.title;
    booktd.setAttribute("data-bookNo", book.title);
    booktd.textContent = book.info();
    booktd.classList.add('bookDescription');
    table.appendChild(booktr);
    booktr.appendChild(booktd);

    return booktr;
}

function closeModal() {
    dialog.close();
}