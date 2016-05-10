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
});

var thumbsUp = function() {
  qualityControl('.thumbs-up', 'cool', 'awesome', 'genius');
}

var thumbsDown = function() {
  qualityControl('.thumbs-down', 'genius', 'awesome', 'cool');
}

var qualityControl = function(target, type, type2, type3 ) {
  $('.ideas').delegate(target, 'click', function() {
    var status = $(this).siblings('h2')
    var id = $(this).parent().attr('id').split('-')[1]
    if(status.text() === type) {
      status.text(type2);
      postQuality(id, status);
    } else if(status.text() === type2) {
      status.text(type3)
      postQuality(id, status);
    } else {
      alert('There is no where else to go!')
    }
  })
}

var postQuality = function(id, quality) {
  $.ajax({
    url: '/api/v1/ideas/' + id,
    type: 'PUT',
    data: { postParams: { quality: quality.text() } },
    success: function() {
      console.log('success')
    }
  })
}
