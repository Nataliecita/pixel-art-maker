// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!


}

function grabValues() {
  let height = document.getElementById('inputHeight').value

  let width = document.getElementById('inputWidth').value
  console.log(height);
  console.log(width + 'this is the width');
}



// Listen for submitted form
var dimensions = document.getElementById('sizePicker');

dimensions.addEventListener("submit", function(evt) {
    evt.preventDefault();
    console.log("wooohoo form submitted");

    let height = document.getElementById('inputHeight').value

    let width = document.getElementById('inputWidth').value
    console.log(height);
    console.log(width + 'this is the width');
})
