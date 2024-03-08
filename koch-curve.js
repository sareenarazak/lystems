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
