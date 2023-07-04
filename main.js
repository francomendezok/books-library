let myLibrary = [];
let quotes = [
    "If you need a degree to do it, it's not going to make you wealthy.",
    "University degrees are the new taxi medallions.",
    "The overeducated are worse off than the undereducated, having traded common sense for the illusion of knowledge.",
    "If the primary purpose of school was education, the Internet should obsolete it. But school is mainly about credentialing.",
    "Teaching is more a way for the teacher to learn than for the student to learn.",
    "The skills you really want can't be taught, but they can be learned.",
    "Free education is abundant, all over the Internet. It's the desire to learn that's scarce.",
    "It's not about 'educated' v 'un-educated.' It's about 'likes to read' and 'doesn't like to read.'",
    "The Internet will obsolete the industrial education system, just like it's obsoleting every other physical purveyor of information goods.",
    "The smarter you get, the slower you read.",
    "If you can speed read it, it isn't worth reading.",
    "A vacation is a very expensive way to schedule the time to read a book in peace.",
    "Read what you love until you love to read.",
    "If they wrote it to make money, don't read it.",
    "Study logic and math, because once you've mastered them, you won't fear any book.",
    "Learn to love to read, and all human knowledge is available to you right now. No need for a priest to interpret a textbook for you.",
    "Reading a book isn't a race - the better the book, the slower it should be absorbed."
]

const quoteText = document.getElementById("quote");
const naval =document.getElementById("naval");
const addBook = document.getElementById("add-book");
const openTab = document.getElementById("open-tab");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
// Need to select all the radio read inputs (2), not just one. If not, the value will always be "Yes" //
const submit = document.getElementById("submit");
const grid = document.getElementById("grid");
const quotesLength = quotes.length;

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const userBook = new Book(title, author, pages, read)
  myLibrary.push(userBook);
  return userBook;
}


function randomIndex () {
  const randomNumber = Math.floor(Math.random() * quotesLength);
  return randomNumber
}

function printBooks (book) {
    const div = document.createElement("div");
    let bookInfo = [
      book.title,
      book.author,
      book.pages,
      book.read
    ]
    grid.appendChild(div);
    for (let i = 0; i < 4; i++) {
      const description = document.createElement("p");
      description.textContent = "Title: " + bookInfo[i];
      div.appendChild(description);
    }
    div.className = "card";
    
  
}


quoteText.innerHTML = '"' + quotes[randomIndex()] + '"';

addBook.addEventListener("click", function () {
  var computedStyle = window.getComputedStyle(openTab);
  
  if (computedStyle.display === "none") {
    openTab.style.display = "flex";
    openTab.style.position = "absolute";
    openTab.style.top = "35%";
    openTab.style.left = "40%";
    }

    else {
      openTab.style.display = "none";
    }
  
})

submit.addEventListener("click", function (e) {
  e.preventDefault();
  openTab.style.display = "none";
  if (title.value && author.value && pages.value && read.value) {
    printBooks(addBookToLibrary(title.value, author.value, pages.value, read.value)) ;
  }
});





// Button remove book //
// Button change read status // 
// Fix Radio Value, How to get the value correctle // 