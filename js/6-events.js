'get script'

/*
// Zamiana treści alertu
function alertFunction() {
   alert('nowy alert');
}
*/


// ZMIANA KOLORU TŁA PO KLIKNIĘCIU W PARAGRAF
function alertFunction(par) {
/*   
// bez podanych parametrów this w HTML, oraz par w funkcji
var par = document.getElementById('parFirst').firstElementChild;*/
    
    par.style.backgroundColor= 'pink';
}


/* OBSŁUGA EVENTÓW*/

var firstLink = document.getElementsByClassName('inna-klasa')[0];

firstLink.addEventListener('click', highlight);

function highlight(event) {
    event.preventDefault(); //zablokowanie defaultowego działania, np przeładowanie strony po kliknięciu
    event.stopPropagation(); //zablokowanie przesuwania sie zdarzenie w górę dokumentu
    this.style.border = ' 2px yellow solid';
    alert('kliknięto w link');
}


// ZMIANA KOLORU HEADERA PRZEZ FUNKCJĘ 2 SPOSOBY
var mainHeader = document.getElementById('main-header');

/*
mainHeader.onclick= function() {
    this.style.backgroundColor = 'red';
};
*/

function changeBackground() {
    this.style.backgroundColor = 'red';
    //usunięcie nasłuchiwania
    firstLink.removeEventListener('click', highlight);
};

mainHeader.onclick= changeBackground; 


/* PROPAGINACJA */
document.getElementById('sectionFirst').addEventListener('click', function() {
    alert('kliknięto w sekcję');
    
});
