var thumbsUp = function() {
  qualityControl('.thumbs-up');
}

var thumbsDown = function() {
  qualityControl('.thumbs-down');
}

var qualityControl = function(target, type, type2, type3 ) {
  $('.ideas').delegate(target, 'click', function() {
    var status = $(this).siblings('h2');
    var id = $(this).parent().attr('id').split('-')[1];
    qualityLogic(id, target, status);
  })
}

var qualityLogic = function(id, target, status) {
  var array = ['cool', 'awesome', 'genius']
  if (target === '.thumbs-up') {
    qualityConditional(status, array, id);
  } else {
    qualityConditional(status, array.reverse(), id);
  }
}

var qualityConditional = function(status, array, id) {
  var text = status.text()
  if(text === array[0]) {
      status.text(array[1]);
      var postParams = {quality: status.text()};
      updateIdea(id, postParams);
  } else if(text === array[1]) {
      status.text(array[2]);
      var postParams = {quality: status.text()};
      updateIdea(id, postParams);
  } else {
    alert('There is no where else to go!');
  }
}
