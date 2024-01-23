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

const book1 = new Book("Hobbit", "J.R.R Tolkien", "295", "not read yet")
book1.info();