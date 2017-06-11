'use strict'

var mainHeader = document.getElementById('main-header');

console.log(mainHeader.innerHTML);

/* zmiana tytułu nagłówka */
mainHeader.innerHTML = 'Nowy <span> nagłówek </span>';

/*

// zmiana nagłówka wraz z atrybutem
mainHeader.outerHTML = '<h3> Mały nagłówek </h3>'
*/

/* pobranie zawartośći linku dla pierwszego linku*/
var link = document.getElementsByClassName('link')[0];

console.log(link);

/* podmieniamy atrybut dla tego linka */
link.href = 'http://akademia108.pl';


console.log(link.className);
link.className  = 'pierwsza-klasa druga-klasa';

link.className  = 'trzecia-klasa';

/* DODANIE NOWEJ KLASY DLA WSZYSTKICH LINKÓW */
var allLinks = document.getElementsByTagName('a');
console.log(allLinks);

for(var i = 0; i<allLinks.length; i++) {
    allLinks[i].className += ' zupelnie-nowa-klasa';
}

console.log(allLinks);

/* Dopisanie koloru dla podstawowego znacznika nagłówka  DLA KAŻDEJ WŁAŚCIOŚCI W OSOBNEJ LINII*/
mainHeader.style.color = '#ff0000';
mainHeader.style.backgroundColor = '#00ff00';


/* Dopięcie arkuszu styli */
var styles = document.createElement('link');
var att = document.createAttribute('href');
var rel= document.createAttribute('rel'); 

att.value = 'http://style.css';
att.value = 'stylesheet';

styles.setAttributeNode(att);
styles.setAttributeNode(rel);

console.log(styles);

document.head.appendChild(styles);



/*allLinks.forEach (function(el, i) {
    el.className += 'zupelnie-nowa-klasa';
});*/