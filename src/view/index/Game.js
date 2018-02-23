import paint from "./game_util/paint";
import Animate from "./game_util/Animate";
import Frame from "./game_util/Frame";
import images from "./game_util/images";
import loadingDotsGif from "./image/loading-dots.gif";

class Game {
  constructor() {
    this.init();
  }

  showLoading() {
    this.loadingEl = document.createElement("img");
    this.loadingEl.style.position = "fixed";
    this.loadingEl.style.transform = "translate(-50%,0)";
    this.loadingEl.style.left = "50%";
    this.loadingEl.src = loadingDotsGif;
    document.body.appendChild(this.loadingEl);
  }

  hideLoading() {
    this.loadingEl.remove();
  }

  async init() {
    this.showLoading();

    await images.init();

    this.hideLoading();

    this.canvasEl = document.querySelector("#gameCanvas");

    let width = (this.canvasEl.width = window.innerWidth);
    let height = (this.canvasEl.height = window.innerHeight);

    paint.init({ width, height, canvasEl: this.canvasEl });
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
