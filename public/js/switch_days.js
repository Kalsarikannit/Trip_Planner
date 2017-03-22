// for ( let i = 1; i <= numbuttons; i++) {
//   console.log('numbuttons', numbuttons);
// $('#day' + i )
//     .click(function() {
//      console.log( ('#day' + i) );

//     });
// }
$('.day-buttons')
    .click(function(e) {
       console.log(e.target.innerHTML);
       day = e.target.innerHTML;
       updateDay();
    });

function updateDay() {
  $("#hotel-selected").text(hotelarr[day]);
  $("#restaurant-selected").text(restaurantarr[day]);
  $("#activities-selected").text(activitiesarr[day]);
}
