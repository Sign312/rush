import paint from "../game_util/paint";

const clipColor = "#000";
const thick = 20;

class Clip {
  constructor({ speed, marginCenter, topY }) {
    this.speed = speed;
    this.marginCenter = marginCenter;
    this.startMarginCenter = marginCenter;
    this.topY = topY;
    this.thick = thick;

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
    let length = paint.width / 2 - this.marginCenter;
    //第二个关卡起点x
    let rectX = paint.width / 2 + this.marginCenter;

    paint.fillRect(0, this.topY, length, thick);

    paint.fillRect(rectX, this.topY, length, thick);
  }
}

export default Clip;
