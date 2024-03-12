import { Turtle } from "./turtle.js";
import { Lystem } from "./lystem.js"
const canvas = document.getElementById("lystem-canvas");
const ctx = canvas.getContext("2d");
const lystem = new Lystem("F");

lystem.addRule("F", "FF+[+F-F-F]-[-F+F+F]");
lystem.addRule("F", "F+F−F−F+F");
const generations  = 10;
const testTurtle = new Turtle(ctx, 10, 10, 0 );

lystem.draw(generations, testTurtle);
import { Turtle } from "./turtle.js";
import * as Lystem from "./lystem.js"
const canvas = document.getElementById("lystem-canvas");

const generations  = 6;
const length = 5;
let angle = 90;
function animateAngle() {
    const testTurtle = new Turtle(canvas, canvas.width/2, 10, 0 );
    console.log(angle);
    let lystem = Lystem.createContext({
        axiom: "F",
        turtle: testTurtle,
        angle: angle++,
        length: length,
        rules: {
            "F": "F+F-F-F+F"
        },
        symbolTable: {
            ...Lystem.BaseSymbolTable,
            '+': ({ angle, turtle }) => turtle.turnLeft(angle),
            '-': ({ angle, turtle }) => turtle.turnRight(angle),
            "F" : ({length, turtle}) => turtle.forward(length)
        }
    })
    testTurtle.setupCanvas();
    const generated = Lystem.generate(lystem, generations);
    Lystem.draw(lystem, generated);

    setTimeout(() =>
        requestAnimationFrame(animateAngle), 17)
}
animateAngle();

let lystem = Lystem.createContext({
    axiom: "F",
    turtle: testTurtle,
    angle: angle++,
    length: length,
    rules: {
        "F": "F+F-F-F+F"
    },
    symbolTable: {
        ...Lystem.BaseSymbolTable,
        '+': ({ angle, turtle }) => turtle.turnLeft(angle),
        '-': ({ angle, turtle }) => turtle.turnRight(angle),
        "F" : ({length, turtle}) => turtle.forward(length)
    }
})
testTurtle.setupCanvas();
const generated = Lystem.generate(lystem, generations);
Lystem.draw(lystem, generated);
