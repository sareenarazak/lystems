import { Turtle } from "./turtle.js";

const canvas = document.getElementById("lystem-canvas");
const ctx = canvas.getContext('2d');

const testTurtle = new Turtle(ctx);
testTurtle.forward(60);
testTurtle.turnLeft(90);
testTurtle.forward(60);
testTurtle.turnLeft(90);
testTurtle.forward(60);
testTurtle.turnLeft(90);
testTurtle.forward(60);
testTurtle.turnLeft(90);

