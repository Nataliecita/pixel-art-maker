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
      console.log("it was clear");

      ( $(this) ).toggleClass("clear");
      ( $(this) ).toggleClass(colorHex);
      console.log(colorHex);

      console.log("the previous currint unit was" +currentUnitColor);
      console.log("the current color hex is" + colorHex);
      currentUnitColor = colorHex;
      console.log("now current unit" + currentUnitColor);

      $(this).css('background-color', colorHex);
      console.log(currentUnitColor === colorHex)

    } else if ( !($(this).hasClass("clear")) && $(this).hasClass(colorHex) ){
      console.log("the previous currint unit was" +currentUnitColor);
      console.log("the current color hex is" + colorHex);
      currentUnitColor = colorHex;
      console.log("now current unit" + currentUnitColor);

    $(this).css('background-color', "#fff");
      ( $(this) ).toggleClass("clear");
        ( $(this) ).toggleClass(colorHex);

      console.log("haaaay");
    } else {
      $(this).css('background-color', colorHex);
      console.log("last");
    }


    // if a square is clicked, add class “color: black”, if it is clicked again, use “remove class”




    // if(currentUnitColor !== colorRGB){
    //   console.log('the current unit color is different than the color picker color ');
    //   $(this).css('background-color', colorHex);
    //   console.log("current unit color " + currentUnitColor);
    //   console.log("currrent colorRGB value from the picker" + colorRGB);
    // } else {
    //   console.log("current unit color is already" + colorHex);
    // }
  });

});
