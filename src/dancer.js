// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(this.styleSettings);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step, this.timeBetweenSteps);
};