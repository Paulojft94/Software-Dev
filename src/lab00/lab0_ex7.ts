import { minConverter } from "./functions00";
let horas: number = 12;
let minutos: number = 34;

const minutosPast = minConverter(horas, minutos);

console.log("Já se passaram desde a meia noite " + minutosPast, " minutos");
