'get script'

var istniejacyWezel = document.getElementById('parSecond').children[0];

console.log(istniejacyWezel);


/* Utworzenie nowego nagłówka w istniejącum akapicie - wstrzyknięcie przed tekstem */
var header = document.createElement('h2');
var textInHeader = document.createTextNode('Nowy nagłówek H2');
var secondText = document.createTextNode (' dalszy tekst')

/* Dodanie tekstu do utworzonego węzła H2 */
header.appendChild(textInHeader);
header.appendChild(secondText);

console.log(header);

/* Wstrzykujemy ten tekst do kodu HTML */
/*
document.getElementById('parSecond').insertBefore(header, istniejacyWezel);
*/

//bardziej uniwersalne rozwiązanie - odwoluje sie dio rodzica
istniejacyWezel.parentElement.insertBefore(header, istniejacyWezel);

/*  utworzenie atrybutu - dodanie id do utworzonego headera*/
var attribiute = document.createAttribute('id');

header.setAttributeNode(attribiute);
header.id = 'nowe-id';

/* USUNIĘCIE PARAGRAFU  */
istniejacyWezel.parentElement.removeChild(istniejacyWezel);