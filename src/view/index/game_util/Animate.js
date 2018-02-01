const raf =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };

class Animate {
  signal = false;

  constructor(frame) {
    this.machine = () => {
      raf(this.machine);
      if (!this.signal) {
        return;
      }
      frame(this);
    };
    this.machine();
  }

  start() {
    this.signal = true;
  }

  stop() {
    this.signal = false;
  }
}

export default Animate;
