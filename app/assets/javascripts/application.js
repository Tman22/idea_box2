// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function() {
  fetchIdeas();
  createIdea();
  deleteListener();
});


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
