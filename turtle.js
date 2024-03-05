export class Turtle {
    constructor(context) {
        this.context = context;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
    }

    turnLeft(angleInDeg) {
        this.turn(angleInDeg);
    }

    turnRightt(angleInDeg) {
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
       this.context.stroke();

    }

    goToCurrentPosition() {
        this.context.beginPath();
        this.context.moveTo(this.x, this.y);
    }

    static getRadian(angleInDegrees) {
        return (angleInDegrees * Math.PI) / 180;
    }
}
