$(function() {
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
        table += '<td></td>';
      }
      table += '</tr>';
    }
    $("#pixelCanvas").html(table);
  }

  // Listen for submitted form PLAIN JS
  var dimensions = document.getElementById('sizePicker');

  dimensions.addEventListener("submit", function(evt) {
      evt.preventDefault();

      let height = document.getElementById('inputHeight').value
      let width = document.getElementById('inputWidth').value

      height = Number(height);
      width = Number(width)

      makeGrid(height, width);
  })


// TODO BUG square isnt caputring color. when it does the other function was outide the other and there was a bug

let color;
// select color
$("#colorPicker").on("change", function(event){
  color = $("#colorPicker").val();
  console.log(color);
})


  // color squares
  $("#pixelCanvas").on("click","td", function(event) {
    // event.preventDefault();

    $(this).css("background-color", color);
    console.log(color);
  });

});
