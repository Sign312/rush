import paint from "../game_util/paint";
import images from "../game_util/images";

const ballWidth = 40;
const ballHeight = 40;

class Ball {
  constructor(
    image = images.clockPng,
    centerHeight = paint.height - ballHeight / 2
  ) {
    this.image = image;
    this.centerHeight = centerHeight;
    this.startCenterHeight = centerHeight;
    this.r = ballWidth / 2;
  }

  render() {
    let x = paint.width / 2 - this.r;
    let y = this.centerHeight - this.r;
    paint.drawImage(this.image, x, y, ballWidth, ballHeight);
  }

  reset() {
    this.centerHeight = this.startCenterHeight;
  }
}

export default Ball;
