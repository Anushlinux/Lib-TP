// const askName = prompt("Whats your name?");

// var video = document.getElementById("bdVid");

// var btn = document.getElementById("myBtn");

// function myFunction() {
//   if (video.paused) {
//     video.play();
//     btn.innerHTML = "NewBook";
//   } else {
//     video.pause();
//     btn.innerHTML = "NewBook";
//   }
// }

// const myLibrary = [];

// function Book() {
//   this.name = "";
//   this.author = "";
//   this.pages = "";
//   this.read = "";
// }

// function addBookToLibrary() {

// }

// let modal = document.getElementById("myForm");

// let btn = document.getElementById("myBtn");

// let span = document.getElementsByClassName("close")[0];






let myLibrary = [];

function Book(title, author, book, pages, read) 
{
  this.title = title;
  this.author = author;
  this.book = book;
  this.pages = pages;
  this.read = read;
}

function render(){
  let libraryBook = document.querySelector("#library");
  libraryBook.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++)
  {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `<p>${book.title}</p>`
    libraryBook.appendChild(bookEl);
  }
  
}

function addBookToLibrary() 
{
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let book = document.querySelector("#book").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, book, pages, read);
  myLibrary.push(newBook);
  render();
}  

document.addEventListener("DOMContentLoaded", function() 
{
  let newBookbtn = document.querySelector("#new-book-btn");

  newBookbtn.addEventListener("click", function () 
  {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
  });
});


document.querySelector ("#new-book-form").addEventListener("submit", function (event) 
{
  event.preventDefault();
  addBookToLibrary();
});