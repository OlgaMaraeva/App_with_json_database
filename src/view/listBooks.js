/**
 * @fileOverview  Contains various view functions for the use case listBooks
 * @author Gerd Wagner
 */
 pl.view.listBooks = {
  setupUserInterface: function () {
	  
	  
	  var listInput = document.createElement("input");
	  listInput.type = "search";
	  listInput.name = "search";
	  listInput.id = "search";
	  listInput.value = "";
	  listInput.placeholder = "Enter search keyword";
		  
    var divBodyEl = document.createElement("div");
	divBodyEl.id = "booksWrapper";
	
	info.appendChild(listInput);
	info.appendChild(divBodyEl);
	
    var keys=[], key="", row={}, i=0;
    // load all book objects
    Book.loadAll();
    keys = Object.keys( Book.instances);
    // for each book, create a table row with a cell for each attribute
    for (i=0; i < keys.length; i++) {
      key = keys[i];
	  	var row = document.createElement("div");
		row.setAttribute("class", "books"); 
	  var lead = document.createElement("h2"),
	      textBody = document.createElement("p"),
		  hrEl = document.createElement("hr");
      row.appendChild(lead).textContent = Book.instances[key].title;  
      row.appendChild(textBody).textContent = Book.instances[key].year;
	  
	  var inputWrap = document.createElement("div");
	  inputWrap.setAttribute("class", "wrapperInput");
	  	  
	  var input = document.createElement("input");
		  var label = document.createElement("label");
		  
		  var input1 = document.createElement("input");
		  var label1 = document.createElement("label");
		  
		  var input2 = document.createElement("input");
		  var label2 = document.createElement("label");
		  
		  var input3 = document.createElement("input");
		  var label3 = document.createElement("label");
		  
		  var input4 = document.createElement("input");
		  var label4 = document.createElement("label");
		  
		  inputWrap.appendChild(input);
	  input.type = "checkbox";
	  input.name = Book.instances[key].title + " " + "one";
	  input.id = Book.instances[key].title + " " + "one";
	  input.value = "1";
	  input.setAttribute("store", Book.instances[key].title);
	  inputWrap.appendChild(label);
	  label.setAttribute("for", Book.instances[key].title + " " + "one"); 
	  
	  inputWrap.appendChild(input1);
	  input1.type = "checkbox";
	  input1.name = Book.instances[key].title  + " " + "two";
	  input1.id = Book.instances[key].title + " " + "two";
	  input1.value = "2";
	  input1.setAttribute("store", Book.instances[key].title  + " " + "two");
	  inputWrap.appendChild(label1);
	  label1.setAttribute("for", Book.instances[key].title + " " + "two"); 
	  
	  inputWrap.appendChild(input2);
	  input2.type = "checkbox";
	  input2.name = Book.instances[key].title + " " + "three";
	  input2.id = Book.instances[key].title  + " " + "three";
	  input2.value = "3";
	  input2.setAttribute("store", Book.instances[key].title  + " " + "three");
	  inputWrap.appendChild(label2);
	  label2.setAttribute("for", Book.instances[key].title + " " + "three");

      inputWrap.appendChild(input3);
	  input3.type = "checkbox";
	  input3.name = Book.instances[key].title +  " " + "four";
	  input3.id = Book.instances[key].title +  " " + "four";
	  input3.value = "4";
	  input3.setAttribute("store", Book.instances[key].title  + " " + "four");
	  inputWrap.appendChild(label3);
	  label3.setAttribute("for", Book.instances[key].title  + " " + "four");

      inputWrap.appendChild(input4);
	  input4.type = "checkbox";
	  input4.name = Book.instances[key].title  + " " + "five";
	  input4.id = Book.instances[key].title + " " + "five";
	  input4.value = "5";
	  input4.setAttribute("store", Book.instances[key].title  + " " + "five");
	  inputWrap.appendChild(label4);
	  label4.setAttribute("for", Book.instances[key].title  + " " + "five");
	  
	  divBodyEl.appendChild(row);
	  row.appendChild(inputWrap);
	  row.appendChild(hrEl);
    }
	(function() {
    var boxes = document.querySelectorAll("#booksWrapper .wrapperInput input[type='checkbox']");
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        if (box.hasAttribute("store")) {
            setupBox(box);
        }
    }
    
    function setupBox(box) {
        var storageId = box.getAttribute("store");
        var oldVal = localStorage.getItem(storageId);
        console.log(oldVal);
        box.checked = oldVal === "true" ? true : false;
        box.addEventListener("change", function() {
			var check = this.checked;
            localStorage.setItem(storageId, check);
			});
	}
})();

(function() {
	var search = document.querySelector('#search');
var listItems = Array.prototype.slice.call(document.querySelectorAll('.books'));

search.addEventListener('keyup', function () {
    var yourtext = this.value;
    listItems.forEach(function (li) {
        var str = li.textContent;
        var re = new RegExp(yourtext, "i");
        re.test(str) ? li.classList.remove('box-hidden') : li.classList.add('box-hidden');
    });
});
})();

  }
};

