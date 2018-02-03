import Ball from "./Ball";
import clockPng from "../../../image/clock.png";
import images from "../game_util/images";
import paint from "../game_util/paint";

const flyBallSpeed = 12;
const ball1Speed = 2;

class Shoot {
  constructor() {
    this.ball1 = new Ball();
    this.flyBalls = [];
    this.score = 0;
    window.shoot = this;
    document.querySelector("#gameCanvas").addEventListener("click", () => {
      this.flyBalls.push(this.ball1);
      this.ball1 = new Ball();
    });
  }

  render() {
    this.ball1.render();
    for (let ball of this.flyBalls) {
      ball.render();
    }
  }

  reset() {
    this.ball1.reset();
    this.score = 0;
    this.flyBalls = [];
  }

  reach(ball) {
    this.score += 1;
  }

  update() {
    if (this.ball1.centerHeight > paint.height - 40) {
      this.ball1.centerHeight -= ball1Speed;
    }
    this.flyBalls = this.flyBalls.filter(ball => {
      if (ball.centerHeight < -ball.r) {
        this.reach(ball);
        return false;
      }
      ball.centerHeight -= flyBallSpeed;
      return true;
    });
  }
}

export default Shoot;
