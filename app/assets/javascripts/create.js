var createIdea = function() {
  $('#create').on('click', function() {
    var postParams = {
      title: $('#idea-title').val(),
      body: $('#idea-body').val(),
    };
    postIdea(postParams);
  })
}

var postIdea = function(postParams) {
  $.ajax({
    url: '/api/v1/ideas',
    type: 'POST',
    data: { postParams },
    success: function(idea) {
      renderIdea(idea);
      removeText();
    },
    error: function(xhr) {
      console.log(xhr)
    }
  })
}

var removeText = function() {
  $('#idea-title').val('');
  $('#idea-body').val('');
}
