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

let myIndex = [];


const quoteText = document.getElementById("quote");
const naval =document.getElementById("naval");
const addBook = document.getElementById("add-book");
const openTab = document.getElementById("open-tab");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.querySelectorAll("#read");
const submit = document.getElementById("submit");
const grid = document.getElementById("grid");
const quotesLength = quotes.length;
var clickedEdit;



function Book(title, author, pages, status) {
  // the constructor...
  this.Title = title;
  this.Author = author;
  this.Pages = pages;
  this.Status = status;
}

function addBookToLibrary(title, author, pages, status) {
  const userBook = new Book(title, author, pages, status)
  myLibrary.push(userBook);
  return userBook;
}


function randomIndex () {
  const randomNumber = Math.floor(Math.random() * quotesLength);
  return randomNumber
}

function printBooks () {
  grid.innerHTML = "";
  for (let j = 0; j < myLibrary.length; j++) {
    const div = document.createElement("div");
    const bookEntries = Object.entries(myLibrary[j]);
    grid.appendChild(div);
    div.dataset.bookIndex = j; 
    
    
    for (let i = 0; i < 4; i++) {
      const [key, value] = bookEntries[i];
      const description = document.createElement("p");
      description.textContent = key + ": " + value;
      description.className = "card-text";
      div.appendChild(description); 
    }
    
    const editInfo = document.createElement("button");
    const deleteButton = document.createElement("button");
    const buttonsContainer = document.createElement("div");
    div.appendChild(buttonsContainer);
    buttonsContainer.appendChild(editInfo);
    buttonsContainer.appendChild(deleteButton);
    
    editInfo.className = "button-card read";
    deleteButton.className ="button-card remove";
    editInfo.textContent = "Edit Info";
    deleteButton.textContent = "Remove Book";
    
    div.className = "card";
      buttonsContainer.className = "buttons-container";
      
      deleteButton.addEventListener("click", function () {
        const index = buttonsContainer.parentNode.dataset.bookIndex;
        myLibrary.splice(index, 1)
        printBooks(); 
      });
      
      editInfo.addEventListener("click", function () {
        const index = buttonsContainer.parentNode.dataset.bookIndex;
        var computedStyle = window.getComputedStyle(openTab);
        const h2 = openTab.querySelector("h2");
        
        if (computedStyle.display === "none") {
          clickedEdit = true;
          h2.textContent = "Edit Info";
          h2.style.fontSize = "150%";
          openTab.style.display = "flex";
          openTab.style.position = "absolute";
          openTab.style.top = "35%";
          openTab.style.left = "40%";
          myIndex.push(index);
        }
      
          else {
            openTab.style.display = "none"; 
            clickedEdit = false;
          }
      })
      
  }


  
}


quoteText.innerHTML = '"' + quotes[randomIndex()] + '"';



// Event Listeners //
read.forEach(radio => {
  radio.addEventListener("change", function() {
    if (this.checked) read.value = this.value;
  });
});

addBook.addEventListener("click", function () {
  var computedStyle = window.getComputedStyle(openTab);
  clickedEdit = false;
  if (computedStyle.display === "none") {
    openTab.style.display = "flex";
    openTab.style.position = "absolute";
    openTab.style.top = "35%";
    openTab.style.left = "40%";
    }

    else openTab.style.display = "none";
})

submit.addEventListener("click", function (e) {
  e.preventDefault();
  
  if (!/^\d+$/.test(pages.value)) {
    alert("Pages Section: Please type just Numbers");
    return;
  }
  
  openTab.style.display = "none";
  
  if (clickedEdit) {
    let useIndex = myIndex[myIndex.length -1];
    myLibrary[useIndex].Title = title.value;
    myLibrary[useIndex].Author = author.value;
    myLibrary[useIndex].Pages = pages.value;
    myLibrary[useIndex].Status = read.value;
    printBooks();
    clickedEdit = false;
    return;
  }

  else if (title.value && author.value && pages.value && read.value) {
    addBookToLibrary(title.value, author.value, pages.value, read.value) ;
    printBooks(myLibrary);
  }
});






// CSS Text and Buttons Style when too much cards // 
// Optional: Add Option to add Book Cover // 