const askName = prompt("Whats your name?");

var video = document.getElementById("bdVid");

var btn = document.getElementById("myBtn");

// function myFunction() {
//   if (video.paused) {
//     video.play();
//     btn.innerHTML = "NewBook";
//   } else {
//     video.pause();
//     btn.innerHTML = "NewBook";
//   }
// }

const myLibrary = [];

function Book() {
  this.name = "";
  this.author = "";
  this.pages = "";
  this.read = "";
}

function addBookToLibrary() {

}

