function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${name} by ${author}, ${pages}, ${read ? "true" : "false"}`
    }
}
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
Object.getPrototypeOf(book1);
console.log(book1.info());
