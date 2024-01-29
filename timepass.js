function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
    const readStatus = this.hasRead ? "read" : "not yet";


    this.sayBook = function(){
        console.log(`${title} by ${author}, ${pages} pages,wether ${read}`);
    }
   
}

const newBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(newBook.info());
