$(document).ready(function() {
  $(".submit form").submit(function(event) {
    var name = $("#name").val();

    $("#letter-name").append(name);
    $(".letter").show();

    $(".blanks").hide();

    event.preventDefault();
  });
});