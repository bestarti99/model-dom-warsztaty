'use strict'

/* Znajdowanie elementów po ID*/
var parFirst = document.getElementById('parFirst');
console.log(parFirst);

/* Znajdowanie elementów po ID*/
var linki = document.getElementsByClassName('superlink')
console.log(linki);
console.log(linki[0]);


/* Znajdowanie elementów po tagu (znaczniku)*/
var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

/* Znajdowanie elementów po selektorze*/
var elementPoSelektorze = document.querySelector('#parFirst > a');
console.log(elementPoSelektorze);

var elementPoSelektorze = document.querySelectorAll('#parFirst > a');
console.log(elementPoSelektorze);


var TablicaZTresciaLinkow = [];
elementPoSelektorze.forEach(function(el, i) {
    console.log(el.innerHTML);
    
    TablicaZTresciaLinkow.push(el.innerHTML);
});

console.log(TablicaZTresciaLinkow);
