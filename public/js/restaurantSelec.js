// var rarr = [];
// var day = 1;
// $("#restaurant-choices")
// .on('change', function (e) {
//   var selectRestaurant;
//   selectRestaurant = $(this).val();
//   rarr[day] = selectRestaurant
//   $("#restaurant-selected").text(rarr[day]);
// })
var restaurantarr = ['make you selection', 'make you selection', 'make you selection'];
var day = 0;
$("#restaurant-choices")
.on('change', function (e) {
  var selectRestaurant;
  // $( "select option:#hotel-choices" ).each(function() {
  //   str += $( this ).text() + " ";
  // });
  // $( "div" ).text( str );
  selectRestaurant = $(this).val();
  restaurantarr[day] = selectRestaurant;
  $("#restaurant-selected").text(restaurantarr[day]);
});
