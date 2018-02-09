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

let colorRGB = $("#colorPicker").css("background-color");
let colorHex = $("#colorPicker").val();

// select color
$("#colorPicker").on("change", function(event){
  colorRGB = $("#colorPicker").css("background-color");
  console.log(colorRGB)
  colorHex = $("#colorPicker").val();
})

  // color squares
  $("#pixelCanvas").on("click","td", function(event) {
    event.preventDefault();

    var currentUnitColor = $(this).css("background-color");
    // currentUnitColor is in RGB while the color of the picker  is in HEX
    if(currentUnitColor !== colorRGB){
      console.log('the current unit color is different than the color picker color ');
      // $(this).css('background-color', colorHex);
      console.log("current unit color " + currentUnitColor);
      console.log("currrent colorRGB value from the picker" + colorRGB);
    } else {
      console.log("current unit color is already" + colorHex);
    }
  });

});
