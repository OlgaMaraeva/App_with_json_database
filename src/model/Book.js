/***********************************************
***  Constructor with attribute definitions  ***
************************************************/
function Book( slots) {
  this.isbn = slots.isbn;
  this.title = slots.title;
  this.year = slots.year;
};
/***********************************************
***  Class-level ("static") properties  ********
************************************************/
Book.instances = {};  // initially an empty associative array

/***********************************************
***  Class-level ("static") methods  ***********
************************************************/
// Convert row to object
Book.convertRow2Obj = function (bookRow) {
  var book = new Book( bookRow);
  return book;
};
// Load the book table from Local Storage
Book.loadAll = function () {
  var key="", keys=[], booksString="", books={}, i=0;  
  try {
    if (localStorage.getItem("books")) {
      booksString = localStorage.getItem("books");
    }
  } catch (e) {
    alert("Error when reading from Local Storage\n" + e);
  }
  if (booksString) {
    books = JSON.parse( booksString);
    keys = Object.keys( books);
    console.log( keys.length +" books loaded.");
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      Book.instances[key] = Book.convertRow2Obj( books[key]);
    }
  }
};
//  Save all book objects to Local Storage
Book.saveAll = function () {
  var booksString="", error=false,
      nmrOfBooks = Object.keys( Book.instances).length;  
  try {
    booksString = JSON.stringify( Book.instances);
    localStorage.setItem("books", booksString);
  } catch (e) {
    alert("Error when writing to Local Storage\n" + e);
    error = true;
  }
  if (!error) console.log( nmrOfBooks + " books saved.");
};
//  Create a new book row
Book.create = function (slots) {
  var book = new Book( slots);
  Book.instances[slots.title] = book;
  console.log("Book " + slots.title + " created!");
};

//  Update an existing book row
Book.update = function (slots) {
  var book = Book.instances[slots.title];
  var year = slots.year;
  if (book.title !== slots.title) { book.title = slots.title;}
  if (book.year !== slots.year) { book.year = year;}
  console.log("Book " + slots.title + " modified!");
};
//  Delete a book row from persistent storage
Book.destroy = function (title) {
  if (Book.instances[title]) {
    console.log("Book " + title + " deleted");
    delete Book.instances[title];
  } else {
    console.log("There is no book with ISBN " + isbn + " in the database!");
  }
};
//  Create and save test data
Book.createTestData = function () {
  Book.instances["006251587X"] = new Book({title:"Weaving the Web", year: "Salad"});
  Book.instances["0465026567"] = new Book({title:"Gödel, Escher, Bach", year:"Meat"});
  Book.instances["0465030793"] = new Book({title:"I Am A Strange Loop", year:"Bird"});
  Book.saveAll();
};
//  Clear data
Book.clearData = function () {
  if (confirm("Do you really want to delete all articles data?")) {
    Book.instances = {};
    localStorage.setItem("books", "{}");
  }
};
