
# ---CONSEGNA ESERCIZIO---

#### Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
#### -il prezzo del biglietto è definito in base ai km (0.21 € al km) 
#### va applicato uno sconto del 20% per i minorenni
#### va applicato uno sconto del 40% per gli over 65.
#### L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

-----------------------------------------------------------------------------------------------------

```javascript
//Definiamo una variabile costante:

const priceKm = 0.21 //----> Euro per ogni km percorso



//Definiamo le variabili costanti definite dall'utente:

const age --------> Età del passeggero

const km ---------> Km che vuole percorrere il passeggero



// Scrivo i km a schermo nella pagina html 

document.getElementById(il mio id).innerHTML =(km) +' Km';



//Definiamo una variabile dove è contenuto il prezzo totale senza sconti:

const priceFull = priceKm * Nuber(km) ---->Trasformiamo in numero la stringa inserita dall'utente



//Definiamo una variabile dove saranno presenti gli sconti:

let finalPrice



//Applichiamo i vari sconti:

SE Number(age) < 18{

finalPrice = 20% di priceFull ---> minorenni

scrivo nell'html

}

INVECE SE Number(age) >= 65{

finalPrice = 40% di priceFull ---> over 65

scrivo nell'html

}

ALTRIMENTI{

finalPrice = priceFull ----------> tra 18 e 65 il prezzo non varia

scrivo nell'html

}


//Stiampiamo il risultato in forma umana:

const finalPriceRounded = Math.round ((finalPrice + Number.EPSILON)*100)/100;

console.log (finalPriceRounded);

scrivo nell'html

```