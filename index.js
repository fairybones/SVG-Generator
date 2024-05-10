// Import packages needed to run this application
const inquirer = require('inquirer');
const fs = require('fs');

// Import shape class constructors
const { Circle, Square, Triangle } = require("./lib/shapes.js");

// For user inputs to generate SVG
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color (Keyword or Hexadecimal #)!',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a background shape:',
        choices: [
            {
                name: 'Circle',
                value: 'circle'
            },
            {
                name: 'Square',
                value: 'square'
            },
            {
                name: 'Triangle',
                value: 'triangle'
            }
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or hex # for the shape you selected:',
    }
]

// Create SVG class with methods for rendering
class Svg {
    constructor() {
        // Initialize text & shape that will have color properties
        this.textEl = ''
        this.shapeEl = ''
    }
    setText(text, color) {
        this.textEl = `<text x="120" y="120" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape) {
        this.shapeEl = shape.render()
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`
    }
}

// Run application once all files are loaded & prompts inputted
async function init() {
    let svgString = '';
    const fileName = 'logo.svg';

    // Prompt user from command line
    const answers = await inquirer.prompt(questions);

    // Handle text input
    let text = '';
    if (answers.text.length > 0 && answers.text.length < 4) {
        text = answers.text;
    } else {
        console.log("Please enter no more than 3 characters");
        return;
    }
    textColor = answers.textColor;

    // Handle shape choice
    user_shape = answers.shape;
    shapeColor = answers.shapeColor;

    // Request rendering of shape selected
    let shapeEl;
    if (user_shape === "Circle" || user_shape === "circle") {
        shapeEl = new Circle();
    } else if (user_shape === "Square" || user_shape === "square") {
        shapeEl = new Square();
    } else if (user_shape === "Triangle" || user_shape === "triangle") {
        shapeEl = new Triangle();
    } else {
        console.log("Oops! Something went wrong.")
    }
    shapeEl.setColor(shapeColor);

    // Function to create SVG file 
    function createLogo() {

        fs.writeFile(fileName, svgString, (err) => {
            err ? console.error('Oops! Something went wrong.') : console.log(`Generated ${fileName}!`);
        });
    }

    // Append data to SVG
    let svg = new Svg();
    svg.setText(text, textColor);
    svg.setShape(shapeEl);
    svgString = svg.render();
    createLogo(fileName, svgString);
}
init();