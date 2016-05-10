function renderIdea(idea) {
  $('.ideas').append(
    "<div id='idea-" + idea.id + "'><h1>" + idea.title + "</h1>" +
    "<h2>" + idea.quality + "</h2>" +
    "<p>" + idea.body + "</p>" +
    "<button class='delete'>Delete</button>" +
    "</div>"
  )
}

function fetchIdeas() {
  $.getJSON('/api/v1/ideas/', function(data) {
    $.each(data, function(index, idea) {
      renderIdea(idea);
    })
  });
}
