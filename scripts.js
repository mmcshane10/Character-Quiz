
$(document).ready(function() {
  var result;
  $("form#jurassic").submit(function(event) {
    event.preventDefault();

    var operator = $("input:radio[name=operator]:checked").val();
    var adventure = $("input:radio[name=adventure]:checked").val();

    if (operator === "Yes" && adventure === "Yes") {
      character = "Dr. Alan Grant";
    } else if (operator === "No") {
      character = "Newman"
    }
console.log()
    $("#character").empty().append(character);
      $("#result").show();

   });
 });
