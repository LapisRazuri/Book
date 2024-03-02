class Book {
    static dialog = document.getElementById("dialog");
    static divContainer =  document.getElementById("divContainer");
    static table = document.getElementById("table");
    static myLibrary = [];

    constructor (title, author, page, read) {
        this.title = title;
        this.author = author;
        this.page = page;
        this.status = read;
        this.info = [this.title, this.author, this.page]
        this.userBookDiv = document.createElement("div");

    };

    static createNewBook(event) {
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const page = document.getElementById("page").value;
        const status = document.querySelector('input[name="readOrNotRead"]:checked').value;
        // const read = document.getElementById("readOrNotRead").value;

        const book = new Book(title, author, page, status);

        event.preventDefault();

        console.log(book.userBookDiv)

        Book.addBookToLibrary(book);
        Book.displayNewBook(book);
        Book.displayRemoveBtn(book);
        Book.displayReadBtn(book);

        
       
       
        return this.book;

    };

    static addBookToLibrary (book) {
        Book.myLibrary.push(book);  

        return book;
    };

    static displayNewBook (book) {
        console.log(book.userBookDiv)
        Book.divContainer.appendChild(book.userBookDiv);
            for (let i = 0; i < book.info.length; i ++) {
            const div = document.createElement("div");
            book.userBookDiv.appendChild(div);
            div.textContent = book.info[i];
            div.classList.add('items');
        }    
    }

   

    static displayRemoveBtn (book) {
        const removeBtn = document.createElement("button");
        console.log(book.userBookDiv)
        book.userBookDiv.appendChild(removeBtn);

        removeBtn.textContent = "REMOVE BOOK";
        removeBtn.classList.add('removeBtn');

        removeBtn.addEventListener('click', () => {
            Book.myLibrary.splice(book, 1);
            book.userBookDiv.remove();
        });

        return removeBtn;
    };

    static displayReadBtn (book) {
        const readBtn = document.createElement("button");

        book.userBookDiv.appendChild(readBtn);
    
        readBtn.textContent = book.status;
        readBtn.textContent == "READ"? readBtn.classList.add('pinkBG'): readBtn.classList.add('orangeBG');

        readBtn.addEventListener('click', () => {
            readBtn.textContent = (readBtn.textContent == "NOT READ YET") ? "READ" : "NOT READ YET";
            readBtn.textContent == "READ"? 
            readBtn.classList.add('pinkBG') && readBtn.classList.remove('orangeBG'): 
            readBtn.classList.add('orangeBG' && readBtn.classList.remove('pinkBG'));
        });

        return readBtn;
    };

    

    static showDialog(){
        
        return Book.dialog.showModal();
    };
    
    static closeDialog() {
    
        return Book.dialog.close();
    };
};  