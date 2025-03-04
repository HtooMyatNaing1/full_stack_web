$(document).ready(function(){
    /*
    $("h1").click(function(){
        $("h1").css("color", "purple");
    }); // this qQuery code is the same as the following code in Pure JS*/

    if(document.querySelector("h1").style.color != "yellow"){
        document.querySelector("h1").addEventListener("click", function(){
            document.querySelector("h1").style.color = "yellow"
        });
    }

    $(".hide").click(function(){
        $("h1").fadeToggle();
    });
});

// .css, .addClass, .removeClass and .hasClass methods
// .text() method to change the text content of an element
// .html() method if you want to include more tags
// .attr() method to get or set attributes 

// adding event listeners using jQuery
// .click() method to add event listener clicking
// .keypress() method for getting keys
// .on(event-type, callback) method

// creating HTML elements using jQuery
// .before() and .after() 
// .prepend() and .append() 

// animation
// .hide() method
// .toggle() method
// .fadeOut(), .fadeIn(), .fadeToggle() methods
// .slideUp(), .slideDown(), .slideToggle() methods
// .animate({opacity: 0.5}) e.g. (Only numeric values, can't change colors using this animate method)
