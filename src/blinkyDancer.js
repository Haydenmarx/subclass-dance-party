var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  makeBlinkyDancer.prototype.step();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


// makeBlinkyDancer.prototype.step = function() {
//   var blinking = setInterval(function() {
//     this.$node.toggle();
//   }, this.timeBetweenSteps); 
  
// };

// makeBlinkyDancer.prototype.step = function() {
//   var blinking = setInterval(function() {
//     blinkyDancer.$node.toggle();
//   }, 2000);
//   blinking();
// };

// blinkyDancer.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   oldStep();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   blinkyDancer.$node.toggle();
// };