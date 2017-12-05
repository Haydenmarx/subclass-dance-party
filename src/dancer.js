// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.styleSettings = {
    top: top,
    left: left
  };

  // this.prototype.step();
  this.$node.css(this.styleSettings);
  // this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step, this.timeBetweenSteps);
};

// makeDancer.prototype.styleSettings = function() {

// };


// makeDancer.prototype.setPosition = function (top, left) {
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };