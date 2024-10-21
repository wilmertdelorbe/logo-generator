// Base class for all shapes
class Shape {
  constructor() {
    this.hue = '';
  }

  // Method to set the color of the shape
  setHue(hue) {
    this.hue = hue;
  }
}

// Disc shape class (equivalent to Circle in your previous version)
class Disc extends Shape {
  // Method to render the disc as SVG
  render() {
    return `<circle cx="150" cy="100" r="85" fill="${this.hue}" />`;
  }
}

// Pyramid shape class (equivalent to Triangle in your previous version)
class Pyramid extends Shape {
  // Method to render the pyramid as SVG
  render() {
    return `<polygon points="150, 10 280, 190 20, 190" fill="${this.hue}" />`;
  }
}

// Cube shape class (equivalent to Square in your previous version)
class Cube extends Shape {
  // Method to render the cube as SVG
  render() {
    return `<rect x="70" y="30" width="160" height="140" fill="${this.hue}" />`;
  }
}

// Export the shape classes
module.exports = { Cube, Pyramid, Disc };