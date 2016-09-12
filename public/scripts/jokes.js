console.log('jokes.js is sourced');


$(document).ready(function(){
  console.log('doc ready Jaz');

$( '#sendJoke' ).on( 'click', function(){
  console.log( 'sendJoke on click' );

var author = $('#author').val();
var joke = $('#joke').val();
var punchLine = $('#punchLine').val();


var objectToSend={
    whoseJoke: author,
    jokeQuestion: joke,
    punchLine: punchLine
  };

  $.ajax({
    type: 'POST',
    url: '/texter',
    data: objectToSend,
    success: function(data){
      console.log('ajax success:', data);
    $('#outputDiv').html(data.results);
      console.log( 'got this from server - ' + data );
      }
    });
  });
});
