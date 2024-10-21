const inquirer = require("inquirer");
const VectorGraphic = require("./vectorGraphic");
const { Disc, Pyramid, Cube } = require("./geometric_figures");
const { writeFile } = require("fs/promises");

class CommandLineInterface {
  // Method to run the command line interface
  execute() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message: "Enter text for the logo (max 3 characters):",
          validate: (text) =>
            text.length <= 3 || "The text must not exceed 3 characters",
        },
        {
          name: "textHue",
          type: "input",
          message: "Enter a text color:",
        },
        {
          name: "figureType",
          type: "list",
          message: "Select a shape for the logo:",
          choices: ["disc", "cube", "pyramid"],
        },
        {
          name: "figureHue",
          type: "input",
          message: "Enter a shape color:",
        },
      ])
      .then(({ text, textHue, figureType, figureHue }) => {
        // Create the appropriate figure based on user input
        let figure;
        switch (figureType) {
          case "disc":
            figure = new Disc();
            break;
          case "cube":
            figure = new Cube();
            break;
          default:
            figure = new Pyramid();
            break;
        }
        figure.setHue(figureHue);

        // Create and configure the vector graphic
        const vectorGraphic = new VectorGraphic();
        vectorGraphic.setText(text, textHue);
        vectorGraphic.setFigure(figure);
        
        // Write the vector graphic to a file
        return writeFile("logo.svg", vectorGraphic.render());
      })
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((error) => {
        console.error("An error occurred while generating the logo:");
        console.error(error);
      });
  }
}

module.exports = CommandLineInterface;
