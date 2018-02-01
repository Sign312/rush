import clockPng from "../../../image/clock.png";

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
  }
}

export default new Images();
