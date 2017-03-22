var aarr = [];
var day = 1;
$("#activity-choices")
.on('change', function (e) {
  var selectActivities;
  selectActivities = $(this).val();
  aarr[day] = selectActivities;
  $("#activities-selected").text(aarr[day]);
})
