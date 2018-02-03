import paint from "./paint";
import Clip from "../game_part/Clip";
import Shoot from "../game_part/Shoot";

class Frame {
  constructor() {
    this.clip1 = new Clip({
      speed: 1,
      marginCenter: 80,
      topY: 80
    });
    this.clip2 = new Clip({
      speed: 1.2,
      marginCenter: 40,
      topY: 180
    });
    this.clip3 = new Clip({
      speed: 0.8,
      marginCenter: 100,
      topY: 250
    });
    this.shoot = new Shoot();
  }

  judge(animate) {
    for (let ball of this.shoot.flyBalls) {
      if (this.judgeSingleCrash(this.clip1, ball, animate)) {
        return true;
      }
      if (this.judgeSingleCrash(this.clip2, ball, animate)) {
        return true;
      }
      if (this.judgeSingleCrash(this.clip3, ball, animate)) {
        return true;
      }
    }
    return false;
  }

  judgeSingleCrash(clip, ball, animate) {
    let rightSide = paint.width / 2 + clip.marginCenter;
    let bottomSide = clip.topY + clip.thick;
    let topSide = clip.topY;
    let x = paint.width / 2;
    let y = ball.centerHeight;
    let r = ball.r;

    //检查是否碰到下角
    let distance2bottomAngle = Math.sqrt(
      Math.pow(y - bottomSide, 2) + Math.pow(rightSide - x, 2)
    );
    if (distance2bottomAngle <= r) {
      animate.stop();
      return true;
    }

    //检查是否碰到上角
    let distance2topAngle = Math.sqrt(
      Math.pow(y - topSide, 2) + Math.pow(rightSide - x, 2)
    );
    if (distance2topAngle <= r) {
      animate.stop();
      return true;
    }

    //检查是否碰到侧边
    if (y <= bottomSide && y >= topSide) {
      if (rightSide - x <= r) {
        animate.stop();
        return true;
      }
    }

    return false;
  }

  singleFrame(animate) {
    this.judge(animate);
    paint.clear();
    this.clip1.render();
    this.clip1.update();
    this.clip2.render();
    this.clip2.update();
    this.clip3.render();
    this.clip3.update();
    this.shoot.render();
    this.shoot.update();
  }

  reset() {
    this.clip1.reset();
    this.clip2.reset();
    this.clip3.reset();
    this.shoot.reset();
  }
}

export default Frame;
