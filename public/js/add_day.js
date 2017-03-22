var numbuttons = 3;
$('#day-add')
.click(function(e){
  numbuttons++;
  var r= $('<input type="button" value=' + numbuttons + ' class="btn btn-circle day-btn"/>');
  r.insertBefore("#day-add")
  // $(".day-button").insertBefore(r);
})
