// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    let dateVal = $("input").val();
    
    
    
    $.get('/'+dateVal, function(data){
      
      $('#unix').text("Unix Time: "+data.unix);
      $("#regular").text("Regular Time: "+data.regular);
    })
    // $.post('/dreams?' + $.param({dream: dream}), function() {
    //   $('<li></li>').text(dream).appendTo('ul#dreams');
    //   $('input').val('');
    //   $('input').focus();
    // });
  });

});
