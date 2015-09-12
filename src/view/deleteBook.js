/***********************************************
***  Methods for the use case "delete book"  ***
************************************************/
pl.view.deleteBook = {
  setupUserInterface: function () {
	  

    var formEl = document.createElement("form");
	formEl.id = "Book";
	
	var formSelect = document.createElement("select");
	formSelect.setAttribute("class", "form-control");
	formSelect.name = "selectBook";
	
	var selectOption = document.createElement("option");
	selectOption.value = "";
	
	var formButton = document.createElement("button");
	formButton.setAttribute("class", "btn btn-default");
	formButton.type = "button";
	formButton.name = "commit";
	formButton.innerHTML = "Delete Article";
	
	info.appendChild(formEl);
	formEl.appendChild(formSelect);
	formSelect.appendChild(selectOption);
	formEl.appendChild(formButton);
	  
	  
    var deleteButton = document.forms['Book'].commit;
    var selectEl = document.forms['Book'].selectBook;
    var key="", keys=[], book=null, optionEl=null, i=0;
    // load all book objects
    Book.loadAll();
    keys = Object.keys( Book.instances);
    // populate the selection list with books
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      book = Book.instances[key];
      optionEl = document.createElement("option");
      optionEl.text = book.title;
      optionEl.value = book.title;
      selectEl.add( optionEl, null);
    }
    deleteButton.addEventListener("click", 
        pl.view.deleteBook.handleDeleteButtonClickEvent);
    window.addEventListener("beforeunload", function () {
        Book.saveAll(); 
    });
  },
  // Event handler for deleting a book
  handleDeleteButtonClickEvent: function () {
    var selectEl = document.forms['Book'].selectBook;
    var isbn = selectEl.value;
    if (isbn) {
      Book.destroy( isbn);
      // remove deleted book from select options
      selectEl.remove( selectEl.selectedIndex);
    }
  }
};