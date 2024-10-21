const VectorGraphic = require("./vectorGraphic");
const { Cube } = require("./geometric_figures");

test("should render a 300 x 200 svg element", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
  const vectorGraphic = new VectorGraphic();
  expect(vectorGraphic.render()).toEqual(expectedSvg);
});

test("should append text element", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
  const vectorGraphic = new VectorGraphic();
  vectorGraphic.setText("A", "white");
  expect(vectorGraphic.render()).toEqual(expectedSvg);
});

test("should set text message and color", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
  const vectorGraphic = new VectorGraphic();
  vectorGraphic.setText("SVG", "#333");
  expect(vectorGraphic.render()).toEqual(expectedSvg);
});

// Test for text length exception
test("should throw if text exceeds 3 characters", () => {
  const expectedError = new Error("Text must not exceed 3 characters.");
  const vectorGraphic = new VectorGraphic();
  expect(() => vectorGraphic.setText("HELLO", "#333")).toThrow(expectedError);
});

test("should include a figure", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="30" width="160" height="140" fill="maroon" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
  const vectorGraphic = new VectorGraphic();
  vectorGraphic.setText("SVG", "#333");
  const cube = new Cube();
  cube.setHue("maroon");
  vectorGraphic.setFigure(cube);
  expect(vectorGraphic.render()).toEqual(expectedSvg);
});