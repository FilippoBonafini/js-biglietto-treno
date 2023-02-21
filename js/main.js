'use strict'

// variabile prezzo per km 
const priceKm = 0.21;

// variabili definite dall'utente 
const age = parseInt(prompt("Quanti anni hai?"));
const km = parseInt(prompt("Quanti km devi percorrere?"));

// Scrivo i km a schermo nella pagina html 
document.getElementById('distance').innerHTML =(km) +' Km';


// Variabile con prezzo senza sconti 
const priceFull = priceKm * km;

//Variabile con prezzo scontato
let finalPrice;


//Applico gli sconti e li associo alla variabile
if (age < 18){
    finalPrice = (priceFull * 0.8);
    // Scrivo il risultato a schermo nella pagina html
    document.getElementById('discount').innerHTML =(priceFull - finalPrice).toFixed(2) +' $';
} else if (age >= 65){
    finalPrice = (priceFull * 0.6);
    // Scrivo il risultato a schermo nella pagina html
    document.getElementById('discount').innerHTML =(priceFull - finalPrice).toFixed(2) +' $';
} else{
    finalPrice = priceFull
    // Scrivo il risultato a schermo nella pagina html
    document.getElementById('discount').innerHTML = "-";
}


//Creo una variabile contenente il risultato arrotondato
const finalPriceRounded = (finalPrice).toFixed(2); 
// Math.round ((finalPrice + Number.EPSILON)*100)/100;  <---- METODO ALTERNATIVO

//Scrivo il risultato il linguaggio unamo
console.log (finalPriceRounded+"$ è il prezzo del tuo biglietto");

// Scrivo nella pagina html il totale dovuto 
document.getElementById('totalAmount').innerHTML =(finalPriceRounded) +'$';
