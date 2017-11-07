// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  
  $('form').submit(function(event) {
    event.preventDefault();
    let dateVal = $("input").val();
    
    dateVal = dateVal.replace(/\//g,"-");
    
    $.get('/'+dateVal, function(data){
      
      $('#unix').text("Unix Time: "+data.unix);
      $("#regular").text("Regular Time: "+data.regular);
    })
    
  });

});
