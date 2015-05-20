

// alert('hello');	

// DATA TYPES

// string - 'hello'

// integers - 12345678910 etc.

// floats - 1.0949 etc.

// booleans - true, false, 1, 0 (conditional stuff)

// arrays - ['hello', 'my', 'name', 'is', 'arjun']
// [1, 2, 3, 4,]

// VARIABLES
// var keyname = value;
// var name = 'Arjun';
// var age = 16;

// semi-colons seperate clauses in js. not necessary after every line, but for consistency
// we end every line in a semi-colon

// jQuery is a library, it makes browsers consistent and adds lots of shortcuts to make manipulating
// DOM elements much easier

// $('selector').action(parameters);
// slsector is the same as css
// $('nav').css('background', 'red');

// Event listeners allow us to wait until an event has occured to run some code

// $('section img');
// $('section img').on();
// $('section img').on('click');
// $('section img').on('click', function() {});

// $('section img').on('click', function() {
// });

// mouse events -
// click - waits for a user to click on selector
// dbclick - waits for doubleclick on selector
// scroll - waits for the page to scroll
// hover - waits for the user to hover over selector
// mouseenter - wait for the cursor to move over the selector
// mouseleave - waits for cursor to move out of the selector

// 1) when we click on the icon
$('.trigger').on('click', function() {

// 2) we want the nav menu to drop down or up, based on it's current display
$('nav').slideToggle('slow');
// we can't use spaces in variable names, so we capitalise the first letter of the scond word instead. it's called camel casing

// 3) remove browser default behaviour
return false;

});