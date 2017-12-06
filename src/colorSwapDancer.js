var makeColorSwapDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(this.styleSettings);
  this.timeBetweenSteps = timeBetweenSteps;
  this.move = true;
  makeDancer.prototype.step.call(this, makeColorSwapDancer);
  makeDancer.prototype.moveStep.call(this, makeColorSwapDancer);
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

makeColorSwapDancer.prototype.moveStep = function() {
  var top = this.$node[0].style.top;
  top = Number(top.slice(0, -2));
  if (this.move === true) {
    if (top < $(window).height() - 100) {
      top += 10;
      top = ''.concat(top, 'px');
      this.$node[0].style.top = top;
    }
    makeDancer.prototype.moveStep.call(this, makeColorSwapDancer);   
  }
};