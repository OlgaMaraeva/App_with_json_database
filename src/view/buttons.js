/***********************************************
***  Methods for the use case button click  ******
************************************************/
var leadText = document.createElement("div");
leadText.innerHTML += "<h1>" + "A Real Southern Cook" + "</h1>"
leadText.innerHTML += "<p>" + "The pickles come together fast, with a shock from ice cubes and a touch of sugar helping them move from raw to something between a pickle and a refreshing salad in just about a half-hour." + "</p>";
leadText.innerHTML += "<p>" + "Cut off the ends of the cucumbers and use the tines of a fork to draw long stripes down their lengths. Slice the cucumbers like bread-and-butter pickles, about 1/8-inch thick, and pile them into a large shallow bowl. Sprinkle the sugar over the cucumbers and stir in well." + "</p>";
leadText.innerHTML += "<p>" + "Put the cucumbers back in the bowl, sprinkle the vinegar over them evenly, and stir well. Add the salt and pepper, if using, and stir well to combine. Toss in the herbs and the onions, if using." + "</p>";

document.addEventListener("DOMContentLoaded", function(e) {
	var info = document.getElementById("info"),
	    menu = document.querySelectorAll("menu")[0];
	menu.addEventListener("click", function(e) {
    var targets = e.target.className;		
	if(targets === "list_articles") {
		info.innerHTML = " ";
		pl.view.listBooks.setupUserInterface();
	} else if (targets === "add_articles") {
		info.innerHTML = " ";
	    pl.view.createBook.setupUserInterface();
	} else if (targets === "update_articles") {
		info.innerHTML = " ";
		pl.view.updateBook.setupUserInterface();
	} else if (targets === "delete_articles") {
		info.innerHTML = " ";
		pl.view.deleteBook.setupUserInterface();
	} else if (targets === "home_article") {
		info.innerHTML = "hello";
	}
	});

});






/*
window.addEventListener('load',function(){
    document.getElementById("id1").addEventListener("click", click_handler1, false);
    document.getElementById("id2").addEventListener("click", click_handler2, false);
});


document.addEventListener( 'click', function ( e ) {
    if ( hasClass( e.target, 'bu' ) ) {            
        // .bu clicked
        // do your thing
    } else if ( hasClass( e.target, 'test' ) ) {
        // .test clicked
        // do your other thing
    }   
}, false );

 myList.click(function(e) {        
        if(e.target.nodeName === "LI") {
            alert("Clicked " + $(e.target).text());
        }
    });

*/


/*right delete book
document.addEventListener('DOMContentLoaded', function() {
	 
	var test = document.getElementById("test");
    test.addEventListener("click", pl.view.deleteBook.setupUserInterface, false);
});
*/



/*right create book
document.addEventListener('DOMContentLoaded', function() {
	 
	var test = document.getElementById("test");
    test.addEventListener("click", pl.view.createBook.setupUserInterface, false);
});
*/


/* right list books
document.addEventListener('DOMContentLoaded', function() {
	 
	var test = document.getElementById("test");
    test.addEventListener("click", pl.view.listBooks.setupUserInterface, false);
});*/


/* right update
document.addEventListener('DOMContentLoaded', function() {
	 
	var test = document.getElementById("test");
    test.addEventListener("click", pl.view.updateBook.setupUserInterface, false);
});*/


 /*document.addEventListener('DOMContentLoaded', function() {
	 
	var test = document.getElementById("test");
	var info = document.getElementById("info");
    test.addEventListener("click", pl.view.listBooks.setupUserInterface, false);
});*/


/* also working function

 document.addEventListener('DOMContentLoaded', function() {
	var test = document.getElementById("test");
    test.addEventListener("click", pl.view.updateBook.setupUserInterface, false);
});

*/

	
/* working function
    document.addEventListener('DOMContentLoaded', function() {
	var test = document.getElementById("test");
    test.addEventListener("click", function() {
		pl.view.updateBook.setupUserInterface();
	}, false);
});

*/





/* working function	
    document.addEventListener('DOMContentLoaded', function() {
	var test = document.getElementById("test");
	var info = document.getElementById("info");
    test.addEventListener("click", function() {
	var text = "hello";
	info.innerHTML = " ";
    info.innerHTML = "Hello";	
    }, false);
});  */



	


	/*window.addEventListener("click", function() {
    var text = "hello";
	document.body.innerHTML = text;
    });*/
	



/*
window.addEventListener('load',function(){
    document.getElementById("id1").addEventListener("click", click_handler1, false);
    document.getElementById("id2").addEventListener("click", click_handler2, false);
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("wheelContainer").addEventListener("click", function() { winPrize();
    }, false);
});

*/

