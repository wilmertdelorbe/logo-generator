const { Cube, Pyramid, Disc } = require("./geometric_figures");

// Testing the Disc shape
describe("Disc", () => {
  // Check if the Disc renders correctly with a specific color
  test("should generate svg for a teal disc element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="85" fill="teal" />';
    const disc = new Disc();
    disc.setHue("teal");
    const actualSvg = disc.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  
  // Verify that the Disc can accept different colors
  test("should accept a fillHue parameter", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="85" fill="gold" />';
    const disc = new Disc();
    disc.setHue("gold");
    const actualSvg = disc.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

// Testing the Pyramid shape
describe("Pyramid", () => {
  // Check if the Pyramid renders correctly with a specific color
  test("should generate svg for a crimson pyramid element", () => {
    const expectedSvg =
      '<polygon points="150, 10 280, 190 20, 190" fill="crimson" />';
    const pyramid = new Pyramid();
    pyramid.setHue("crimson");
    const actualSvg = pyramid.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  
  // Verify that the Pyramid can accept different colors
  test("should accept a fillHue parameter", () => {
    const expectedSvg =
      '<polygon points="150, 10 280, 190 20, 190" fill="limegreen" />';
    const pyramid = new Pyramid();
    pyramid.setHue("limegreen");
    const actualSvg = pyramid.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

// Testing the Cube shape
describe("Cube", () => {
  // Check if the Cube renders correctly with a specific color
  test("should generate svg for a navy cube element", () => {
    const expectedSvg =
      '<rect x="70" y="30" width="160" height="140" fill="navy" />';
    const cube = new Cube();
    cube.setHue("navy");
    const actualSvg = cube.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  
  // Verify that the Cube can accept different colors
  test("should accept a fillHue parameter", () => {
    const expectedSvg =
      '<rect x="70" y="30" width="160" height="140" fill="orange" />';
    const cube = new Cube();
    cube.setHue("orange");
    const actualSvg = cube.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});