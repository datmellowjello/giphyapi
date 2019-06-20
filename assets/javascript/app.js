$(document).ready(function () {

   var topics = ["jeep", "Hummer", "farrari", "bently", "porshe", "audi", "bugatti", "rollsroyce", "bmw", "tesla"]

   function displayButtons() {
      $('#btnarray').empty();

      for (i = 0; i < topics.length; i++) {
         var newBtn = $('<button type="button">')

         // $("#btnarray").append("<button>" + topics[i] +" </button>");
         // $("button").attr("data-car="topics[i]"")
         newBtn.attr('data-name', topics[i]);
         newBtn.addClass("button1");
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
   $(document).on("click", ".button1", function () {
      var image = $(this).attr("data-name");
      var apikey = "&api_key=71clL2OHtaJ5wO26bXXxDMXMqiC44LE8"
      // Constructing a URL to search Giphy for the name
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
         image + apikey +"&limit=10";
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
               var gifDiv = $('<div>');

               var rating = results[i].rating;

               var p = $("<p>").text("Rating: " + rating);

               var stillgif = $("<img>");
              // var movinggif = $("<img>");

               // movinggif.attr("src", results[i].images.fixed_height.url);
               // movinggif.attr("data-ani", "moving");

               stillgif.attr("src", results[i].images.fixed_height_still.url);
               stillgif.attr("data-value", "still");
               stillgif.attr("data-still", results[i].images.fixed_height_still.url);
               stillgif.attr("data-animate", results[i].images.fixed_height.url);
               stillgif.addClass("imgimg")
               

               // movinggif.attr("src", results[i].images.fixed_height.url);
               // movinggif.attr("data-value", "moving");
               // movinggif.hide();
               

               // stillgifDiv.append(stillgif);
              //  stillgifDiv.append(p);
               gifDiv.append(p);
               gifDiv.append(stillgif);
              //  gifDiv.append(movinggif);
               

               $(".imghere").prepend(gifDiv);

            }


         });
         
   });
   // function changeGif () {
      $(document).on("click", ".imgimg", function() {
         var state = $(this).attr("data-state");

         if (state === "still") {
           $(this).attr("src", $(this).attr("data-animate"));
           $(this).attr("data-state", "animate");
         } else {
           $(this).attr("src", $(this).attr("data-still"));
           $(this).attr("data-state", "still");
         }
       });

});