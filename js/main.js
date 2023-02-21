'use strict'

// variabile prezzo per km 
const priceKm = 0.21;

// variabili definite dall'utente 
const age = prompt("Quanti anni hai?");
const km = prompt("Quanti km devi percorrere?");

// Variabile con prezzo senza sconti 
const priceFull = priceKm * Number(km);

//Variabile con prezzo scontato
let finalPrice;

//Applico gli sconti e li associo alla variabile
if (Number(age) < 18){
    finalPrice = (priceFull * 0.8);
} else if (Number(age) >= 65){
    finalPrice = (priceFull * 0.6);
} else{
    finalPrice = priceFull
}

//Creo una variabile contenente il risultato arrotondato
const finalPriceRounded = Math.round ((finalPrice + Number.EPSILON)*100)/100;

//Scrivo il risultato il linguaggio unamo
console.log (finalPriceRounded+"$ è il prezzo del tuo biglietto");
