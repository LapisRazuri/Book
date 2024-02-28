class Book {
    static dialog = document.getElementById("dialog");
    static table = document.getElementById("table");
    static myLibrary = [];

    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            return "The" + " "+ this.title + " " + "by" + " " +  this.author + 
                    "," + " " + this.pages + " " + "pages" + "." 
        }

    };

    static createNewBook(event) {
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const read = document.querySelector('input[name="readOrNotRead"]:checked').value;
        // const read = document.getElementById("readOrNotRead").value;

        console.log(title);
        console.log(author);
        console.log(pages);
        console.log(read);

        const book = new Book(title, author, pages, read);

        event.preventDefault();

        console.log(book);

        Book.addBookToLibrary(book);
        Book.displayNewBook(book);
        Book.displayRemoveBtn(book);
        Book.displayReadBtn(book);
       
        return this.book;

    };

    static addBookToLibrary (book) {
        Book.myLibrary.push(book);  

        console.log(book);

        return book;
    };

    static displayNewBook(book) {
        const booktr = document.createElement("tr");
        const booktd = document.createElement("td");

        table.appendChild(booktr);
        booktr.appendChild(booktd);

        booktd.id = book.title;
        // this.booktd.setAttribute("data-bookNo", this.book.title);
        booktd.textContent = book.info();
        booktd.classList.add('bookDescription');
        

        return booktd;
    };

    static displayRemoveBtn (book) {
        const removeBtntr = document.createElement("tr");
        const removeBtntd = document.createElement("td");
        const removeBtn = document.createElement("button");

        table.appendChild(removeBtntr);
        removeBtntr.appendChild(removeBtntd);
        removeBtntd.appendChild(removeBtn);

        removeBtn.textContent = "REMOVE BOOK";
        removeBtntd.classList.add('removeBtn');

        

        removeBtn.addEventListener('click', () => {
            console.log(this)
            book.removeBook(book, removeBtntr);
            console.log(book)
        });
    };

 
    removeBook (removeBook, removeBtnTr) {
        Book.myLibrary.splice(removeBook, 1);
        console.log(removeBook)
        removeBtnTr.remove();
    };

    static displayReadBtn (book) {
        const readBtntr = document.createElement("tr");
        const readBtntd = document.createElement("td");
        const readBtn = document.createElement("button");

        table.appendChild(readBtntr);
        readBtntr.appendChild(readBtntd);
        readBtntd.appendChild(readBtn);
    
        console.log(book.read)
        readBtn.textContent = book.read;
        readBtntd.classList.add('readBtn');
    
        
    
    
        readBtn.addEventListener('click', () => {
            readBtn.textContent = (readBtn.textContent == "NOT READ YET") ? "READ" : "NOT READ YET";
        });
    
    };

    static showDialog(){
        
        return Book.dialog.showModal();
    };
    
    static closeDialog() {
    
        return Book.dialog.close();
    };
};  
