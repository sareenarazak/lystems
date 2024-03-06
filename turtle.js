export class Turtle {
    constructor(context, x = 0, y = 0, angle = 0) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.angle = angle;
    }

    setupCanvas() {
        const width = this.context.clientWidth;
        const height = this.context.clientHeight;

        // clears all the pixels
        this.context.clearRect(0,0 , width, height);
        // sets color of the stroke
        this.context.strokeStyle = "blue";

        this.setOrigin();

        // start angle
        this.context.rotate(this.angle);
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
       this.goToCurrentPosition();
       this.x += Math.sin(this.angle) * length;
       this.y += Math.cos(this.angle) * length;
       this.context.lineTo(this.x, this.y);
       this.stroke();
    }

    goToCurrentPosition() {
        this.context.beginPath();
        this.context.moveTo(this.x, this.y);
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
