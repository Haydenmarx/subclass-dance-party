var makeColorSwapDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(this.styleSettings);
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.prototype.step.call(this, makeColorSwapDancer);
};

makeColorSwapDancer.prototype = Object.create(makeDancer.prototype);
makeColorSwapDancer.prototype.constructor = makeColorSwapDancer;

makeColorSwapDancer.prototype.step = function() {
  var one = Math.floor(Math.random() * (1000 - 0) + 0);
  var two = Math.floor(Math.random() * (1000 - 0) + 0);
  var three = Math.floor(Math.random() * (1000 - 0) + 0); 
  var randomColor = ''.concat('rgb(', one, ', ', two, ', ', three, ')');
  this.$node.css('border-color', randomColor);
  makeDancer.prototype.step.call(this, makeColorSwapDancer);
};