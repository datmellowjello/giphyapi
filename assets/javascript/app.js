$(document).ready(function () {

   var topics = ["jeep", "Hummer", "farrari", "bently", "porshe", "audi", "bugatti", "rollsroyce", "bmw", "tesla"]

   function displayButtons() {
      $('#btnarray').empty();

      for (i = 0; i < topics.length; i++) {
         var newBtn = $('<button type="button">')

         // $("#btnarray").append("<button>" + topics[i] +" </button>");
         // $("button").attr("data-car="topics[i]"")
         newBtn.attr('data-name', topics[i]);
         newBtn.text(topics[i]);
         $("#btnarray").append(newBtn);
      };
      };

      $("#submitbtn").on("click", function() {

         event.preventDefault();

         var newtopic = $("#newadd").val().trim();
         topics.push(newtopic);

         displayButtons();


      });
      $(document).on("click", function() {
         var image = $(this).attr("data-name");
   
         // Constructing a URL to search Giphy for the nam
         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
           image + "&api_key=71clL2OHtaJ5wO26bXXxDMXMqiC44LE8";
   
         // Performing our AJAX GET request
         $.ajax({
           url: queryURL,
           method: "GET"
         })
           // After the data comes back from the API
           .then(function(response) {
            var results = response.data;
            console.log(response)
            console.log(results);




      });
   });
   displayButtons();


});