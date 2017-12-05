$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    event.preventDefault;
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    // var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //makeDancer

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    //window['makeDancer']

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('#lineUpDancers').on('click', function(event) {
    var dancers = $('.dancer');
    var lefty = 200;
    for (var i = 0; i < dancers.length; i++) {
      $('.dancer')[i].style.top = '200px';
      $('.dancer')[i].style.left = ''.concat(lefty, 'px');
      lefty += 25;
    }
  });

  $('#randomizeDancers').on('click', function(event) {
    var dancers = $('.dancer');
    for (var i = 0; i < dancers.length; i++) {
      var height = $(window).height();
      var width = ($(window).width());
      var top = Math.floor(Math.random() * (height - 0) + 0);
      var left = Math.floor(Math.random() * (width - 0) + 0);
      $('.dancer')[i].style.top = ''.concat(top, 'px');
      $('.dancer')[i].style.left = ''.concat(left, 'px');
    }        
  });
});

