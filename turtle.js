export class Turtle {
    constructor(canvas, x = 0, y = 0, angle = 0) {
        this.context = canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.angle = angle;
    }

    setupCanvas() {
        const width = this.context.canvas.width;
        const height = this.context.canvas.height;

        // clears all the pixels
        this.context.clearRect(0,0 , width, height);
        // sets color of the stroke
        this.context.strokeStyle = "blue";

        // start angle
        this.context.rotate(this.angle);
    }

    turnLeft(angleInDeg) {
        this.turn(angleInDeg);
    }

    turnRight(angleInDeg) {
        this.turn(-angleInDeg);
    }

    turn(angleInDeg) {
        this.angle += Turtle.getRadian(angleInDeg) % (2 * Math.PI);
    }

    forward(length) {
        this.context.beginPath();
        this.context.moveTo(this.x, this.y);
        this.x += Math.sin(this.angle) * length;
        this.y += Math.cos(this.angle) * length;
        this.context.lineTo(this.x, this.y);
        this.stroke();
    }

    stroke() {
        this.context.stroke();
    }

    save() {
        this.context.save();
    }

    restore() {
        this.context.restore();
    }

    static getRadian(angleInDegrees) {
        return (angleInDegrees * Math.PI) / 180;
    }
}
