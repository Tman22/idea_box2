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
