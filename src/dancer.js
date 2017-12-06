// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(this.styleSettings);
  var one = Math.floor(Math.random() * (1000 - 0) + 0);
  var two = Math.floor(Math.random() * (1000 - 0) + 0);
  var three = Math.floor(Math.random() * (1000 - 0) + 0); 
  var randomColor = ''.concat('rgb(', one, ', ', two, ', ', three, ')');
  this.$node.css('border-color', randomColor);
};

makeDancer.prototype.step = function() {
  var innerThis = this;
  var func = this.step;
  var time = this.timeBetweenSteps;
  setTimeout(function() {
    func.call(innerThis);
  }, time);
};

makeDancer.prototype.moveStep = function() {
  var innerThis = this;
  var func = this.moveStep;
  var time = this.timeBetweenSteps;
  if (this.move === true) {
    setTimeout(function() {
      func.call(innerThis);
    }, time);
  }
};