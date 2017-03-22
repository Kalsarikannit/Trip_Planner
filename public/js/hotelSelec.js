var hotelarr = ['make you selection', 'make you selection', 'make you selection'];
var day = 0;
$("#hotel-choices")
.on('change', function (e) {
  var selectHotel;
  // $( "select option:#hotel-choices" ).each(function() {
  //   str += $( this ).text() + " ";
  // });
  // $( "div" ).text( str );
  selectHotel = $(this).val();
  hotelarr[day] = selectHotel;
  $("#hotel-selected").text(hotelarr[day]);
});
