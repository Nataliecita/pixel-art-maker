$(function() {

  // global
  let colorHex = $("#colorPicker").val();
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


// select color from the picker
$("#colorPicker").on("change", function(event){
  colorHex = $("#colorPicker").val();
})

// toggle classes
function toggleClear(tile){tile.toggleClass("clear");}
function toggleColor(tile){tile.toggleClass(colorHex);}

  // color squares
  $("#pixelCanvas").on("click","td", function(event) {
    event.preventDefault();

    let $currentTile = $(this);
    console.log("when it's clicked before changes " + $currentTile.val());

    const clear = "#00000000";

    if( $currentTile.hasClass("clear")){
      toggleClear($currentTile);
      toggleColor($currentTile);

      $currentTile.css('background-color', colorHex);
    } else if ( !($currentTile.hasClass("clear")) && $currentTile.hasClass(colorHex) ){
      // Alternative to using clear;
      // $currentTile.css('background-color', "");
      $currentTile.css('background-color', clear);
      console.log("should set it to clear now " + $currentTile);

      toggleClear($currentTile);
      toggleColor($currentTile);

    } else {
      $currentTile.css('background-color', colorHex);
      toggleColor($currentTile);
    }
  });

});
