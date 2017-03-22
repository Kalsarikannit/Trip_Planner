var numbuttons = 3;
$('#day-add')
.click(function(e){
  numbuttons++;
  hotelarr[numbuttons] = 'make your selection';
  restaurantarr[numbuttons] = 'make your selection';
  var r = $('<button class="btn btn-circle day-btn" id="day3">' + numbuttons + '</button>');
  r.insertBefore('#day-add');

});
