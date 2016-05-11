var renderIdea = function(idea) {
  $('.ideas').append(
    "<div class='idea' id='idea-" + idea.id + "'>" +
    "<h1 id='title' class='content' contentEditable='true'>" + idea.title + "</h1>" +
    "<button class='thumbs-up'>UP</button> " +
    "<h2>" + idea.quality + "</h2>" +
    "<button class='thumbs-down'>Down</button>" +
    "<p id='body' class='content' contentEditable='true'>" + idea.body + "</p>" +
    "<button class='delete'>Delete</button>" +
    "</div>"
  )
}

var fetchIdeas = function() {
  $.getJSON('/api/v1/ideas/', function(data) {
    $.each(data, function(index, idea) {
      renderIdea(idea);
    })
  });
}
