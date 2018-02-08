// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


/**
 * Represents Grid
 *
 * @param {int} height - The height of the grid.
 * @param {int} width - The width of the grid.
 */
function makeGrid(height, width) {

// Your code goes here!
console.log(height);
console.log(width + 'this is the width');


}

// Listen for submitted form
var dimensions = document.getElementById('sizePicker');

dimensions.addEventListener("submit", function(evt) {
    evt.preventDefault();
    console.log("wooohoo form submitted");

    const height = document.getElementById('inputHeight').value
    const width = document.getElementById('inputWidth').value

    makeGrid(height, width);
})
