import paint from "../game_util/paint";
import images from "../game_util/images";

const clipColor = "#000";
const thick = 20;
const flagWidth = 60;

class Clip {
  constructor({ speed, marginCenter, topY, flag }) {
    this.speed = speed;
    this.marginCenter = marginCenter;
    this.startMarginCenter = marginCenter;
    this.topY = topY;
    this.thick = thick;
    this.flag = flag;

    this.stretch = true;
  }

  reset() {
    this.marginCenter = this.startMarginCenter;
  }

  update() {
    if (this.marginCenter <= 0) {
      this.stretch = false;
    }
    if (this.marginCenter >= paint.width / 2) {
      this.stretch = true;
    }
    if (this.stretch) {
      this.marginCenter -= this.speed;
    } else {
      this.marginCenter += this.speed;
    }
  }

  render() {
    //关卡长度
    let length = paint.width / 2;
    //第二个关卡起点x
    let rectX = paint.width / 2 + this.marginCenter;

    paint.drawImage(
      images.clipLeftPng,
      -this.marginCenter,
      this.topY,
      length,
      thick
    );

    paint.drawImage(images.clipRightPng, rectX, this.topY, length, thick);

    if (this.flag) {
      paint.drawImage(
        images.flagPng,
        rectX,
        this.topY - flagWidth + 5,
        flagWidth,
        flagWidth
      );
    }
  }
}

export default Clip;
