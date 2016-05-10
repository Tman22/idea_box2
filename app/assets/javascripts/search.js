var searchListener = function() {
  $('#search').keyup(function() {
    var word = $(this).val().toLowerCase()
    var $ideas = $('.idea')
    $ideas.each(function(index, idea) {
      var idea = $(idea);
      var ideaText = idea.find('.content').text().toLowerCase();
      if(ideaText.indexOf(word) >= 0 ) {
        idea.show()
      } else {
        idea.hide()
      }
    })
  })
}
