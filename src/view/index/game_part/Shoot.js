import Ball from "./Ball";
import clockPng from "../../../image/clock.png";
import images from "../game_util/images";
import paint from "../game_util/paint";

const flyBallSpeed = 12;
const storeBallSpeed = 2;

class Shoot {
  constructor() {
    this.storeBalls = [new Ball(), new Ball(), new Ball()];
    this.flyBalls = [];
    this.score = 0;
    window.shoot = this;
    document
      .querySelector("#gameCanvas")
      .addEventListener("click", this.onClick.bind(this));
    this.createAudioEl();
  }

  onClick() {
    let ball = this.storeBalls[this.storeBalls.length - 1];
    this.storeBalls = [
      new Ball(),
      ...this.storeBalls.slice(0, this.storeBalls.length - 1)
    ];
    this.flyBalls.push(ball);
    this.audioRePlay();
  }

  audioRePlay() {
    // this.videoEl.pause();
    // this.videoEl.currentTime = 0;
    this.videoEl.play();
  }

  createAudioEl() {
    this.videoEl = document.createElement("audio");
    this.videoEl.src = "http://public.flypie.cn/na/music/shoot.wav";
    this.videoEl.style.display = "none";
    document.body.appendChild(this.videoEl);
  }

  render() {
    for (let ball of this.storeBalls) {
      ball.render();
    }
    for (let ball of this.flyBalls) {
      ball.render();
    }
  }

  reset() {
    this.score = 0;
    this.flyBalls = [];
  }

  reach(ball) {
    this.score += 1;
  }

  update() {
    for (let key in this.storeBalls) {
      let ball = this.storeBalls[key];
      let standline = paint.height - ball.r - ball.r * 2 * key - 30;
      if (ball.centerHeight > standline) {
        ball.centerHeight -= storeBallSpeed;
      }
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
