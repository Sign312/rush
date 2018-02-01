import paint from "./game_util/paint";
import Animate from "./game_util/Animate";
import Frame from "./game_util/Frame";
import images from "./game_util/images";

class Game {
  constructor() {
    this.init();
  }

  async init() {
    const canvasEl = document.querySelector("#gameCanvas");

    let width = (canvasEl.width = window.innerWidth);
    let height = (canvasEl.height = window.innerHeight);

    paint.init({ width, height, canvasEl });

    await images.init();
    this.start();
  }

  start() {
    this.frame = new Frame();

    this.animate = new Animate(this.frame.singleFrame.bind(this.frame));

    this.animate.start();
  }

  reset() {
    this.frame.reset();
    this.animate.start();
  }
}

export default Game;