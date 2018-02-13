import clockPng from "../../../image/clock.png";
import clipLeftPng from "../../../image/clip_left.png";
import clipRightPng from "../../../image/clip_right.png";
import backgroundPng from "../../../image/background.png";
import flagPng from "../../../image/flag.png";

class Images {
  load(img) {
    return new Promise((resolve, reject) => {
      let image = new Image();
      image.onload = () => {
        resolve(image);
      };
      image.onerror = () => {
        reject(image);
      };
      image.onabort = () => {
        reject(image);
      };
      image.src = img;
    });
  }

  async init() {
    this.clockPng = await this.load(clockPng);
    this.clipLeftPng = await this.load(clipLeftPng);
    this.clipRightPng = await this.load(clipRightPng);
    this.backgroundPng = await this.load(backgroundPng);
    this.flagPng = await this.load(flagPng);
  }
}

export default new Images();
