var deleteListener = function() {
  $('.ideas').delegate('.delete', 'click', function() {
    var ideaId = $(this).parent().attr('id').split('-')[1]
    ajaxDelete(ideaId);
  })
}

var ajaxDelete = function(id) {
  return $.ajax({
    url: '/api/v1/ideas/' + id,
    type: 'DELETE',
    success: function() {
      $('#idea-' + id).remove()
    },
    error: function(xhr) {
      console.log(xhr)
    }
  })
}
