 
//   var yourTripArray = [];
//   var startStation = '';
//   var endStation = '';
//   var startLine = '';
//   var endLine = '';

//   var mta = {
//   'n': ['ts', '34th', '28th-n', '23rd-n', 'us', '8th-n'],
//   'l': ['8th-l', '6th', 'us', '3rd', '1st'],
//   's': ['gc', '33rd', '28th-s', '23rd-s', 'us', 'ap']
// };

$(document).ready(function() {

  $('#startLine').on('click', function(event) {
    var yourTrip = $('.your-trip');
    startStation = $('#start-station').val();
    yourTrip.append('<li>' + 'You are starting at ' + startStation + '</li>');
    yourTripArray.push(startStation);
    localStorage.setItem('startingStation', JSON.stringify(yourTripArray));
    $('#start-station placeholder').val('');
  })
    $('#journeyFrom').on('click', function(event) {
    var yourTrip = $('.your-trip');
    endStation = $('#end-station').val();
    yourTrip.append('<li>' + 'You are ending at ' + endStation + '</li>');
    yourTripArray.push(endStation);
    localStorage.setItem('endingStation', JSON.stringify(yourTripArray));
  })
    $('#endLine').on('click', function(event) {
    var yourTrip = $('.your-trip');
    startLine = $('#start-line').val();
    yourTrip.append('<li>' + 'Your starting line is ' + startLine + '</li>');
    yourTripArray.push(startLine);
    localStorage.setItem('startingLine', JSON.stringify(yourTripArray));
  })
    $('#journeyTos').on('click', function(event) {
    var yourTrip = $('.your-trip');
    endLine = $('#end-line').val();
    yourTrip.append('<li>' + 'Your ending line is ' + endLine + '</li>');
    yourTripArray.push(endLine);
    localStorage.setItem('endingLine', JSON.stringify(yourTripArray));
  });
});