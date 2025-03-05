// var generateName = require("sillyname");

import generateName from "sillyname";
import {randomSuperhero} from "superheroes";
import superheroes from "superheroes";

var sillyName = generateName();
var superheroName = randomSuperhero();
const name = superheroes[1];

console.log(`My name is ${sillyName}`);
console.log(`My name is ${superheroName}`);
console.log(name);