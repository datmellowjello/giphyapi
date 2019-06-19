$(document).ready(function() {

var topics = ["jeep", "Hummer", "farrari", "bently", "porshe", "audi", "bugatti", "rollsroyce", "bmw", "tesla"]

function displayButtons () {
for (i=0; i < topics.length; i++) {
    var newBtn = $("<button><button>")
    
    // $("#btnarray").append("<button>" + topics[i] +" </button>");
   // $("button").attr("data-car="topics[i]"")
   $("#btnarray").text("topics[i]");
   
}
$("button").on("click", function() {

})
}



});