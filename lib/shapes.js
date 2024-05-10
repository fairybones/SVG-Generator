class Shape {
    constructor() {
        // Initialize color
        this.color = '';
    } // Get user input for shape color
    setColor(color) {
        this.color = (color);
    }
}

class Circle extends Shape {
    render() { // circle at logo size with fill color given
        return `<circle cx="50%" cy="50%" r="100" fill="${this.color}"></circle>`
    }
}

class Square extends Shape {
    render() { // square svg with fill color inputted
        return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`
    }
}

class Triangle extends Shape {
    render() { // triangle shape at logo size with color given
        return `<polygon points="0, 200 300, 200 150, 0" fill="${this.color}"></polygon>`
    }
}

// export shape class and subclasses to be used elsewhere
module.exports = { Circle, Square, Triangle }