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
        table += '<td class="clear"></td>';
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

let colorHex = $("#colorPicker").val();

// select color
$("#colorPicker").on("change", function(event){
  colorHex = $("#colorPicker").val();
})

  // color squares
  $("#pixelCanvas").on("click","td", function(event) {
    event.preventDefault();

    let currentUnitColor;
    const clear = "#000000FF";

    if( $(this).hasClass("clear")){

      toggleClear($(this));
      // ( $(this) ).toggleClass("clear");
      ( $(this) ).toggleClass(colorHex);

      currentUnitColor = colorHex;

      $(this).css('background-color', colorHex);
    } else if ( !($(this).hasClass("clear")) && $(this).hasClass(colorHex) ){

      currentUnitColor = colorHex;
    $(this).css('background-color', "#fff");
      ( $(this) ).toggleClass("clear");
        ( $(this) ).toggleClass(colorHex);
    } else {
      $(this).css('background-color', colorHex);
      ( $(this) ).toggleClass(colorHex);
    }
  });

  function toggleClear(tile){
    tile.toggleClass("clear");
  }

});
