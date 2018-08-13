$(document).ready(function (){





  // Now we start the Ajax GET request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get("", function(response) {
    // Here we are getting the element on the page with the id of sentences and
    // inserting the response
    $("#results").html(response);
  });



});
