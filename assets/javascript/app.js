$(document).ready(function () {

   var topics = ["jeep", "Hummer", "farrari", "bently", "porshe", "audi", "bugatti", "rollsroyce", "bmw", "tesla"]

   function displayButtons() {
      $('#btnarray').empty();

      for (i = 0; i < topics.length; i++) {
         var newBtn = $('<button type="button">')

         // $("#btnarray").append("<button>" + topics[i] +" </button>");
         // $("button").attr("data-car="topics[i]"")
         newBtn.attr('data-name', topics[i]);
         newBtn.addClass("button1")
         newBtn.text(topics[i]);
         $("#btnarray").append(newBtn);
      };
   };
   displayButtons ();

   $("#submitbtn").on("click", function(event) {

      event.preventDefault();

      var newtopic = $("#newadd").val().trim();
      topics.push(newtopic);

      displayButtons();


   });
   $('.button1').on("click", function () {
      var image = $(this).attr("data-name");
      var apikey = "&api_key=71clL2OHtaJ5wO26bXXxDMXMqiC44LE8"
      // Constructing a URL to search Giphy for the nam
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
         image + apikey;
      console.log(queryURL);
      // Performing our AJAX GET request
      $.ajax({
         url: queryURL,
         method: "GET"
      })
         // After the data comes back from the API
         .then(function (response) {
            var results = response.data;
            console.log(response)
            for (var i = 0; i < results.length; i++) {
               console.log(results);
               console.log(queryURL);
               var gifDiv = $("<div>");

               var rating = results[i].rating;

               var p = $("<p>").text("Rating: " + rating);

               var movinggif = $("<img>");
               var stillgif = $("<img>")


               movinggif.attr("src", results[i].images.fixed_height.url);
               stillgif.attr("src", results[i].images.original_still.url);

               gifDiv.append(stillgif);
               gifDiv.append(p);
               gifDiv.append(movinggif);

               $(".imghere").prepend(gifDiv);

            }


         });
         
   });


});