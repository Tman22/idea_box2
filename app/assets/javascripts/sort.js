var sortIdeas = function() {
  $('#sort').on('click', function() {
    var sortedIdeas = $('.idea').sort(function(a,b) {
      var qualitySet = {cool: 0, awesome: 1, genius: 2};
      var qualityA = $(a).find('h4').text();
      var qualityB = $(b).find('h4').text();
      return ((qualitySet[qualityA] < qualitySet[qualityB]) ? -1 : ((qualitySet[qualityA]> qualitySet[qualityB]) ? 1 : 0));
    })
    counter += 1;
    if (counter % 2 === 0) {
      $('.ideas').children().remove();
      $('.ideas').prepend(sortedIdeas.reverse());
    } else {
      $('.ideas').children().remove();
      $('.ideas').append(sortedIdeas);
    }
  })
}
