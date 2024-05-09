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
    constructor () {
        // Initialize text & shape that will have color properties
        this.textEl = ''
        this.shapeEl = ''
    }
    setText(text, color) {
        this.textEl = `<text x="120 y="100" font-size="40" text-anchor="middle" fill="${color}>${text}</text>`
    }
    setShape(shape) {
        this.shapeEl = shape.render()
    }
    render () {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
}

// Function to create SVG file and notify user
function createLogo() {
    const fileName = 'logo.svg';
    fs.writeFile(fileName, data, (err) => {
        if (err) {}
            console.error(err);
            return;
        });
        console.log(`Generated ${fileName}!`);
}

// Prompt user from command line
inquirer
    .prompt([
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
    ])
    .then((answers) => {
        // text input
        let text = '';
        if (answers.text.length > 0 && answers.text.length < 4) {
            text = answers.text;
        } else {
            console.log("Please enter no more than 3 characters");
            return;
        }
        // color inputs
        textColor = answers.textColor;
        shapeColor = answers.shapeColor;
        // shape input
        user_shape = answers.shape;

        let shapeEl; // grab user choice to create new shape
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

        let svg = new Svg();
        svg.setText(text, textColor);
        svg.setShape(shapeEl);
        svgString = svg.render();
        createLogo(fileName, svgString);
    })