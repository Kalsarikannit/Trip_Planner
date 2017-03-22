// var aarr = [];
// var day = 1;
// $("#activity-choices")
// .on('change', function (e) {
//   var selectActivities;
//   selectActivities = $(this).val();
//   aarr[day] = selectActivities;
//   $("#activities-selected").text(aarr[day]);
//})
var activitiesarr = ['make you selection', 'make you selection', 'make you selection'];
var day = 0;
$("#activity-choices")
.on('change', function (e) {
  var selectActivities;
  // $( "select option:#hotel-choices" ).each(function() {
  //   str += $( this ).text() + " ";
  // });
  // $( "div" ).text( str );
  selectActivities = $(this).val();
  activitiesarr[day] = selectActivities;
  $("#activities-selected").text(activitiesarr[day]);
});
