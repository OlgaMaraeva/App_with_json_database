/***********************************************
***  Methods for the use case updateBook  ******
************************************************/
pl.view.updateBook = {
  setupUserInterface: function () {
	  
	
    var formEl = document.createElement("form");
	formEl.id = "Book";
	
	var formSelect = document.createElement("select");
	formSelect.setAttribute("class", "form-control");
	formSelect.name = "selectBook";
	
	var selectOption = document.createElement("option");
	selectOption.value = "";
	
	var formInput = document.createElement("input");
	formInput.setAttribute("class", "form-control");
	formInput.id = "exampleInputEmail1";
	formInput.name = "title";
	
	
	var formTextarea = document.createElement("textarea");
	formTextarea.setAttribute("class", "form-control");
	formTextarea.rows = "3";
	formTextarea.cols = "50";
	formTextarea.name = "year";
	formTextarea.placeholder = "Write your recipe here";
	
	var formButton = document.createElement("button");
	formButton.setAttribute("class", "btn btn-default");
	formButton.type = "button";
	formButton.name = "commit";
	formButton.innerHTML = "Save Changes";
	
	info.appendChild(formEl);
	formEl.appendChild(formSelect);
	formSelect.appendChild(selectOption);
	formEl.appendChild(formInput);
	formEl.appendChild(formTextarea);
	formEl.appendChild(formButton);
	
	
	
	
	
	
	
    var saveButton = formEl.commit,
        selectBookEl = formEl.selectBook;
    var key="", keys=[], book=null, optionEl=null, i=0;
    // load all book objects
    Book.loadAll();
    // populate the selection list with books
    keys = Object.keys( Book.instances);
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      book = Book.instances[key];
      optionEl = document.createElement("option");
      optionEl.text = book.title;
      optionEl.value = book.title;
      selectBookEl.add( optionEl, null);
    }
    // when a book is selected, populate the form with the book data
    selectBookEl.addEventListener("change", function () {
        var book=null, key = selectBookEl.value;
        if (key) {
          book = Book.instances[key];
          formEl.title.value = book.title;
          formEl.year.value = book.year;
        } else {
      	  formEl.title.value = "";
      	  formEl.year.value = "";
        }
    });
    saveButton.addEventListener("click", 
        pl.view.updateBook.handleSaveButtonClickEvent);
    window.addEventListener("beforeunload", function () {
        Book.saveAll(); 
    });
  },
  // save session data
  handleSaveButtonClickEvent: function () {
    var formEl = document.forms['Book'];
    var slots = { title: formEl.title.value, 
          year: formEl.year.value
        };
    Book.update( slots);
    formEl.reset();
  }
};