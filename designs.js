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

    let $currentTile = $(this);

    const clear = "#000000FF";

    if( $currentTile.hasClass("clear")){

      toggleClear($currentTile);
      toggleColor($currentTile);

      $currentTile.css('background-color', colorHex);

    } else if ( !($currentTile.hasClass("clear")) &&    $currentTile.hasClass(colorHex) ){
      $currentTile.css('background-color', "#fff");

      toggleClear($currentTile);
      toggleColor($currentTile);

    } else {
      $currentTile.css('background-color', colorHex);
      toggleColor($currentTile);
    }
  });

  function toggleClear(tile){
    tile.toggleClass("clear");
  }

  function toggleColor(tile){
    tile.toggleClass(colorHex);
  }

});
