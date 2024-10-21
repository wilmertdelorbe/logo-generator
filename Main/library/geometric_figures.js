class GeometricFigure {
  constructor() {
    this.hue = "";
  }
  setHue(hue) {
    this.hue = hue;
  }
}

class Disc extends GeometricFigure {
  render() {
    return `<circle cx="150" cy="100" r="85" fill="${this.hue}" />`;
  }
}

class Pyramid extends GeometricFigure {
  render() {
    return `<polygon points="150, 10 280, 190 20, 190" fill="${this.hue}" />`;
  }
}

class Cube extends GeometricFigure {
  render() {
    return `<rect x="70" y="30" width="160" height="140" fill="${this.hue}" />`;
  }
}

module.exports = { Disc, Pyramid, Cube };