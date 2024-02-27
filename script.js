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

    }

    static createNewBook(event) {
        this.title = document.getElementById("title").value;
        this.author = document.getElementById("author").value;
        this.pages = document.getElementById("pages").value;
        this.read = document.querySelector('input[name="readOrNotRead"]:checked').value;
        // const read = document.getElementById("readOrNotRead").value;

        console.log(this.title);
        console.log(this.author);
        console.log(this.pages);
        console.log(this.read);

        this.book = new Book(this.title, this.author, this.pages, this.read);

        event.preventDefault();

        console.log(this.book)
        
        Book.addBookToLibrary();
        Book.displayNewBook();
        Book.displayRemoveBtn();
        Book.displayReadBtn();
       
        return this.book;

    } 

    static addBookToLibrary () {
        Book.myLibrary.push(this.book);  

        console.log(this.book)

        return this.book;
    }

    static displayNewBook() {
        this.booktr = document.createElement("tr");
        this.booktd = document.createElement("td");

        this.booktd.id = this.book.title;
        // this.booktd.setAttribute("data-bookNo", this.book.title);
        this.booktd.textContent = this.book.info();
        this.booktd.classList.add('bookDescription');
        table.appendChild(this.booktr);
        this.booktr.appendChild(this.booktd);

        return this.booktr;
    }

    static displayRemoveBtn () {

        console.log(this.booktr);

        let removeBtntd = document.createElement("td");
        let removeBtn = document.createElement("button");

        this.booktr.appendChild(removeBtntd);
        removeBtntd.appendChild(removeBtn);

        removeBtn.textContent = "REMOVE BOOK";
        removeBtntd.classList.add('removeBtn');

        

        removeBtn.addEventListener('click', () => {
            this.book.removeBook(this.booktr);
        });
    }

    removeBook (removeBook) {
        Book.myLibrary.splice(this.book, 1);
        console.log(removeBook)
        removeBook.remove();
    };

    static displayReadBtn () {

        let readBtntd = document.createElement("td");
        let readBtn = document.createElement("button");
    
        readBtn.textContent = this.read;
        readBtntd.classList.add('readBtn');
    
        this.booktr.appendChild(readBtntd);
        readBtntd.appendChild(readBtn);
    
    
        readBtn.addEventListener('click', () => {
            readBtn.textContent = (readBtn.textContent == "NOT READ YET") ? "READ" : "NOT READ YET";
            });
    
    }

    static showDialog(){
        
        return Book.dialog.showModal();
    }
    
    static closeDialog() {
    
        return Book.dialog.close();
    }
}   





