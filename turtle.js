export class Turtle {
    constructor(canvas, x = 0, y = 0, angle = 0) {
        const ctx = canvas.getContext("2d");
        this.context = ctx;
        this.x = x;
        this.y = y;
        this.angle = angle;
    }

    setupCanvas() {
        const width = this.context.canvas.clientWidth;
        const height = this.context.canvas.clientHeight;
        // clears all the pixels
        this.context.clearRect(0,0 , width, height);
        // sets color of the stroke
        this.context.strokeStyle = "blue";

       //this.setOrigin();
    }

    setOrigin() {
        this.context.translate(this.x, this.y);
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
