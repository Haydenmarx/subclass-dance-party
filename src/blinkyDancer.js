var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(this.styleSettings);
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.prototype.step.call(this, makeBlinkyDancer);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  this.$node.toggle();
  makeDancer.prototype.step.call(this, makeBlinkyDancer);
};