const askName = prompt("Whats your name?");

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

function Book(title, author, book, pages, read) {
  this.title = title;
  this.author = author;
  this.book = book;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let book = document.querySelector("#book").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, book, pages, read);
  console.log(newBook);
}  

document.addEventListener("DOMContentLoaded", function () {
  let newBookbtn = document.querySelector("#new-book-btn");

  newBookbtn.addEventListener("click", function () {
    let modal = document.querySelector(".new-book-form");
    if (modal) {
      modal.style.display = "block";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let closeBtn = document.querySelector(".close");

  closeBtn.addEventListener("click", function () {
    let modal = document.querySelector(".new-book-form");
    if (modal) {
      modal.style.display = "none";
    }
  });
});