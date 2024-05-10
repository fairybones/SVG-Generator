// Import classes from shapes.js
const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
    it('should render the shape dimensions & fill color correctly', () => {
        const shape = new Circle();
        // grab user input for shapeColor
        // let color = ();
        shape.setColor(color);
        // circle logic from mdn
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="${this.color}"></circle>`);
    });
});

describe('Square', () => {
    it('should render the shape dimensions & fill color correctly', () => {
        const shape = new Square();
        // grab user input for shapeColor
        // let color = ('pink');
        shape.setColor(color);

        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.color}"></rect>`);
    })
});

describe('Triangle', () => {
    it('should render the shape dimensions & fill color correctly', () => {
        const shape = new Triangle();
        // grab user input for shapeColor
        // let color = ('pink');
        shape.setColor(color);

        expect(shape.render()).toEqual(`<polygon points="0, 200 300, 200 150, 0" fill="${this.color}"></polygon>`);
    })
});
