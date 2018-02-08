// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


/**
 * Represents Grid
 * @param {int} height - The height of the grid.
 * @param {int} width - The width of the grid.
 */
function makeGrid(height, width) {

// Your code goes here!
console.log(height + 'this is the height');
console.log(typeof width);



}

// Listen for submitted form
var dimensions = document.getElementById('sizePicker');

dimensions.addEventListener("submit", function(evt) {
    evt.preventDefault();
    console.log("wooohoo form submitted");

    let height = document.getElementById('inputHeight').value
    let width = document.getElementById('inputWidth').value

    height = Number(height);
    width = Number(width)

    makeGrid(height, width);
})
