var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(this.styleSettings);
  this.timeBetweenSteps = timeBetweenSteps;
  this.move = true;
  makeDancer.prototype.step.call(this, makeBlinkyDancer);
  makeDancer.prototype.moveStep.call(this, makeBlinkyDancer);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  this.$node.toggle(); 
  makeDancer.prototype.step.call(this, makeBlinkyDancer);
};


makeBlinkyDancer.prototype.moveStep = function() {
  var top = this.$node[0].style.top;
  top = Number(top.slice(0, -2));
  if (this.move === true) {
    if (top < $(window).height() - 100) {
      top += 10;
      top = ''.concat(top, 'px');
      this.$node[0].style.top = top;
    }
    makeDancer.prototype.moveStep.call(this, makeBlinkyDancer);   
  }
};