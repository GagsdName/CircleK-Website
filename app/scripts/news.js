/**
 * Created by Pratish on 12/4/2016.
 */

var perPage = 10;
currentPage = 1;

$( "#saveModel" ).click(function() {

  subjectLineText = $("#subjectLine").val();
  $("#subjectLine").val("");
  newsMessageBody = $("#newsBody").val();
  $("#newsBody").val("");

    $("#displayNews").prepend("" +
      "<div class=\"snapshot truncate\">" +
      "<h3><b>" + subjectLineText + "</b></h3>" +
      "<article><p>" + newsMessageBody + "</p></article>" +
      "</div>");

  $("#NewsInputModel").modal('toggle');

  var numItems = $('#displayNews').children().length;
  var numPages = Math.ceil(numItems/perPage);

  $("#page-selection").bootpag({total: numPages, maxVisible: numPages});

  $("#displayNews").children().hide();
  $("#displayNews").children().slice(((currentPage-1)*perPage),currentPage*perPage).show();


});

$(document).on('click', ".snapshot", function() {
  subjetLine = $(this).find("h3").text();
  messageBody = $(this).find("p").text();

  $("#displayNewsSubject").html("<h2>"+subjetLine+"</h2>");
  $("#displayNewsBody").html("<p>"+messageBody+"</p>");
  $("#displayNewsFeed").modal('toggle');



});


$(function () {
  $('#datetimepicker12').datetimepicker({
    format: 'MM/dd/YYYY',
    inline: true,
    sideBySide: false,
  });
});


$('#page-selection').bootpag({
  total: 1,          // total pages
  page: 1,            // default page
  leaps: true         // next/prev leaps through maxVisible
}).on("page", function(event, /* page number here */ num){
  currentPage = num;
  var numItems = $('#displayNews').children().length;
  var numPages = Math.ceil(numItems/perPage);

  $("#displayNews").children().hide();
  $("#displayNews").children().slice(((currentPage-1)*perPage),currentPage*perPage).show();
  $(this).bootpag({total: numPages, maxVisible: numPages});
});

$('#pageItem').click(function () {
  perPage = $("#inputPerLine").val();
  alert(perPage);
})




