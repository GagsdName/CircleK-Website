/**
 * Created by Pratish on 12/6/2016.
 */



$("#saveModel").click(function () {
  subjectLineText = $("#subjectLine").val();
  $("#subjectLine").val("");

  tagList = $("#tagInput").tagsinput('items');

  newsMessageBody = $("#blogBody").val();
  $("#blogBody").val("");

  $("#blogInputModel").modal('toggle');

  currentDateTime = new Date();

  $("#displayBlog").prepend("" +
    "<div class=\"snapshot \">" +
    "<h4><b>" + subjectLineText + "</b></h4>" +
    "<h5><span class=\"glyphicon glyphicon-time\"></span> Created at " + currentDateTime.toDateString() + "</h5>" + "<h5>" +
    getTagColor(tagList) +"</h5>" + "<br>" +
    "<article><p>" + newsMessageBody + "</p></article>" +
    "<br><br>" + "<hr>" +
    "</div>");

});



function getNumber(Letter) {
  res = 0;
  for (j = 0; j < Letter.length; j++) {
    res += Letter.charCodeAt(j);
  }
  return res;
}

function getTagColor(tagList) {
  resString = "";

  for (i = 0; i < tagList.length; i++) {
    start = "<span class=\"";
    resString = resString + start;
    word = tagList[i];
    num = getNumber(tagList[i]);
    num = num % 6;
    switch (num) {
      case 0:
        resString = resString + "label label-primary";
        break;
      case 1:
        resString = resString + "label label-danger";
        break;
      case 2:
        resString = resString + "label label-info";
        break;
      case 3:
        resString = resString + "label label-success";
        break;
      case 4:
        resString = resString + "label label-warning";
        break;
      case 5:
        resString = resString + "label label-default";
        break;
      default:
        resString = resString + "label ";

    }
    resString = resString + "\">" + word + "</span>    ";
  }
  return resString;
}

$(document).on('click', ".snapshot", function() {
  subjetLine = $(this).find("h3").html();
  creationLine = $(this).find("h5").eq(0).html();
  tags = $(this).find("h5").eq(1).html();
  console.log(tags);
  messageBody = $(this).find("p").html();

  $("#displayModalLabel").html("<h4>"+subjetLine+"</h4>");
  $("#displayBlogCreation").html(creationLine);
  $("#displayBlogTags").html(tags);
  $("#displayBlogMessage").html(messageBody);

  $("#displayBlogPost").modal('toggle');

});

$("#blogCommentSubmit").click(function () {

  blogComment= $("#blogComment").val();
  alert(blogComment);
  $("#commentsFeed").append("<div>"+blogComment+"</div>");

})
