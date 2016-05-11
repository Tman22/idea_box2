var editInline = function() {
  $('.ideas').delegate('.content', 'click', function() {
    var id = $(this).parent().attr('id').split('-')[1];
    var $target = $(this);
    enterListener($target, id);
    clickListener($target, id);
  })
}

var clickListener = function($target, id) {
  $target.focusout(function(){
    updating($target, id);
  })
}

var enterListener = function($target, id) {
  $target.keypress(function(e) {
    if(e.which === 13) {
      updating($target, id);
      e.preventDefault();
    }
  })
}

var updating = function ($target, id) {
  var postParams = { };
  var pointer = $target.attr('class').split(' ')[1]
  postParams[pointer] = $target.text();
  updateIdea(id, postParams);
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
