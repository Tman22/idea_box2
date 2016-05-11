var editInline = function() {
  $('.ideas').delegate('.content', 'click', function() {
    var id = $(this).parent().attr('id').split('-')[1];
    var target = this;

    enterListener(target, id);
    clickListener(target, id);
  })
}

var clickListener = function(target, id) {
  $(target).focusout(function(){
    updating(target, id);
  })
}

var enterListener = function(target, id) {
  $(target).keypress(function(e) {
    if(e.which === 13) {
      updating(target, id);
      e.preventDefault();
    }
  })
}

var updating = function(target, id){
  var postParams = { };
  postParams[target.id] = $(target).text();
  updateIdea(id, postParams);
}
