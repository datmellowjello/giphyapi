$(document).ready(function() {

var topics = ["jeep", "Hummer", "farrari", "bently", "porshe", "audi", "bugatti", "rollsroyce", "bmw", "tesla"]

function displayButtons () {
for (i=0; i < topics.length; i++) {
    var newBtn = $('<button type="button">')
    
    // $("#btnarray").append("<button>" + topics[i] +" </button>");
   // $("button").attr("data-car="topics[i]"")
   newBtn.attr('data-name', topics[i]);
   newBtn.text(topics[i]);
   $("#btnarray").append(newBtn);
   
}
$("button").on("click", function() {

})
}



});