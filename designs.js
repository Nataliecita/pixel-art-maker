$(function() {
  // Select color input
  // Select size input

  // When size is submitted by the user, call makeGrid()

  /**
   * Represents Grid
   * @param {int} height - The height of the grid.
   * @param {int} width - The width of the grid.
   */
  function makeGrid(height, width) {
    let table = '';

    for(var y = 0; y < height; y++){
      table += '<tr>';
      for(var x = 0; x < width; x++){
        table += '<td>&nbsp;</td>';
      }
      table += '</tr>';
    }
    $("#pixelCanvas").html(table);
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



});
