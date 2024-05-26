// const askName = prompt("Whats your name?");


// function Book(name, author, pages, read) {
//   this.name = name;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function () {
//     return `${name} by ${author}, ${pages}, ${read ? "true" : "false"}`;
//   };
// }

// function addbooktolib() {

// }

var video = document.getElementById("bdVid");

var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "NewBook";
  } else {
    video.pause();
    btn.innerHTML = "NewBook";
  }
}