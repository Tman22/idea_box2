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
    qualityLogic(id, type, type2, type3, status)
  })
}

var qualityLogic = function(id, type, type2, type3, status) {
  if(status.text() === type) {
    status.text(type2);
    var postParams = {quality: status.text()}
    updateIdea(id, postParams);
  } else if(status.text() === type2) {
    status.text(type3)
    var postParams = {quality: status.text()}
    updateIdea(id, postParams);
  } else {
    alert('There is no where else to go!')
  }
}

var updateIdea = function(id, postParams) {
  $.ajax({
    url: '/api/v1/ideas/' + id,
    type: 'PUT',
    data: { postParams },
    success: function() {
      fetchSingleIdea(id)
      console.log('success')
    }
  })
}
