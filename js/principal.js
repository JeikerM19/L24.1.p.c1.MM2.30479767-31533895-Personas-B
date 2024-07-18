import Cl_procesarP from "./Cl_proscesarP.js";
import Cl_personas from "./Cl_personas.js"

let per1 = new Cl_personas("Luis", 15, 1);
let per2 = new Cl_personas("Ana", 19, 2);
let per3 = new Cl_personas("José", 21, 1);
let per4 = new Cl_personas("Carmen", 17, 2);
let per5 = new Cl_personas("Rosa", 18, 2);
let per6 = new Cl_personas("José", 22, 1);
let per7 = new Cl_personas("María", 17, 2);
let per8 = new Cl_personas("Luz", 19, 2);
let per9 = new Cl_personas("Rafael", 23, 1);
let per10 = new Cl_personas("Liz", 15, 2);
let per11 = new Cl_personas("Marcos", 20, 1);
let per12 = new Cl_personas("Leo", 16, 1);


let prosP = new Cl_procesarP();
prosP.procesarPersonas(per1);
prosP.procesarPersonas(per2);
prosP.procesarPersonas(per3);
prosP.procesarPersonas(per4);
prosP.procesarPersonas(per5);
prosP.procesarPersonas(per6);
prosP.procesarPersonas(per7);
prosP.procesarPersonas(per8);
prosP.procesarPersonas(per9);
prosP.procesarPersonas(per10);
prosP.procesarPersonas(per11);
prosP.procesarPersonas(per12);

let salida = document.getElementById("Salida");
salida.innerHTML += "Edad promedio es: " + prosP.promPer() + "<br> Edad mayor entre las mujeres: " + prosP.mostrarMayorM();