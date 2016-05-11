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
  searchListener();
  thumbsUp();
  thumbsDown();
  editInline();
});

var editInline = function() {
  $('.ideas').delegate('.content', 'click', function() {
    var id = $(this).parent().attr('id').split('-')[1]
    $(this).focusout(function(){
      if(this.id === 'title') {
        var postParams = {title: $(this).text() }
      } else {
        var postParams = {body: $(this).text() }
      }
      updateIdea(id, postParams)
    })
  })
}
