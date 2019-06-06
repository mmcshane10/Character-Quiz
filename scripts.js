
$(document).ready(function() {
  var result;
  $("form#jurassic").submit(function(event) {
    event.preventDefault();

    var operator = $("input:radio[name=operator]:checked").val();

    if (operator === "Yes") {
      character = "Dr. Alan Grant";
    } else if (operator === "No") {
      character = "Newman"
    }

    $("#character").empty().append(character);
      $("#result").show();

   });
 });
