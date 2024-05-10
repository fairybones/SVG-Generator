// Import classes from shapes.js
const { Circle, Square, Triangle } = require('./shapes.js');

describe('Circle', () => {
    it('should render the shape dimensions & fill color correctly', () => {
        const shape = new Circle();

        let color = 'red';
        shape.setColor(color);

        // circle logic from mdn
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="red"></circle>`);
    });
});

describe('Square', () => {
    it('should render the shape dimensions & fill color correctly', () => {
        const shape = new Square();

        let color = 'blue';
        shape.setColor(color);

        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="blue"></rect>`);
    });
});

describe('Triangle', () => {
    it('should render the shape dimensions & fill color correctly', () => {
        const shape = new Triangle();

        let color = 'green';
        shape.setColor(color);

        expect(shape.render()).toEqual(`<polygon points="0, 200 300, 200 150, 0" fill="green"></polygon>`);
    });
});
