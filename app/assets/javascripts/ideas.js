var renderIdea = function(idea) {
  $('.ideas').prepend(
    "<div class='idea' id='idea-" + idea.id + "'>" +
    "<h1 id='title-"+idea.id+"' class='content title' contentEditable='true'>" + idea.title + "</h1>" +
    "<button class='thumbs-up'>UP</button> " +
    "<h2>" + idea.quality + "</h2>" +
    "<button class='thumbs-down'>Down</button>" +
    "<p class='content body' contentEditable='true'>" + idea.body + "</p>" +
    "<button id='delete-" + idea.id + "' class='delete'>Delete</button>" +
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

var fetchSingleIdea = function(id) {
  $.getJSON('/api/v1/ideas/' + id, function(data) {
    $('#idea-' + id).replaceWith(renderIdea(data))
  })
}
