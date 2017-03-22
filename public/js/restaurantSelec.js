var rarr = [];
var day = 1;
$("#restaurant-choices")
.on('change', function (e) {
  var selectRestaurant;
  selectRestaurant = $(this).val();
  rarr[day] = selectRestaurant
  $("#restaurant-selected").text(rarr[day]);
})
// .change();
