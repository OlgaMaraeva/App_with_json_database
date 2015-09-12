/***********************************************
***  Methods for the use case createBook  ******
************************************************/
pl.view.createBook = {
  setupUserInterface: function () {
	  
	
    var formEl = document.createElement("form");
	formEl.id = "Book";
	
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
	formButton.innerHTML = "Save Article";
	
	info.appendChild(formEl);
	formEl.appendChild(formInput);
	formEl.appendChild(formTextarea);
	formEl.appendChild(formButton);
	
	  
    var saveButton = document.forms['Book'].commit;
    // load all book objects
    Book.loadAll();
    // Set an event handler for the save/submit button
    saveButton.addEventListener("click", 
        pl.view.createBook.handleSaveButtonClickEvent);
    window.addEventListener("beforeunload", function () {
        Book.saveAll(); 
    });
  },
  // save user input data
  handleSaveButtonClickEvent: function () {
    var formEl = document.forms['Book'];
    var slots = { title: formEl.title.value, 
        year: formEl.year.value};
    Book.create( slots);
    formEl.reset();
  }
};