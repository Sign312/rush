let bgColor = "#39a1d8";
let defaultColor = "#000";

class Paint {
  init({ canvasEl, width, height }) {
    this.canvasEl = canvasEl;
    this.ctx = this.canvasEl.getContext("2d");
    this.width = width;
    this.height = height;

    this.clear();
  }

  clear() {
    this.fillRect(0, 0, this.width, this.height, bgColor);
  }

  drawImage(img, x, y, width, height) {
    this.ctx.drawImage(img, x, y, width, height);
  }

  fillRect(x, y, width, height, color = defaultColor) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
    this.ctx.closePath();
  }
}

export default new Paint();
