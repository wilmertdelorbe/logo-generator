class VectorGraphic {
  constructor() {
    this.textComponent = "";
    this.figureComponent = "";
  }

  // Render the complete SVG
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.figureComponent}${this.textComponent}</svg>`;
  }

  // Set the text content and color
  setText(message, hue) {
    if (message.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }
    this.textComponent = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${hue}">${message}</text>`;
  }

  // Set the figure (shape) for the SVG
  setFigure(figure) {
    this.figureComponent = figure.render();
  }
}

module.exports = VectorGraphic;